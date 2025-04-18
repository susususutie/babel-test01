"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a5 = void 0;
exports.add5 = add5;
exports.b5 = void 0;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// 1.
var add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));
// 2.
console.log("a + b = ".concat(a + b));
// 3.
var _a$b = {
    a: 1,
    b: 2
  },
  a = _a$b.a,
  b = _a$b.b;
console.log(a + b);
// 4.
var MyClass = /*#__PURE__*/function () {
  function MyClass(name) {
    _classCallCheck(this, MyClass);
    this.name = name;
  }
  return _createClass(MyClass, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("Hello, ".concat(this.name, "!"));
    }
  }]);
}();
var obj = new MyClass('Babel');
obj.sayHello();
// 5.
var a5 = exports.a5 = 1;
var b5 = exports.b5 = 2;
function add5(x, y) {
  return x + y;
}
// 6.
var a6 = 1;
{
  var _a = 2;
}