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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A standard chess piece
var Chesspiece = function () {
	function Chesspiece() {
		_classCallCheck(this, Chesspiece);
	}

	_createClass(Chesspiece, null, [{
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

	return Chesspiece;
}();

exports.default = Chesspiece;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _chessboard = __webpack_require__(3);

var _chessboard2 = _interopRequireDefault(_chessboard);

var _chesspiece = __webpack_require__(1);

var _chesspiece2 = _interopRequireDefault(_chesspiece);

var _chessrules = __webpack_require__(4);

var _chessrules2 = _interopRequireDefault(_chessrules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new Phaser.Game(500, 500, Phaser.AUTO, 'game', { preload: preload,
  create: create,
  update: update });

// Game logic vars
var board = new _chessboard2.default();

// Render vars
// TODO rename and clean up
var SIZE = 500;
var PIECE_WIDTH = 60;
var NUM_PIECES_SPRITES = 12;
var BOARD_PIECES_WIDE = board.size;
var BOARD_GRID_WIDTH = SIZE / board.size;
var needRender = false;

var MOVE_INCREMENT = 400;
var colorToMove = _chesspiece2.default.WHITE;
var moveTime;

function preload() {
  game.stage.backgroundColor = 0xFFFFFF;
  game.load.spritesheet('pieces', 'img/ChessPieces.png', PIECE_WIDTH, PIECE_WIDTH, NUM_PIECES_SPRITES);
}

function create() {
  board.initStandardLayout();

  needRender = true;
  moveTime = game.time.now + MOVE_INCREMENT;
}

function update() {
  if (needRender) {
    clearAllRendered();
    renderBoard();
    renderPieces();
    needRender = false;
  }

  if (game.time.now > moveTime) {
    var x1, y1, x2, y2;
    var validMoveFound;
    while (!validMoveFound) {
      var found;

      var randomIndex = function randomIndex() {
        return Math.floor(Math.random() * board.size);
      };

      // Select random piece
      found = false;
      while (!found) {
        x1 = randomIndex();
        y1 = randomIndex();
        found = board.data[x1][y1] && board.data[x1][y1][1] === colorToMove;
      }

      /*
            if (false) {
              // Select square one away from curr
              found = false;
              while(!found)
              {
                // Shift by -1, 0, 1
                x2 = x1 + Math.floor((Math.random() * 3) - 1);
                y2 = y1 + Math.floor((Math.random() * 3) - 1);
                found = (x2 > 0 && x2 < board.size) && (y2 > 0 && y2 < board.size);
              }
            }
      */
      /*
            if (true) {
              // Advance by one square
              found = false;
              while(!found) {
                var isWhite = board.data[x1][y1][1] === Chesspiece.WHITE;
                x2 = x1;
                y2 = y1 + (isWhite ? 1 : -1);
                found = true;
              }
            }
      */
      if (true) {
        // Select random empty square
        found = false;
        while (!found) {
          x2 = randomIndex();
          y2 = randomIndex();
          found = board.data[x2][y2] === undefined;
        }
      }

      // Check move is valid
      validMoveFound = _chessrules2.default.isValidMove(x1, y1, x2, y2, board);
    }

    // Move piece to square
    board.move(x1, y1, x2, y2);
    moveTime = game.time.now + MOVE_INCREMENT;
    colorToMove = colorToMove === _chesspiece2.default.WHITE ? _chesspiece2.default.BLACK : _chesspiece2.default.WHITE;
    needRender = true;
  }
}

function clearAllRendered() {
  game.world.removeAll();
}

function renderBoard() {
  // Add grid lines
  var graphics = game.add.graphics(0, 0);
  graphics.beginFill(0x888888);
  graphics.lineStyle(1, 0x999999, 1);

  // Draw vertical lines
  var lineWidth = 1;
  for (var i = 1; i < BOARD_PIECES_WIDE; i++) {
    graphics.drawRect(i * BOARD_GRID_WIDTH - lineWidth / 2, 0, lineWidth, SIZE);
  }

  // Draw horizontal lines
  for (var i = 1; i < BOARD_PIECES_WIDE; i++) {
    graphics.drawRect(0, i * BOARD_GRID_WIDTH - lineWidth / 2, SIZE, lineWidth);
  }
}

function renderPieces() {
  // TODO revert bad loops
  for (var x = 0; x < board.size; x++) {
    for (var y = 0; y < board.size; y++) {
      // Check that piece is present
      if (board.data[x][y] == undefined) {
        continue;
      }

      var piece = board.data[x][y][0];
      var color = board.data[x][y][1];

      var pixelXY = gridToXY([x, y]);
      var pX = pixelXY[0];
      var pY = pixelXY[1];
      var sprite = game.add.sprite(pX, pY, 'pieces');

      var spriteIndex = getSpriteIndexForPiece(piece, color);
      sprite.frame = spriteIndex;
    }
  }
}

function gridToXY(xyPair) {
  var xi = xyPair[0];
  var yi = xyPair[1];
  var yi2 = BOARD_PIECES_WIDE - 1 - yi;

  return [xi * BOARD_GRID_WIDTH, yi2 * BOARD_GRID_WIDTH];
};

// Values:
// KING = 0;
// QUEEN = 1;
// ROOK = 2;
// BISHOP = 3;
// KNIGHT = 4;
// PAWN = 5;
//
// Sprites:
// QUEEN = 0;
// KING = 1;
// ROOK = 2;
// KNIGHT = 3;
// BISHOP = 4;
// PAWN = 5
function getSpriteIndexForPiece(piece, color) {
  var spriteMapping = {
    '0': 1,
    '1': 0,
    '2': 2,
    '3': 4,
    '4': 3,
    '5': 5
  };

  // Shift return index according to color (black preceedes white on sheet)
  var shift = color === _chesspiece2.default.BLACK ? 0 : 6;

  return spriteMapping[piece] + shift;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _chesspiece = __webpack_require__(1);

var _chesspiece2 = _interopRequireDefault(_chesspiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getFlatRank = function getFlatRank(pieceType) {
  var res = [];
  for (var i = 0; i < 8; i++) {
    res.push(pieceType);
  }

  return res;
};

var FRONT_RANK = [_chesspiece2.default.PAWN, _chesspiece2.default.PAWN, _chesspiece2.default.PAWN, _chesspiece2.default.PAWN, _chesspiece2.default.PAWN, _chesspiece2.default.PAWN, _chesspiece2.default.PAWN, _chesspiece2.default.PAWN];

var BACK_RANK = [_chesspiece2.default.ROOK, _chesspiece2.default.KNIGHT, _chesspiece2.default.BISHOP, _chesspiece2.default.QUEEN, _chesspiece2.default.KING, _chesspiece2.default.BISHOP, _chesspiece2.default.KNIGHT, _chesspiece2.default.ROOK];

/*
const FRONT_RANK = getFlatRank(Chesspiece.BISHOP);
const BACK_RANK = getFlatRank(Chesspiece.ROOK);
*/

// A standard chess board, with 0,0 at bottem left corner (AN 'a1')

var Chessboard = function () {
  function Chessboard() {
    _classCallCheck(this, Chessboard);

    this.size = 8;
    this.data = [];
    this.captures = {};

    this.reset();
  }

  // Clear the chess board of all pieces and captures


  _createClass(Chessboard, [{
    key: 'reset',
    value: function reset() {
      this.data = _utils2.default.createArray(8, 8);
      this.captures[_chesspiece2.default.WHITE] = [];
      this.captures[_chesspiece2.default.BLACK] = [];
    }
  }, {
    key: 'initStandardLayout',
    value: function initStandardLayout() {
      // Add piece data to board row by row as [type, color] pair
      for (var i = 0; i < 8; i++) {
        this.data[i][0] = [BACK_RANK[i], _chesspiece2.default.WHITE];
        this.data[i][1] = [FRONT_RANK[i], _chesspiece2.default.WHITE];
        this.data[i][7] = [BACK_RANK[i], _chesspiece2.default.BLACK];
        this.data[i][6] = [FRONT_RANK[i], _chesspiece2.default.BLACK];
      }
    }

    // Move

  }, {
    key: 'move',
    value: function move(x1, y1, x2, y2) {
      this.data[x2][y2] = this.data[x1][y1];
      delete this.data[x1][y1];
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

  return Chessboard;
}();

exports.default = Chessboard;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _chesspiece = __webpack_require__(1);

var _chesspiece2 = _interopRequireDefault(_chesspiece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// A simple chess ruleset, no castling / en passant (yet)
var Chessrules = function () {
  function Chessrules() {
    _classCallCheck(this, Chessrules);
  }

  _createClass(Chessrules, null, [{
    key: 'isValidMove',
    value: function isValidMove(x1, y1, x2, y2, board) {
      // Trivial invalid
      if (x1 == x2 && y1 == y2) {
        return false;
      }

      var fromData = board.data[x1][y1];

      // Check that from-square has a piece
      if (!fromData) {
        return false;
      }

      var fromPiece = fromData[0];
      var fromColor = fromData[1];

      var toData = board.data[x2][y2];

      var isCapturing = false;
      if (toData) {
        isCapturing = true;

        var toPiece = toData[0];
        var toColor = toData[1];

        // Not valid if trying to capture own piece
        if (toColor === fromColor) {
          return false;
        }
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
        var capturedType = captured[0];

        if (capturedType === _chesspiece2.default.KING) {
          return false;
        }
      }

      var dx = x2 - x1;
      var dy = y2 - y1;
      var absDx = Math.abs(dx);
      var absDy = Math.abs(dy);

      var isStraight = dx === 0 || dy === 0;
      var isDiagonal = absDx === absDy;

      var pieceData = board.data[x1][y1];
      var pieceType = pieceData[0];
      var pieceColor = pieceData[1];

      if (isStraight) {
        if (isBlocked) {
          return false;
        }

        if (pieceType === _chesspiece2.default.QUEEN || pieceType === _chesspiece2.default.ROOK) {
          return true;
        }

        var moveDist = Math.max(absDx, absDy);
        if (moveDist === 1) {
          if (pieceType === _chesspiece2.default.KING) {
            return true;
          } else {
            var isWhitePiece = pieceColor === _chesspiece2.default.WHITE;
            var isY = dx === 0;
            var isForward = isWhitePiece ? dy === 1 : dy === -1;

            if (isForward) {
              if (pieceType === _chesspiece2.default.PAWN) {
                return true;
              }
            }
          }
        }
      } else if (isDiagonal) {
        if (isBlocked) {
          return false;
        }

        if (pieceType === _chesspiece2.default.QUEEN || pieceType === _chesspiece2.default.BISHOP) {
          return true;
        }

        var moveDist = absDx;
        if (moveDist === 1) {
          if (pieceType === _chesspiece2.default.KING) {
            return true;
          }
        }
      } else {
        var isKnightA = absDx === 2 && absDy === 1;
        var isKnightB = absDx === 1 && absDy === 2;
        if (isKnightA || isKnightB) {
          if (pieceType === _chesspiece2.default.KNIGHT) {
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
        var dxIncr = dx / absDx;
        var checkX = x1 + dxIncr;
        while (checkX != x2) {
          var hasPiece = board.data[checkX][y1];
          if (hasPiece) {
            return true;
          }

          checkX += dxIncr;
        }
      } else if (movingY) {
        var dyIncr = dy / absDy;
        var checkY = y1 + dyIncr;
        while (checkY != y2) {
          var hasPiece = board.data[x1][checkY];
          if (hasPiece) {
            return true;
          }

          checkY += dyIncr;
        }
      }
    }
  }]);

  return Chessrules;
}();

exports.default = Chessrules;

/***/ })
/******/ ]);