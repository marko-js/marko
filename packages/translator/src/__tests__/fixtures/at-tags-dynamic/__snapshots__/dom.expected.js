const _col = [];

_col.push({
  outside: true,
  row: {
    row: -1,

    renderBody() {
      _write("Outside");
    }

  }
});

_hello({
  list: {},
  col: _col
});

import { write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const apply = null;
export default _createRenderFn(template, walks, apply);