import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, escapeXML as _escapeXML, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = input => {
  const _scope = _nextScopeId();
  const _col = [];
  const _scope = _nextScopeId();
  const _item = [];
  _write(`${_markHydrateNode(_scope, 0)}`);
  for (const color of ["red", "blue", "green"]) {
    const _scope = _nextScopeId();
    _write(`${_markHydrateNode(_scope, 0)}`);
    if (color === "red") {
      const _scope = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody() {
          _write("foo");
        }
      });
    } else {
      const _scope = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody() {
          _write("bar");
        }
      });
    }
    _maybeFlush();
  }
  _write(`${_markHydrateNode(_scope, 0)}`);
  let _i = 0;
  for (const col of [["a", "b"], ["c", "d"]]) {
    let i = _i++;
    const _scope = _nextScopeId();
    const _row = [];
    _write(`${_markHydrateNode(_scope, 0)}`);
    for (const row of col) {
      const _scope = _nextScopeId();
      _row.push({
        row: row,
        renderBody() {
          _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(row)}`);
        }
      });
      _maybeFlush();
    }
    _col.push({
      x: i,
      row: _row
    });
    _maybeFlush();
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
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);