"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _middlewares = _interopRequireDefault(require("./middlewares"));

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controllers =
/*#__PURE__*/
function () {
  function Controllers() {
    _classCallCheck(this, Controllers);
  }

  _createClass(Controllers, null, [{
    key: "getNumber",
    value: function getNumber(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getNumber);
    }
  }, {
    key: "getNegativeNumber",
    value: function getNegativeNumber(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getNumberNegative);
    }
  }, {
    key: "getPositiveNumber",
    value: function getPositiveNumber(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getNumberPositive);
    }
  }, {
    key: "getNumberExec",
    value: function getNumberExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getNumber);
    }
  }, {
    key: "getNegativeNumberExec",
    value: function getNegativeNumberExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getNumberNegative);
    }
  }, {
    key: "getPositiveNumberExec",
    value: function getPositiveNumberExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getNumberPositive);
    }
  }, {
    key: "getInt",
    value: function getInt(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getInt);
    }
  }, {
    key: "getNegativeInt",
    value: function getNegativeInt(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getIntNegative);
    }
  }, {
    key: "getPositiveInt",
    value: function getPositiveInt(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getIntPositive);
    }
  }, {
    key: "getIntExec",
    value: function getIntExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getInt);
    }
  }, {
    key: "getNegativeIntExec",
    value: function getNegativeIntExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getIntNegative);
    }
  }, {
    key: "getPositiveIntExec",
    value: function getPositiveIntExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getIntPositive);
    }
  }, {
    key: "getFloor",
    value: function getFloor(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getFloor);
    }
  }, {
    key: "getNegativeFloor",
    value: function getNegativeFloor(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getFloorNegative);
    }
  }, {
    key: "getPositiveFloor",
    value: function getPositiveFloor(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getFloorPostive);
    }
  }, {
    key: "getFloorExec",
    value: function getFloorExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getFloor);
    }
  }, {
    key: "getNegativeFloorExec",
    value: function getNegativeFloorExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getFloorNegative);
    }
  }, {
    key: "getPositiveFloorExec",
    value: function getPositiveFloorExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getFloorPostive);
    }
  }, {
    key: "getExponential",
    value: function getExponential(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getExponential);
    }
  }, {
    key: "getNegativeExponential",
    value: function getNegativeExponential(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getExponentialNegative);
    }
  }, {
    key: "getPositiveExponential",
    value: function getPositiveExponential(string) {
      return _middlewares["default"].getMatch(string, _helpers["default"].getExponentialPositive);
    }
  }, {
    key: "getExponentialExec",
    value: function getExponentialExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getExponential);
    }
  }, {
    key: "getNegativeExponentialExec",
    value: function getNegativeExponentialExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getExponentialNegative);
    }
  }, {
    key: "getPositiveExponentialExec",
    value: function getPositiveExponentialExec(string) {
      return _middlewares["default"].getExec(string, _helpers["default"].getExponentialPositive);
    }
  }]);

  return Controllers;
}();

exports["default"] = Controllers;