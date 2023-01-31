import { setSource as _setSource, lifecycle as _lifecycle, on as _on, queueSource as _queueSource, inConditionalScope as _inConditionalScope, closure as _closure, register as _register, queueHydrate as _queueHydrate, createRenderer as _createRenderer, conditional as _conditional, source as _source, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_x$ifBody = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_x", _scope => _lifecycle(_scope, "cleanup", {
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
const _x$ifBody = /* @__PURE__ */_closure(1, "x", [], (_scope, x) => _queueHydrate(_scope, _hydrate_x$ifBody));
const _ifBody = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_1_renderer", /* @__PURE__ */_createRenderer("", "", null, [_x$ifBody]));
const _if = /* @__PURE__ */_conditional("#text/0", 1, (_scope, show = _scope["show"]) => show ? _ifBody : null);
const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_show", _scope => _on(_scope["#button/2"], "click", function () {
  const show = _scope["show"];
  _queueSource(_scope, _show, !show);
}));
const _show = /* @__PURE__ */_source("show", [_if], (_scope, show) => _queueHydrate(_scope, _hydrate_show));
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const x = _scope["x"];
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_source("x", [/* @__PURE__ */_inConditionalScope(_x$ifBody, "#text/0")], (_scope, x) => _queueHydrate(_scope, _hydrate_x));
const _setup = _scope => {
  _setSource(_scope, _x, 0);
  _setSource(_scope, _show, true);
};
export const template = "<!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
export const walks = /* replace, over(2), get, over(1), get, over(1) */"%c b b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/lifecycle-tag-conditional/template.marko");