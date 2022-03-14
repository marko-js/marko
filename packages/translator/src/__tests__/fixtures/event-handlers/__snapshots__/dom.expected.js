import { apply as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { write as _write, on as _on, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate(_scope) {
  _on(_scope, 0, "click", _scope[1]);
}

const _temp = _scope => {
  console.log("hello world");
};

function _apply(_scope) {
  _child();

  _write(_scope, 1, _bind(_scope, _temp));

  _hydrate(_scope);
}

export const template = `${_child_template}<div class=hi></div>`;
export const walks = `${_child_walks} b`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);