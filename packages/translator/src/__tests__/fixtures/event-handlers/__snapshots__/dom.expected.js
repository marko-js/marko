import { apply as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { write as _write, on as _on, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate(_scope) {
  _on(_scope, 0, "click", _scope[2]);
}

_register("packages/translator/src/__tests__/fixtures/event-handlers/template.marko_0_0", _hydrate);

const _temp = _scope => {
  console.log("hello world");
};

function _apply(_scope) {
  _child(_scope[1]);

  _write(_scope, 2, _bind(_scope, _temp));

  _queueHydrate(_scope, _hydrate);
}

export const template = `${_child_template}<div class=hi></div>`;
export const walks =
/* beginChild(1), _child_walks, endChild, get, over(1) */
`0${_child_walks}& b`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);