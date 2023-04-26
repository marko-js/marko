import { lifecycle as _lifecycle, on as _on, queueSource as _queueSource, register as _register, queueEffect as _queueEffect, closure as _closure, createRenderer as _createRenderer, conditional as _conditional, value as _value, inConditionalScope as _inConditionalScope, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x$ifBody_effect = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x", _scope => _lifecycle(_scope, "cleanup", {
  onMount: function () {
    const x = _scope._["x"];
    document.getElementById("ref").textContent = "Mount " + x;
  },
  onUpdate: function () {
    const x = _scope._["x"];
    document.getElementById("ref").textContent = "Update " + x;
  },
  onDestroy: function () {
    document.getElementById("ref").textContent = "Destroy";
  }
}));
const _x$ifBody = /* @__PURE__ */_closure("x", (_scope, x) => _queueEffect(_scope, _x$ifBody_effect));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", "", null, [_x$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0");
const _show_effect = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show", _scope => _on(_scope["#button/2"], "click", function () {
  const show = _scope["show"];
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_value("show", (_scope, show, _dirty) => {
  let _if_value;
  if (_dirty) {
    _queueEffect(_scope, _show_effect);
    _if_value = show ? _ifBody : null;
  }
  _if(_scope, _if_value, _dirty);
});
const _x_effect = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const x = _scope["x"];
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x, _dirty) => {
  if (_dirty) {
    _queueEffect(_scope, _x_effect);
  }
  _inConditionalScope(_scope, _dirty, _x$ifBody, "#text/0");
});
const _setup = _scope => {
  _x(_scope, 0);
  _show(_scope, true);
};
export const template = "<!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
export const walks = /* replace, over(2), get, over(1), get, over(1) */"%c b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko");