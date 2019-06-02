"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Middlewares =
/*#__PURE__*/
function () {
  function Middlewares() {
    _classCallCheck(this, Middlewares);
  }

  _createClass(Middlewares, null, [{
    key: "match",
    value: function match(string, regex) {
      return string.match(regex);
    }
  }, {
    key: "exec",
    value: function exec(string, regex) {
      var temp;
      var searches = []; // eslint-disable-next-line no-cond-assign

      while (temp = regex.exec(string)) {
        searches.push(temp);
      }

      return searches;
    }
  }, {
    key: "getMatch",
    value: function getMatch(string, regex) {
      var numbers = Middlewares.match(string, regex);
      numbers.forEach(function (element, index) {
        numbers[index] = Number(element);
      });
      return numbers;
    }
  }, {
    key: "getExec",
    value: function getExec(string, regex) {
      var numbers = Middlewares.exec(string, regex);
      var numbersExec = [];
      numbers.forEach(function (element) {
        var end = element[0].endsWith('.') ? element[0].length - 1 : element[0].length; // eslint-disable-next-line no-param-reassign

        element[0] = Number(element[0]);
        numbersExec.push({
          number: element[0],
          start: element.index,
          end: end
        });
      });
      return numbersExec;
    }
  }]);

  return Middlewares;
}();

exports["default"] = Middlewares;