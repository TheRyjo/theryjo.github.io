$(document).ready(function(){
  var blankHtml = $("#blank-template").html();
  var sourceHtml = $("#source-template").html();
  var notesHtml = $("#notes-template").html();
  var rewriteHtml = $("#rewrite-template").html();

  var blankTemplate = Handlebars.compile(blankHtml);
  var sourceTemplate = Handlebars.compile(sourceHtml);
  var notesTemplate = Handlebars.compile(notesHtml);
  var rewriteTemplate = Handlebars.compile(rewriteHtml);

  templates = [
    blankTemplate,
    sourceTemplate,
    notesTemplate,
    rewriteTemplate
  ];

  var model = {
    source: "It was November. `Although it was not yet late, the sky was dark when I turned into Laundress Passage. Father had finished for the day, switched off the shop lights and closed the shutters; but so I would not come home to darkness he had left on the light over the stairs to the flat. Through the glass in the door it cast a foolscap rectangle of paleness onto the wet pavement, and it was while I was standing in that rectangle, about to turn my key in the door, that I first saw the letter. Another white rectangle, it was on the fifth step from the bottom, where I couldn't miss it.",
    notes: [],
    rewrite: ""
  };
  
  stageIdx = 0;
  stages = [
    [0,1],
    [1,2],
    [2,3],
    [3,1]
  ];
  stageContexts = [
    [{}, {edit:true, text:model.source}],
    [{edit:false, text:model.source}, {edit:true}],
    [{edit:false, notes:model.notes}, {edit:true, text:model.rewrite}],
    [{edit:false, text:model.rewrite}, {edit:false, text:model.source}]
  ];
  function updateContexts(model) {
    stageContexts = [
      [{}, {edit:true, text:model.source}],
      [{edit:false, text:model.source}, {edit:true}],
      [{edit:false, notes:model.notes}, {edit:true, text:model.rewrite}],
      [{edit:false, text:model.rewrite}, {edit:false, text:model.source}]
    ];
  }

  function advanceStage(increment) {
    if (increment === undefined) {
      increment = 1;
    }

    // pull text from edited
    if (stageIdx === 0) {
      model.source = $("div#paragraph_text textarea")[0].value;
    }
    else if (stageIdx === 1) {
      // pull notes li from ...
      $notes = $("ul#notes li");
      for (var i=0; i<$notes.length; i++) {
        model.notes[i] = $notes[i].textContent;
      }
    }
    else if (stageIdx === 2) {
      // pull rewrite text from ...
      $rewrite = $("div#rewrite-text textarea")[0];
      model.rewrite = $rewrite.value;
    }
    updateContexts(model);

    stageIdx += increment;
    if (stageIdx >= stages.length) stageIdx = stages.length - 1;
    if (stageIdx <= 0) stageIdx = 0;

    var l = stages[stageIdx][0];
    var r = stages[stageIdx][1];
    loadTemplates(l,r);

    if (stageIdx === 1) {
      $("input.notes-input").keydown(function(e){
        if (e.keyCode == 13) {
          $input = $("input.notes-input");
          if ($input.val() != ""){
            $("#notes").append("<li>" + $input.val() + "</li>");
            $input.val("");
          }
        }
      });
    }
    else if (stageIdx === 2) {
      // pull rewrite text from ...
      $rewrite = $("div#rewrite-text textarea")[0];
      model.rewrite = $rewrite.textContent;
    }
  }

  var leftArrow = 37;
  var rightArrow = 39;

  var l = 0;
  var r = 1;
  loadTemplates(l,r);

  function loadTemplates(leftIdx, rightIdx){
    var leftTemplate = templates[leftIdx];
    var rightTemplate = templates[rightIdx];
    var leftContext = stageContexts[stageIdx][0];
    var rightContext = stageContexts[stageIdx][1];

    $("div#left-pane").html(leftTemplate(leftContext));
    $("div#right-pane").html(rightTemplate(rightContext));
  }

  var numTemplates = templates.length;
  $(document).keydown(function(e){
    if (e.keyCode == rightArrow) {
      advanceStage(1);
    }
    else if (e.keyCode == leftArrow) {
      advanceStage(-1);
    }
  });
})
