"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Farm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Farm = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Farm(client) {
    (0, _classCallCheck2["default"])(this, Farm);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * stake lpt
   * @param farmPoolName  farm pool name
   * @param lpt receive Lp
   * @param baseTx { types.BaseTx }
   * @returns
   */


  (0, _createClass2["default"])(Farm, [{
    key: "stakeLp",
    value: function () {
      var _stakeLp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(pool_name, amount, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgStake,
                  value: {
                    pool_name: pool_name,
                    amount: amount,
                    sender: sender
                  }
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function stakeLp(_x, _x2, _x3) {
        return _stakeLp.apply(this, arguments);
      }

      return stakeLp;
    }()
  }, {
    key: "unStakeLp",
    value:
    /**
     * unstake lpt
     * @param farmPoolName  farm pool name
     * @param lpt receive Lp
     * @param baseTx { types.BaseTx }
     * @returns
     */
    function () {
      var _unStakeLp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(pool_name, amount, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgUnstake,
                  value: {
                    pool_name: pool_name,
                    amount: amount,
                    sender: sender
                  }
                }];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function unStakeLp(_x4, _x5, _x6) {
        return _unStakeLp.apply(this, arguments);
      }

      return unStakeLp;
    }()
    /**
     * harvest lpt
     * @param farmPoolName  farm pool name
     * @param baseTx { types.BaseTx }
     * @returns
     */

  }, {
    key: "harvestReward",
    value: function () {
      var _harvestReward = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(pool_name, baseTx) {
        var sender, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sender = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgHarvest,
                  value: {
                    pool_name: pool_name,
                    sender: sender
                  }
                }];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function harvestReward(_x7, _x8) {
        return _harvestReward.apply(this, arguments);
      }

      return harvestReward;
    }()
  }]);
  return Farm;
}();

exports.Farm = Farm;