export const _template_ = "<button><pre>a    1    <!></pre><pre>b    2    <!></pre><pre>c  {c:4}  <!></pre><pre>d    7    <!></pre><pre>f   [9]   <!></pre></button>";
export const _walks_ = /* get, next(2), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(2) */" Eb%lDb%lDb%lDb%lDb%m";
_$.register("packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko_0/noop", noop);
function noop(_) {}
import * as _$ from "@marko/runtime-tags/debug/dom";
const _e = /* @__PURE__ */_$.state("e", (_scope, e) => _$.data(_scope["#text/5"], JSON.stringify(e)));
const _d = /* @__PURE__ */_$.state("d", (_scope, d) => _$.data(_scope["#text/4"], d));
const _c = /* @__PURE__ */_$.state("c", (_scope, c) => _$.data(_scope["#text/3"], JSON.stringify(c)));
const _b = /* @__PURE__ */_$.state("b", (_scope, b) => _$.data(_scope["#text/2"], b));
const _a = /* @__PURE__ */_$.state("a", (_scope, a) => _$.data(_scope["#text/1"], a));
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko_0", _scope => _$.on(_scope["#button/0"], "click", function () {
  let local;
  let _a2;
  let _b2;
  let _c2;
  ({
    a: _a2,
    _b: {
      _b: _b2
    },
    local,
    ..._c2
  } = {
    a: 1,
    _b: {
      _b: 2
    },
    local: 3,
    c: 4
  });
  _a(_scope, _a2);
  _b(_scope, _b2);
  _c(_scope, _c2);
  let _d2;
  let _e2;
  noop([{
    arr: [local, _d2,, ..._e2]
  }] = [{
    arr: [6, 7, 8, 9]
  }]);
  _d(_scope, _d2);
  _e(_scope, _e2);
}));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _a(_scope, 0);
  _b(_scope, 0);
  _c(_scope, {});
  _d(_scope, 0);
  _e(_scope, []);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko", _template_, _walks_, _setup_);