const _col = [];
const _item = [];

for (const color of ["red", "blue", "green"]) {
  if (color === "red") _item.push({
    style: {
      color
    }
  });else _item.push({
    style: {
      color
    }
  });
}

let _i = 0;

for (const col of [["a", "b"], ["c", "d"]]) {
  let i = _i++;
  const _row = [];

  for (const row of col) {
    _row.push({
      row: row
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
    row: -1
  }
});

import { text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
import { hydrate as _hello, template as _helloTemplate, walks as _helloWalks } from "./components/hello/index.marko";
export const template = "foobarOutside" + _helloTemplate;
export const walks = `^$]${_helloWalks}`;
export const hydrate = _register("/7TanXW3", input => {
  _text(row);

  _hello({
    list: {
      item: _item
    },
    col: _col
  });
});
export default _createRenderFn(template, walks, [], hydrate);