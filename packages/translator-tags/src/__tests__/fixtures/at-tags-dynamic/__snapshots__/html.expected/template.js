import { write as _write, createRenderer as _createRenderer, register as _register, forOf as _forOf, escapeXML as _escapeXML, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _col = [];
  const _item = [];
  _forOf(["red", "blue", "green"], color => {
    if (color === "red") _item.push({
      style: {
        color
      },
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("foo");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_1_renderer", _scope0_id)
    });else _item.push({
      style: {
        color
      },
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("bar");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_2_renderer", _scope0_id)
    });
  });
  _forOf([["a", "b"], ["c", "d"]], (col, i) => {
    const _row = [];
    _forOf(col, row => {
      _row.push({
        row: row,
        renderBody: _register(/* @__PURE__ */_createRenderer(() => {
          _write(`${_escapeXML(row)}`);
        }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_3_renderer", _scope0_id)
      });
    });
    _col.push({
      x: i,
      row: _row
    });
  });
  _col.push({
    outside: true,
    row: {
      row: -1,
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("Outside");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_4_renderer", _scope0_id)
    }
  });
  const _childScope = _peekNextScope();
  _hello({
    list: {
      item: _item
    },
    col: _col
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko");