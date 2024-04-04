import { write as _write, createRenderer as _createRenderer, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, escapeXML as _escapeXML, writeScope as _writeScope, peekSerializedScope as _peekSerializedScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _col = [];
  const _scope1_id = _nextScopeId();
  const _item = [];
  for (const color of ["red", "blue", "green"]) {
    const _scope3_id = _nextScopeId();
    if (color === "red") {
      const _scope4_id = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody: /* @__PURE__ */_createRenderer(() => {
          _write("foo");
        })
      });
    } else {
      const _scope5_id = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody: /* @__PURE__ */_createRenderer(() => {
          _write("bar");
        })
      });
    }
    _maybeFlush();
  }
  let _i = 0;
  for (const col of [["a", "b"], ["c", "d"]]) {
    const _scope8_id = _nextScopeId();
    let i = _i++;
    const _row = [];
    for (const row of col) {
      const _scope10_id = _nextScopeId();
      _row.push({
        row: row,
        renderBody: /* @__PURE__ */_createRenderer(() => {
          _write(`${_escapeXML(row)}`);
        })
      });
      _writeScope(_scope10_id, {
        "row": row
      });
      _maybeFlush();
    }
    _col.push({
      x: i,
      row: _row
    });
    _writeScope(_scope8_id, {
      "col": col
    });
    _maybeFlush();
  }
  _col.push({
    outside: true,
    row: {
      row: -1,
      renderBody: /* @__PURE__ */_createRenderer(() => {
        _write("Outside");
      })
    }
  });
  const _childScope = _peekSerializedScope();
  _hello._({
    list: {
      item: _item
    },
    col: _col
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko");