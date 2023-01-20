import { write as _write, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const _col = [];
  const _scope = _nextScopeId();
  const _item = [];
  for (const color of ["red", "blue", "green"]) {
    const _scope = _nextScopeId();
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
  let _i = 0;
  for (const col of [["a", "b"], ["c", "d"]]) {
    let i = _i++;
    const _scope = _nextScopeId();
    const _row = [];
    for (const row of col) {
      const _scope = _nextScopeId();
      _row.push({
        row: row,
        renderBody() {
          _write(`${_escapeXML(row)}${_markHydrateNode(_scope, "#text/0")}`);
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