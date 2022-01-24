import { markScopeOffset as _markScopeOffset, write as _write, escapeXML as _escapeXML, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";

const _renderer = _register("packages/translator/src/__tests__/fixtures/at-tags-dynamic/template.marko", input => {
  const _col = [];
  const _item = [];

  _write(`${_markScopeOffset(0)}`);

  for (const color of ["red", "blue", "green"]) {
    _write(`${_markScopeOffset(0)}`);

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

  _write(`${_markScopeOffset(0)}`);

  let _i = 0;

  for (const col of [["a", "b"], ["c", "d"]]) {
    let i = _i++;
    const _row = [];

    _write(`${_markScopeOffset(0)}`);

    for (const row of col) {
      _row.push({
        row: row,

        renderBody() {
          _write(`${_markScopeOffset(0)}${_escapeXML(row)}`);
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

export default _renderer;
export const render = _createRenderer(_renderer);