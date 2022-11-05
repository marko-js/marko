import { setup as _child, attrs as _child_attrs, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { setSource as _setSource, on as _on, notifySignal as _notifySignal, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _temp = _scope => {
  console.log("hello world");
};

const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/event-handlers/template.marko_0", _scope => _on(_scope[0], "click", /* @__PURE__ */_bind(_scope, _temp)));

const _temp3 = _scope => {
  console.log("hello world");
};

const _setup = _scope => {
  _child(_scope[1]);

  _setSource(_scope[1], _child_attrs, {
    class: "hi",
    onclick: /* @__PURE__ */_bind(_scope, _temp3)
  });

  _notifySignal(_scope, _child_attrs);

  _queueHydrate(_scope, _hydrate_setup);
};

export const template = `${_child_template}<div class=hi></div>`;
export const walks =
/* beginChild(1), _child_walks, endChild, get, over(1) */
`0${_child_walks}& b`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);