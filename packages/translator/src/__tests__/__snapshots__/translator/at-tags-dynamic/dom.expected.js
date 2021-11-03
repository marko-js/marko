import { write as _write, data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { hydrate as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
export const template = `${_hello_template}`;
export const walks = `${_hello_walks}`;
export const hydrate = _register("src/__tests__/fixtures/at-tags-dynamic/template.marko", input => {
  const _col = [];
  const _item = [];

  for (const color of ["red", "blue", "green"]) {
    if (color === "red") _item.push({
      style: {
        color
      },

      renderBody() {
        _write("foo");
      }

    });else _item.push({
      style: {
        color
      },

      renderBody() {
        _write("bar");
      }

    });
  }

  let _i = 0;

  for (const col of [["a", "b"], ["c", "d"]]) {
    let i = _i++;
    const _row = [];

    for (const row of col) {
      _row.push({
        row: row,

        renderBody() {
          _data(row);

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
});
export default _createRenderFn(template, walks, [], hydrate);