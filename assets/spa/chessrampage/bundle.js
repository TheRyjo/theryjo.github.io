/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A standard chess piece
var Piece = function () {
  _createClass(Piece, null, [{
    key: 'KING',
    get: function get() {
      return 0;
    }
  }, {
    key: 'QUEEN',
    get: function get() {
      return 1;
    }
  }, {
    key: 'ROOK',
    get: function get() {
      return 2;
    }
  }, {
    key: 'BISHOP',
    get: function get() {
      return 3;
    }
  }, {
    key: 'KNIGHT',
    get: function get() {
      return 4;
    }
  }, {
    key: 'PAWN',
    get: function get() {
      return 5;
    }
  }, {
    key: 'WHITE',
    get: function get() {
      return 0;
    }
  }, {
    key: 'BLACK',
    get: function get() {
      return 1;
    }
  }]);

  function Piece(type, color) {
    _classCallCheck(this, Piece);

    this.type = type;
    this.color = color;
  }

  _createClass(Piece, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getColor',
    value: function getColor() {
      return this.color;
    }
  }]);

  return Piece;
}();

exports.default = Piece;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createArray(length) {
  var arr = new Array(length || 0),
      i = length;

  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) {
      arr[length - 1 - i] = createArray.apply(this, args);
    }
  }

  return arr;
}

function shallowCopyArray(arr) {
  var arr2 = [];

  for (var i = 0; i < arr.length; i++) {
    arr2[i] = arr[i].slice();
  }
}

function isInteger(val) {
  return val === parseInt(val, 10);
}

var Utils = {};
Utils.createArray = createArray;
Utils.shallowCopyArray = shallowCopyArray;

exports.default = Utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A chess move encded as coordinate pair
var Move = function () {
  function Move(fromX, fromY, toX, toY) {
    _classCallCheck(this, Move);

    this.fromX = fromX;
    this.fromY = fromY;
    this.toX = toX;
    this.toY = toY;
  }

  _createClass(Move, [{
    key: "getFromX",
    value: function getFromX() {
      return this.fromX;
    }
  }, {
    key: "getFromY",
    value: function getFromY() {
      return this.fromY;
    }
  }, {
    key: "getToX",
    value: function getToX() {
      return this.toX;
    }
  }, {
    key: "getToY",
    value: function getToY() {
      return this.toY;
    }
  }]);

  return Move;
}();

exports.default = Move;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A helper class for generating piece sets
var Rank = function () {
  function Rank() {
    _classCallCheck(this, Rank);
  }

  _createClass(Rank, null, [{
    key: 'getFlatRank',
    value: function getFlatRank(pieceType) {
      var res = [];
      for (var i = 0; i < 8; i++) {
        res.push(pieceType);
      }

      return res;
    }
  }, {
    key: 'STANDARD_FRONT',
    get: function get() {
      return [_piece2.default.PAWN, _piece2.default.PAWN, _piece2.default.PAWN, _piece2.default.PAWN, _piece2.default.PAWN, _piece2.default.PAWN, _piece2.default.PAWN, _piece2.default.PAWN];
    }
  }, {
    key: 'STANDARD_BACK',
    get: function get() {
      return [_piece2.default.ROOK, _piece2.default.KNIGHT, _piece2.default.BISHOP, _piece2.default.QUEEN, _piece2.default.KING, _piece2.default.BISHOP, _piece2.default.KNIGHT, _piece2.default.ROOK];
    }
  }]);

  return Rank;
}();

