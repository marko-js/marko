const data = _child();

import { hydrate as _child, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_data(data) {
  if (_write(1, data)) _data(0, data);
}

export const template = `${_child_template}<!>`;
export const walks = `${_child_walks}%`;
export const apply = null;
export default _createRenderFn(template, walks, apply);