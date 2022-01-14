_child({
  class: "hi",
  onclick: () => {
    console.log("hello world");
  }
});

import { hydrate as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { write as _write, read as _read, on as _on, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply() {
  _write(2, () => {
    console.log("hello world");
  });

  _hydrate();
}

function _hydrate() {
  _on(0, "click", _read(2));
}

export const template = `${_child_template}<div class=hi></div>`;
export const walks = `${_child_walks} `;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);