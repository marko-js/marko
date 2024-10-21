import { write as _write, createRenderer as _createRenderer, register as _register, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, escapeXML as _escapeXML, markResumeNode as _markResumeNode, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const _col = [];
  const _scope1_id = _nextScopeId();
  const _item = [];
  for (const color of ["red", "blue", "green"]) {
    const _scope3_id = _nextScopeId();
    let _ifScopeId, _ifRenderer;
    if (color === "red") {
      const _scope4_id = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody: _register(/* @__PURE__ */_createRenderer(() => {
          _write("foo");
        }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_6_renderer", _scope0_id)
      });
      _writeScope(_scope4_id, {
        "_": _ensureScopeWithId(_scope3_id)
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_4_renderer");
      _ifScopeId = _scope4_id;
    } else {
      const _scope5_id = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody: _register(/* @__PURE__ */_createRenderer(() => {
          _write("bar");
        }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_7_renderer", _scope0_id)
      });
      _writeScope(_scope5_id, {
        "_": _ensureScopeWithId(_scope3_id)
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_5_renderer");
      _ifScopeId = _scope5_id;
    }
    _write(`${_markResumeControlSingleNodeEnd(_scope3_id, "#text/0", _ifScopeId)}`);
    _writeScope(_scope3_id, {
      "color": color,
      "#text/0(": _ifRenderer,
      "#text/0!": _getScopeById(_ifScopeId)
    });
  }
  let _i3 = 0;
  for (const col of [["a", "b"], ["c", "d"]]) {
    const _scope8_id = _nextScopeId();
    let i = _i3++;
    const _row = [];
    let _i2 = 0;
    for (const row of col) {
      const _scope10_id = _nextScopeId();
      let _i = _i2++;
      _row.push({
        row: row,
        renderBody: _register(/* @__PURE__ */_createRenderer(() => {
          _write(`${_escapeXML(row)}${_markResumeNode(_scope11_id, "#text/0")}`);
        }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_11_renderer", _scope0_id)
      });
      _writeScope(_scope10_id, {
        "row": row
      });
      _scope10_.set(_i, _getScopeById(_scope10_id));
    }
    _col.push({
      x: i,
      row: _row
    });
    _writeScope(_scope8_id, {
      "col": col
    });
  }
  _col.push({
    outside: true,
    row: {
      row: -1,
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("Outside");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic/template.marko_13_renderer", _scope0_id)
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