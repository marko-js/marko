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

function _apply9_row(_scope, row = _scope._[0]) {}

function _apply8_row(_scope, row) {
  if (_write(_scope, 0, row)) {}
}

function _apply7_col(_scope, col = _scope._[0]) {}

function _apply6_i(_scope, i) {
  if (_write(_scope, 1, i)) {}
}

function _apply6_col(_scope, col) {
  if (_write(_scope, 0, col)) {}
}

function _apply5_color(_scope, color = _scope._[4]) {}

function _apply4_color(_scope, color = _scope._[4]) {}

function _apply3_color(_scope, color) {
  if (_write(_scope, 4, color)) {}
}

function _apply(_scope) {
  _hello(_scope[0]);
}

export const template = `${_hello_template}`;
export const walks =
/* beginChild(0), _hello_walks, endChild */
`/${_hello_walks}&`;
export const apply = _apply;

const _temp = _createRenderer("", "", null),
      _temp2 = _createRenderer("", "", null),
      _temp3 = _createRenderer("", "", null),
      _temp4 = _createRenderer("", "", null),
      _temp5 = _createRenderer("", "", null),
      _temp6 = _createRenderer("", "", null),
      _temp7 = _createRenderer("", "", null),
      _temp8 = _createRenderer("", "", null),
      _temp9 = _createRenderer("", "", null);

export default _createRenderFn(template, walks, apply);