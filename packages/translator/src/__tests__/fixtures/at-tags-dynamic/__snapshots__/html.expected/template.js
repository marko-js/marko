import { write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeScope as _writeScope, createRenderer as _createRenderer, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, maybeFlush as _maybeFlush, escapeXML as _escapeXML, markResumeNode as _markResumeNode, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _col = [];
  const _scope1_id = _nextScopeId();
  const _item = [];
  for (const color of ["red", "blue", "green"]) {
    const _scope3_id = _nextScopeId();
    let _ifScopeId, _scope4_, _ifRenderer;
    if (color === "red") {
      const _scope4_id = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody() {
          _write("foo");
        }
      });
      _writeScope(_scope4_id, _scope4_ = {
        [_SYMBOL_OWNER]: _scope3_id
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator/src/__tests__/fixtures/at-tags-dynamic/template.marko_4_renderer");
      _ifScopeId = _scope4_id;
    } else {
      const _scope5_id = _nextScopeId();
      _item.push({
        style: {
          color
        },
        renderBody() {
          _write("bar");
        }
      });
      _writeScope(_scope5_id, _scope4_ = {
        [_SYMBOL_OWNER]: _scope3_id
      });
      _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator/src/__tests__/fixtures/at-tags-dynamic/template.marko_5_renderer");
      _ifScopeId = _scope5_id;
    }
    _write(`${_markResumeControlSingleNodeEnd(_scope3_id, "#text/0", _ifScopeId)}`);
    _writeScope(_scope3_id, {
      "#text/0!": _scope4_,
      "#text/0(": _ifRenderer
    });
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
        renderBody() {
          _write(`${_escapeXML(row)}${_markResumeNode(_scope11_id, "#text/0")}`);
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
  _hello._({
    list: {
      item: _item
    },
    col: _col
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/at-tags-dynamic/template.marko");