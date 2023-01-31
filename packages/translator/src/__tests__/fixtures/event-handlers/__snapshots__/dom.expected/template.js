import { setup as _child, attrs as _child_attrs, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { inChild as _inChild, setSource as _setSource, on as _on, notifySignal as _notifySignal, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _child_attrs_inChild = _inChild(_child_attrs, "#childScope/0");
const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/event-handlers/template.marko_0", _scope => _on(_scope["#div/1"], "click", () => {
  console.log("hello world");
}));
const _setup = _scope => {
  _child(_scope["#childScope/0"]);
  _setSource(_scope["#childScope/0"], _child_attrs, {
    class: "hi",
    onClick: () => {
      console.log("hello world");
    }
  });
  _notifySignal(_scope, _child_attrs_inChild);
  _queueHydrate(_scope, _hydrate_setup);
};
export const template = `${_child_template}<div class=hi></div>`;
export const walks = /* beginChild, _child_walks, endChild, get, over(1) */`/${_child_walks}& b`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/event-handlers/template.marko");