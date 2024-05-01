function noop(_) {}
import { on as _on, queueSource as _queueSource, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _e = /* @__PURE__ */_value("e", (_scope, e) => _data(_scope["#text/5"], JSON.stringify(e)));
const _d = /* @__PURE__ */_value("d", (_scope, d) => {
  _data(_scope["#text/3"], JSON.stringify(d));
  _data(_scope["#text/4"], d);
});
const _b = /* @__PURE__ */_value("b", (_scope, b) => _data(_scope["#text/2"], b));
const _a = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/1"], a));
const _c = (_scope, c) => {};
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko_0", _scope => _on(_scope["#button/0"], "click", function () {
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
  _queueSource(_scope, _a, _a2);
  _queueSource(_scope, _b, _b2);
  _queueSource(_scope, _c, _c2);
  let _d2;
  let _e2;
  noop([{
    arr: [local, _d2,, ..._e2]
  }] = [{
    arr: [6, 7, 8, 9]
  }]);
  _queueSource(_scope, _d, _d2);
  _queueSource(_scope, _e, _e2);
}));
const _setup = _scope => {
  _queueEffect(_scope, _setup_effect);
  _a(_scope, 0);
  _b(_scope, 0);
  _c(_scope, {});
  _d(_scope, 0);
  _e(_scope, []);
};
export const _template_ = "<button><pre>a    1    <!></pre><pre>b    2    <!></pre><pre>c  {c:4}  <!></pre><pre>d    7    <!></pre><pre>f   [9]   <!></pre></button>";
export const _walks_ = /* get, next(2), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(2) */" Eb%lDb%lDb%lDb%lDb%m";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/tag-var-destructure/template.marko");