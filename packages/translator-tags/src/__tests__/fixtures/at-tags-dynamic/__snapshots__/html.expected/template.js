import { write as _write, createRenderer as _createRenderer, ensureScopeWithId as _ensureScopeWithId, writeScope as _writeScope, nextScopeId as _nextScopeId, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, getScopeById as _getScopeById, maybeFlush as _maybeFlush, escapeXML as _escapeXML, markResumeNode as _markResumeNode, peekNextScope as _peekNextScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
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
        renderBody: /* @__PURE__ */_createRenderer(() => {
          _write("foo");
        })
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
        renderBody: /* @__PURE__ */_createRenderer(() => {
          _write("bar");
        })
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
    _maybeFlush();
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
        renderBody: /* @__PURE__ */_createRenderer(() => {
          _write(`${_escapeXML(row)}${_markResumeNode(_scope11_id, "#text/0")}`);
        })
      });
      _writeScope(_scope10_id, {
        "row": row
      });
      _scope10_.set(_i, _getScopeById(_scope10_id));
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
  const _childScope = _peekNextScope();
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