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

import { write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";

function _apply() {
  _hello();
}

const _temp = _createRenderer("", "", null),
      _temp2 = _createRenderer("", "", null),
      _temp3 = _createRenderer("", "", null),
      _temp4 = _createRenderer("", "", null),
      _temp5 = _createRenderer("", "", null),
      _temp6 = _createRenderer("", "", null),
      _temp7 = _createRenderer("", "", null),
      _temp8 = _createRenderer("", "", null),
      _temp9 = _createRenderer("", "", null);

export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);