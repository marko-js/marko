import { apply as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { write as _write, read as _read, on as _on, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _hydrate() {
  _on(0, "click", _read(1));
}

const _temp = () => {
  console.log("hello world");
};

function _apply() {
  _child();

  _write(1, _bind(_temp));

  _hydrate();
}

export const template = `${_child_template}<div class=hi></div>`;
export const walks = `${_child_walks} b`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);