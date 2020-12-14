import { write as _write, escapeXML as _escapeXML, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = _wrapHydratable(input => {
  const _col = [];
  const _item = [];

  for (const color of input.colors) {
    if (x) _item.push({
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

  for (const col of input.table) {
    const _row = [];

    for (const row of col) {
      _row.push({
        row: row,

        renderBody() {
          _write(`${_escapeXML(row)}`);
        }

      });
    }

    _col.push({
      x: y,
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
    col: _col,
    list: {
      item: _item
    }
  });
});

export default _renderer;
export const render = _createRenderFn(_renderer);