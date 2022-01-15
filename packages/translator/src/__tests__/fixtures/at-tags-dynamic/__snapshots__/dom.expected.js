const _col = [];
const _item = [];

for (const color of ["red", "blue", "green"]) {
  const _else = _createRenderer("", "", null),
        _if = _createRenderer("", "b", null);
}

let _i = 0;

for (const col of [["a", "b"], ["c", "d"]]) {
  let i = _i++;
  const _row = [];

  for (const row of col) {
    _row.push({
      row: row,

      renderBody() {
        _write("<!>");
      }

    });
  }

  _col.push({
    x: i,
    row: _row
  });
}

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
  list: {
    item: _item
  },
  col: _col
});

import { write as _write, createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, data as _data, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_color(color) {
  if (_write(1, color)) _setConditionalRenderer(0, 5, color === "red" ? _if : _else);
}

function _apply_row(row) {
  if (_write(0, row)) _data(0, row);
}

import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const apply;
export default _createRenderFn(template, walks, apply);