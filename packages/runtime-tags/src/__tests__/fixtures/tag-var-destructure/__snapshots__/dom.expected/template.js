export const _template_ = "<button><pre>a    1    <!></pre><pre>b    2    <!></pre><pre>c  {c:4}  <!></pre><pre>d    7    <!></pre><pre>f   [9]   <!></pre></button>";
export const _walks_ = /* get, next(2), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(2) */" Eb%lDb%lDb%lDb%lDb%m";
const noop = _noop;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _e = /* @__PURE__ */_$.state("e/10", (_scope, e) => _$.data(_scope["#text/5"], JSON.stringify(e)));
const _d = /* @__PURE__ */_$.state("d/9", (_scope, d) => _$.data(_scope["#text/4"], d));
const _c = /* @__PURE__ */_$.state("c/8", (_scope, c) => _$.data(_scope["#text/3"], JSON.stringify(c)));
const _b = /* @__PURE__ */_$.state("b/7", (_scope, b) => _$.data(_scope["#text/2"], b));
const _a = /* @__PURE__ */_$.state("a/6", (_scope, a) => _$.data(_scope["#text/1"], a));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
  let local;
  ((_result2, _a2, _b2, _c2) => ({
    a: _a2,
    _b: {
      _b: _b2
    },
    local,
    ..._c2
  } = _result2, _a(_scope, _a2), _b(_scope, _b2), _c(_scope, _c2), _result2))({
    a: 1,
    _b: {
      _b: 2
    },
    local: 3,
    c: 4
  });
  noop(((_result, _d2, _e2) => ([{
    arr: [local, _d2,, ..._e2]
  }] = _result, _d(_scope, _d2), _e(_scope, _e2), _result))([{
    arr: [6, 7, 8, 9]
  }]));
}));
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
  _c(_scope, {});
  _d(_scope, 0);
  _e(_scope, []);
  _setup__effect(_scope);
}
function _noop(_) {}
_$.register("__tests__/template.marko_0/noop", _noop);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);