exports.default = Rank;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A chess player
var Player = function () {
  function Player(board, color, pieces) {
    _classCallCheck(this, Player);

    this.color = color;
    this.pieces = pieces;
    this.captures = [];
  }

  _createClass(Player, [{
    key: 'getColor',
    value: function getColor() {
      return this.color;
    }
  }, {
    key: 'getPieces',
    value: function getPieces() {
      return this.pieces;
    }
  }, {
    key: 'getCaptures',
    value: function getCaptures() {
      return this.captures;
    }
  }, {
    key: 'getNextMove',
    value: function getNextMove(board) {
      return null;
    }
  }, {
    key: 'confirmMove',
    value: function confirmMove() {}
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _board = __webpack_require__(6);

var _board2 = _interopRequireDefault(_board);

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _ruleset = __webpack_require__(7);

var _ruleset2 = _interopRequireDefault(_ruleset);

var _move = __webpack_require__(2);

var _move2 = _interopRequireDefault(_move);

var _player = __webpack_require__(4);

var _player2 = _interopRequireDefault(_player);

var _phaserRenderer = __webpack_require__(8);

var _phaserRenderer2 = _interopRequireDefault(_phaserRenderer);

var _game = __webpack_require__(9);

var _game2 = _interopRequireDefault(_game);

var _computer = __webpack_require__(10);

var _computer2 = _interopRequireDefault(_computer);

var _human = __webpack_require__(11);

var _human2 = _interopRequireDefault(_human);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rendering vars
var size = 500;
var game = new Phaser.Game(size, size, Phaser.AUTO, 'game', { preload: preload,
  create: create,
  update: update });
var spriteIndexer = function spriteIndexer(piece) {
  var spriteMapping = [1, 0, 2, 4, 3, 5];
  var shift = piece.getColor() === _piece2.default.BLACK ? 0 : 6;

  return spriteMapping[piece.getType()] + shift;
};
var renderer = new _phaserRenderer2.default(game, size, spriteIndexer);
var needRender = false;

// Game logic lets
var board = new _board2.default();
var chessGame = new _game2.default(board, [new _human2.default(board, _piece2.default.WHITE, []),
//new Computer(board, Piece.WHITE, []),
new _computer2.default(board, _piece2.default.BLACK, [])]);

function preload() {
  game.stage.backgroundColor = 0xFFFFFF;
  game.load.spritesheet('pieces', 'img/ChessPieces.png', 60, 60, 12); // 12 sprites 60x60 px
  needRender = true;
}

function create() {
  chessGame.init();
  alert("Welcome. To get started, click and enter your first move");
  needRender = true;
}

function update() {
  // Perform rendering if necessary
  if (needRender) {
    renderer.clearAllRendered();
    renderer.renderBoard(chessGame.getBoard());
    renderer.renderPieces(chessGame.getBoard());
    needRender = false;
  }

  needRender = chessGame.continue();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _move = __webpack_require__(2);

var _move2 = _interopRequireDefault(_move);

var _rank = __webpack_require__(3);

var _rank2 = _interopRequireDefault(_rank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A standard chess board, with 0,0 at bottem left corner (AN 'a1')
var Board = function () {
  function Board() {
    _classCallCheck(this, Board);

    this.length = 8;
    this.data = [];
    this.captures = {};

    this.reset();
  }

  // Clear the chess board of all pieces and captures


  _createClass(Board, [{
    key: 'reset',
    value: function reset() {
      this.data = _utils2.default.createArray(8, 8);
      this.captures[_piece2.default.WHITE] = [];
      this.captures[_piece2.default.BLACK] = [];
    }
  }, {
    key: 'initStandardLayout',
    value: function initStandardLayout() {
      var front = _rank2.default.STANDARD_FRONT;
      var back = _rank2.default.STANDARD_BACK;

      // Add piece data to board row by row as [type, color] pair
      for (var i = 0; i < 8; i++) {
        this.data[i][0] = new _piece2.default(back[i], _piece2.default.WHITE);
        this.data[i][1] = new _piece2.default(front[i], _piece2.default.WHITE);
        this.data[i][7] = new _piece2.default(back[i], _piece2.default.BLACK);
        this.data[i][6] = new _piece2.default(front[i], _piece2.default.BLACK);
      }
    }

    // Move

  }, {
    key: 'doMove',
    value: function doMove(move) {
      this.data[move.getToX()][move.getToY()] = this.data[move.getFromX()][move.getFromY()];
      delete this.data[move.getFromX()][move.getFromY()];
    }

    // Capture

  }, {
    key: 'capture',
    value: function capture(x, y, capturer) {
      // Check piece exists at x,y
      var piece = this.data[x][y];

      if (piece) {
        // Add captured to capturer
        this.captures[capturer].push(piece);

        // Remove captured from 
        delete this.data[x][y];
      } else {
        throw {
          name: 'InvalidCapture',
          message: 'Capture location does not contain a piece'
        };
      }
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _move = __webpack_require__(2);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A simple chess ruleset, no castling / en passant (yet)
var Ruleset = function () {
  function Ruleset() {
    _classCallCheck(this, Ruleset);
  }

  _createClass(Ruleset, null, [{
    key: 'isValidMove',
    value: function isValidMove(move, board) {
      var x1 = move.getFromX();
      var y1 = move.getFromY();
      var x2 = move.getToX();
      var y2 = move.getToY();

      if (x1 == x2 && y1 == y2) {
        return false;
      }

      // Check that from-square has a piece
      var fromSquare = board.data[x1][y1];
      if (!fromSquare) {
        return false;
      }

      var fromPiece = fromSquare;
      var fromType = fromSquare.getType();
      var fromColor = fromSquare.getColor();

      var toSquare = board.data[x2][y2];

      var isCapturing = false;
      if (toSquare) {
        var toPiece = toSquare;

        // Not valid if trying to capture own piece
        if (fromPiece.getColor() === toPiece.getColor()) {
          return false;
        }

        isCapturing = true;
      }

      // Check if pieces in the way between from and to
      var isBlocked = this.isPathDirectAndBlocked(x1, y1, x2, y2, board);

      // Check move for piece type
      var isValid = this.isValidMoveByPieceType(x1, y1, x2, y2, board, isBlocked, isCapturing);

      return isValid;
    }
  }, {
    key: 'isValidMoveByPieceType',
    value: function isValidMoveByPieceType(x1, y1, x2, y2, board, isBlocked, isCapturing) {
      if (isCapturing) {
        var captured = board.data[x2][y2];

        if (captured.getType() === _piece2.default.KING) {
          return false;
        }
      }

      var dx = x2 - x1;
      var dy = y2 - y1;
      var absDx = Math.abs(dx);
      var absDy = Math.abs(dy);

      var isStraight = dx === 0 || dy === 0;
      var isDiagonal = absDx === absDy;

      var fromPiece = board.data[x1][y1];
      if (!fromPiece) {
        return false;
      }

      if (isStraight) {
        if (isBlocked) {
          return false;
        }

        if (fromPiece.getType() === _piece2.default.QUEEN || fromPiece.getType() === _piece2.default.ROOK) {
          return true;
        }

        var moveDist = Math.max(absDx, absDy);
        if (moveDist === 1) {
          if (fromPiece.getType() === _piece2.default.KING) {
            return true;
          } else {
            var isWhitePiece = fromPiece.getColor() === _piece2.default.WHITE;
            var isY = dx === 0;
            var isForward = isWhitePiece ? dy === 1 : dy === -1;

            if (isForward) {
              if (fromPiece.getType() === _piece2.default.PAWN) {
                return true;
              }
            }
          }
        }
      } else if (isDiagonal) {
        if (isBlocked) {
          return false;
        }

        if (fromPiece.getType() === _piece2.default.QUEEN || fromPiece.getType() === _piece2.default.BISHOP) {
          return true;
        }

        var _moveDist = absDx;
        if (_moveDist === 1) {
          if (fromPiece.getType() === _piece2.default.KING) {
            return true;
          }
        }
      } else {
        var isKnightA = absDx === 2 && absDy === 1;
        var isKnightB = absDx === 1 && absDy === 2;
        if (isKnightA || isKnightB) {
          if (fromPiece.getType() === _piece2.default.KNIGHT) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: 'isPathDirectAndBlocked',
    value: function isPathDirectAndBlocked(x1, y1, x2, y2, board) {
      var dx = x2 - x1;
      var dy = y2 - y1;
      var absDx = Math.abs(dx);
      var absDy = Math.abs(dy);
      var movingX = absDx > 0;
      var movingY = absDy > 0;

      if (movingX & movingY) {
        if (absDx !== absDy) {
          // Path not direct
          return false;
        } else {
          var dxIncr = dx / absDx;
          var dyIncr = dy / absDy;
          var checkX = x1 + dxIncr;
          var checkY = y1 + dyIncr;
          while (checkX != x2) {
            var hasPiece = board.data[checkX][checkY];
            if (hasPiece) {
              return true;
            }

            checkX += dxIncr;
            checkY += dxIncr;
          }
        }
      } else if (movingX) {
        var _dxIncr = dx / absDx;
        var _checkX = x1 + _dxIncr;
        while (_checkX != x2) {
          var _hasPiece = board.data[_checkX][y1];
          if (_hasPiece) {
            return true;
          }

          _checkX += _dxIncr;
        }
      } else if (movingY) {
        var _dyIncr = dy / absDy;
        var _checkY = y1 + _dyIncr;
        while (_checkY != y2) {
          var _hasPiece2 = board.data[x1][_checkY];
          if (_hasPiece2) {
            return true;
          }

          _checkY += _dyIncr;
        }
      }
    }
  }, {
    key: 'getRandomMoveByPieceColor',
    value: function getRandomMoveByPieceColor(color, board) {
      var x1 = void 0,
          y1 = void 0,
          x2 = void 0,
          y2 = void 0;

      var randomIndex = function randomIndex() {
        return Math.floor(Math.random() * board.length);
      };

      // Select random piece
      var found = void 0;
      while (!found) {
        x1 = randomIndex();
        y1 = randomIndex();

        found = board.data[x1][y1] && board.data[x1][y1].getColor() === color;
      }

      // Select random square not occupied by current player
      found = false;
      while (!found) {
        x2 = randomIndex();
        y2 = randomIndex();

        var isEmpty = board.data[x2][y2] === undefined;
        var isCapture = false;
        if (!isEmpty) {
          isCapture = board.data[x2][y2].getColor() !== color;
        }

        found = isEmpty || isCapture;
      }

      return new _move2.default(x1, y1, x2, y2);
    }
  }]);

  return Ruleset;
}();

exports.default = Ruleset;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _move = __webpack_require__(2);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PhaserRenderer = function () {
  function PhaserRenderer(game, boardWidth, spriteIndexer) {
    _classCallCheck(this, PhaserRenderer);

    this.game = game;
    this.boardWidth = boardWidth;
    this.spriteIndexer = spriteIndexer;
  }

  _createClass(PhaserRenderer, [{
    key: 'gridToXY',
    value: function gridToXY(xyPair, gridDim) {
      var gridSquareWidth = this.boardWidth / gridDim;
      var xi = xyPair[0];
      var yi = xyPair[1];
      var yi2 = gridDim - 1 - yi;

      return [xi * gridSquareWidth, yi2 * gridSquareWidth];
    }
  }, {
    key: 'renderBoard',
    value: function renderBoard(board) {
      var boardSquareWidth = this.boardWidth / board.length;
      var lineWidth = 1;

      // Add grid lines
      var graphics = this.game.add.graphics(0, 0);
      graphics.beginFill(0x888888);
      graphics.lineStyle(1, 0x999999, 1);

      // Draw vertical lines
      for (var i = 1; i < board.length; i++) {
        graphics.drawRect(i * boardSquareWidth - lineWidth / 2, 0, lineWidth, this.boardWidth);
      }

      // Draw horizontal lines
      for (var _i = 1; _i < board.length; _i++) {
        graphics.drawRect(0, _i * boardSquareWidth - lineWidth / 2, this.boardWidth, lineWidth);
      }
    }
  }, {
    key: 'renderPieces',
    value: function renderPieces(board, spriteIndexer) {
      // TODO revert bad loops
      for (var x = 0; x < board.length; x++) {
        for (var y = 0; y < board.length; y++) {
          // Check that piece is present
          if (board.data[x][y] == undefined) {
            continue;
          }

          // Add sprite for piece
          var pixelXY = this.gridToXY([x, y], board.length);
          var pX = pixelXY[0];
          var pY = pixelXY[1];
          var sprite = this.game.add.sprite(pX, pY, 'pieces');

          // Set sprite to correct frame for piece
          var piece = board.data[x][y];
          var spriteIndex = this.spriteIndexer(piece);
          sprite.frame = spriteIndex;
        }
      }
    }
  }, {
    key: 'clearAllRendered',
    value: function clearAllRendered() {
      this.game.world.removeAll();
    }
  }]);

  return PhaserRenderer;
}();

exports.default = PhaserRenderer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _move = __webpack_require__(2);

var _move2 = _interopRequireDefault(_move);

var _rank = __webpack_require__(3);

var _rank2 = _interopRequireDefault(_rank);

var _ruleset = __webpack_require__(7);

var _ruleset2 = _interopRequireDefault(_ruleset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A game of chess
var Game = function () {
  function Game(board, players) {
    _classCallCheck(this, Game);

    this.board = board;
    this.players = players;
    this.turn = 0;
  }

  _createClass(Game, [{
    key: 'init',
    value: function init() {
      this.board.initStandardLayout();
    }

    // Clear the chess board of all pieces and captures

  }, {
    key: 'reset',
    value: function reset() {
      this.data = _utils2.default.createArray(8, 8);
      this.captures[_piece2.default.WHITE] = [];
      this.captures[_piece2.default.BLACK] = [];
    }
  }, {
    key: 'getBoard',
    value: function getBoard() {
      return this.board;
    }
  }, {
    key: 'getPlayers',
    value: function getPlayers() {
      return this.players;
    }
  }, {
    key: 'continue',
    value: function _continue() {
      var curPlayer = this.players[this.turn % this.players.length];

      var move = curPlayer.getNextMove(this.board);
      if (!move) {
        return false;
      }

      var isValidMove = _ruleset2.default.isValidMove(move, this.board);
      if (isValidMove) {
        this.processMove(curPlayer, move);
        curPlayer.confirmMove();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'processMove',
    value: function processMove(player, move) {
      // Perform capture if required by move
      var isCapture = this.board.data[move.getToX()][move.getToY()] !== undefined;
      if (isCapture) {
        this.board.capture(move.getToX(), move.getToY(), player.getColor());
      }

      // Perform move
      this.board.doMove(move);
      this.turn++;
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(4);

var _player2 = _interopRequireDefault(_player);

var _ruleset = __webpack_require__(7);

var _ruleset2 = _interopRequireDefault(_ruleset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// A chess player
var Computer = function (_Player) {
  _inherits(Computer, _Player);

  function Computer(board, color, pieces) {
    _classCallCheck(this, Computer);

    var _this = _possibleConstructorReturn(this, (Computer.__proto__ || Object.getPrototypeOf(Computer)).call(this, board, color, pieces));

    _this.moveDelay = 1000;
    _this.waiting = false;
    _this.moveTime = 0;
    return _this;
  }

  _createClass(Computer, [{
    key: 'getNextMove',
    value: function getNextMove(board) {
      if (!this.waiting) {
        this.waiting = true;
        this.moveTime = Date.now() + this.moveDelay;
        return;
      }

      if (Date.now() > this.moveTime) {
        // Self-validate to save time
        var move = void 0,
            isValidMove = void 0;
        while (!isValidMove) {
          move = _ruleset2.default.getRandomMoveByPieceColor(this.color, board);
          isValidMove = _ruleset2.default.isValidMove(move, board);
        }

        return move;
      } else {
        return null;
      }
    }
  }, {
    key: 'confirmMove',
    value: function confirmMove() {
      this.waiting = false;
    }
  }]);

  return Computer;
}(_player2.default);

exports.default = Computer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(4);

var _player2 = _interopRequireDefault(_player);

var _ruleset = __webpack_require__(7);

var _ruleset2 = _interopRequireDefault(_ruleset);

var _move = __webpack_require__(2);

var _move2 = _interopRequireDefault(_move);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// A chess player
var Human = function (_Player) {
  _inherits(Human, _Player);

  function Human(board, color, pieces) {
    _classCallCheck(this, Human);

    var _this = _possibleConstructorReturn(this, (Human.__proto__ || Object.getPrototypeOf(Human)).call(this, board, color, pieces));

    _this.isThinking = true;

    var self = _this;
    document.addEventListener("click", function () {
      self.finishThinking();
    });
    return _this;
  }

  _createClass(Human, [{
    key: 'getNextMove',
    value: function getNextMove(board) {
      if (!this.isThinking) {
        this.isThinking = true;
        var string = prompt("Enter from/to coordinates (indexed from bottom left -> 0,0) as \"x1 y1 x2 y2\"");
        if (!string) {
          return null;
        }

        var vals = string.split(" ");
        vals = vals.map(function (x) {
          return parseInt(x, 10);
        });
        vals = vals.map(function (x) {
          if (!x || x < 0) {
            return 0;
          }
          if (x > board.length - 1) {
            return board.length - 1;
          } else {
            return x;
          }
        });
        return new _move2.default(vals[0], vals[1], vals[2], vals[3]);
      } else {
        return null;
      }
    }
  }, {
    key: 'confirmMove',
    value: function confirmMove() {
      this.isThinking = true;
    }
  }, {
    key: 'finishThinking',
    value: function finishThinking() {
      this.isThinking = false;
    }
  }]);

  return Human;
}(_player2.default);

exports.default = Human;

/***/ })
/******/ ]);