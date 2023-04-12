import { write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, maybeFlush as _maybeFlush, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./components/hello/index.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
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
      _writeHydrateScope(_scope4_id, _scope4_ = {
        [_SYMBOL_OWNER]: _scope3_id
      });
      _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/at-tags-dynamic/template.marko_4_renderer");
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
      _writeHydrateScope(_scope5_id, _scope4_ = {
        [_SYMBOL_OWNER]: _scope3_id
      });
      _register(_ifRenderer = () => {}, "packages/translator/src/__tests__/fixtures/at-tags-dynamic/template.marko_5_renderer");
      _ifScopeId = _scope5_id;
    }
    _write(`${_markHydrateControlSingleNodeEnd(_scope3_id, "#text/0", _ifScopeId)}`);
    _writeHydrateScope(_scope3_id, {
      "#text/0!": _scope4_,
      "#text/0(": _ifRenderer
    });
    _maybeFlush();
  }
  let _i = 0;
  for (const col of [["a", "b"], ["c", "d"]]) {
    const _scope6_id = _nextScopeId();
    let i = _i++;
    const _row = [];
    for (const row of col) {
      const _scope8_id = _nextScopeId();
      _row.push({
        row: row,
        renderBody() {
          _write(`${_escapeXML(row)}${_markHydrateNode(_scope9_id, "#text/0")}`);
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
}, "packages/translator/src/__tests__/fixtures/at-tags-dynamic/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);