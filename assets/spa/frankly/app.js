$(document).ready(function(){  
  var model = {
    source: "Long has the Press groaned in bringing forth an hateful, but numerous Brood of Party Pamphlets, malicious Scribbles, and Billingsgate Ribaldry. The Rancour and bitterness it has unhappily infused into Mens minds, and to what a Degree it has sowred and leaven’d the Tempers of Persons formerly esteemed some of the most sweet and affable, is too well known here, to need any further Proof or Representation of the Matter.",
    notes: [],
    rewrite: ""
  };

  stageIdx = 0;
  stages = initFlow(model);
  loadStage(model, stageIdx);

  registerNavigationHandlers(model);
});

$( "#help" ).click(function () {
  if ( $( "#help-content" ).is( ":hidden" ) ) {
    $( "#help-content" ).slideDown( "slow" );
    setTimeout(function() {$( "#help-content" ).hide();}, 4000);
  } else {
    $( "#help-content" ).hide();
  }
});

function registerNavigationHandlers(model) {
    $(document).keydown(function(e){
    var leftArrow = 37;
    var rightArrow = 39;

    if (e.keyCode == rightArrow) {
      advanceStage(model, 1);
    }
    else if (e.keyCode == leftArrow) {
      advanceStage(model, -1);
    }
  });
};

function initFlow(model) {
  // Create first step
  var blank   = new TemplatedStep("#blank-template");

  // Create second step
  var sourceSaveFunc = function(model) {
    model.source = $("div#paragraph_text textarea")[0].value;
  };
  var source  = new TemplatedStep("#source-template", sourceSaveFunc);

  // Create third step
  var notesSaveFunc = function(model) {
    $notes = $("ul#notes li");
    for (var i=0; i<$notes.length; i++) {
      model.notes[i] = $notes[i].textContent;
    }
  };
  var notesPrepareFunc = function() {
    $("input.notes-input").keydown(function(e){
      if (e.keyCode == 13) {
        $input = $("input.notes-input");
        if ($input.val() != ""){
          $("#notes").append("<li>" + $input.val() + "</li>");
          $input.val("");
        }
      }
    });
  };
  var notes   = new TemplatedStep("#notes-template", notesSaveFunc, notesPrepareFunc);

  // Create fourth step
  var rewriteFunc = function (model) { model.rewrite = $("div#rewrite-text textarea")[0].value; };
  var rewrite = new TemplatedStep("#rewrite-template", rewriteFunc);

  // Return flow as step pairs
  return [
    [blank, source],
    [source, notes],
    [notes, rewrite],
    [source, rewrite]
  ];
}

function TemplatedStep (templateSelector, saveFunc, prepareFunc) {
  this.template = Handlebars.compile($(templateSelector).html());
  this.saveFunc = saveFunc;
  this.prepareFunc = prepareFunc;

  this.save = function(model) {
    if (this.saveFunc)
      this.saveFunc(model);
  };

  this.prepare = function() {
    if (this.prepareFunc)
      this.prepareFunc();
  };

  this.render = function(model, isEdit) {
    return this.template({
      edit: !!isEdit,
      model: model
    });
  };
}

function advanceStage(model, increment) {
  if (increment === undefined) {
    increment = 1;
  }

  // If not last stage
  if (stageIdx != 3) {
    var rightStep = stages[stageIdx][1]
    rightStep.save(model);
  }

  stageIdx += increment;
  if (stageIdx >= stages.length) stageIdx = stages.length - 1;
  if (stageIdx <= 0) stageIdx = 0;

  loadStage(model, stageIdx);

  var rightStep = stages[stageIdx][1]
  rightStep.prepare();
}

function loadStage(model, stageIndex) {
  var st = stages[stageIndex];
  var left = st[0];
  var right = st[1];
  var readonly = stageIndex > 2;

  loadSteps(model, left, right, readonly);
}

function loadSteps(model, leftStep, rightStep, readonly) {
  if (readonly === undefined) {
    readonly = false;
  }

  var editable = true;
  if (!readonly) {
    $("div#left-pane").html( leftStep.render(model, !editable) );
    $("div#right-pane").html( rightStep.render(model, editable) );
  }
  else {
    $("div#left-pane").html( leftStep.render(model, !editable) );
    $("div#right-pane").html( rightStep.render(model, !editable) );
  }
}

