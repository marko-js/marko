export const _template_ = "<!><!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
export const _walks_ = /* replace, over(2), get, over(1), get, over(1) */"D%c b b";
import { lifecycle as _lifecycle, on as _on, createRenderer as _createRenderer, effect as _effect, closure as _closure, register as _register, conditional as _conditional, state as _state, inConditionalScope as _inConditionalScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onMount = _scope => {
  const {
    _: {
      x
    }
  } = _scope;
  return function () {
    document.getElementById("ref").textContent = "Mount " + x;
  };
};
const _onUpdate = _scope => {
  const {
    _: {
      x
    }
  } = _scope;
  return function () {
    document.getElementById("ref").textContent = "Update " + x;
  };
};
const _x$ifBody_effect = _effect("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x", _scope => _lifecycle(_scope, "_lifecycle", {
  onMount: _onMount(_scope),
  onUpdate: _onUpdate(_scope),
  onDestroy: function () {
    document.getElementById("ref").textContent = "Destroy";
  }
}));
const _x$ifBody = /* @__PURE__ */_closure("x", (_scope, x) => _x$ifBody_effect(_scope));
const _ifBody = _register("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", "", void 0, () => [_x$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0");
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _effect("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show", _scope => _on(_scope["#button/2"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
}, () => _if);
const _onClick2 = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _effect("packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", _onClick2(_scope)));
const _x = /* @__PURE__ */_state("x", (_scope, x) => _x_effect(_scope), () => _inConditionalScope(_x$ifBody, "#text/0"));
export function _setup_(_scope) {
  _x(_scope, 0);
  _show(_scope, true);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko");