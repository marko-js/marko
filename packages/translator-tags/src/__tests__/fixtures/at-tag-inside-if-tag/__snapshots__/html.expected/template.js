import { write as _write, createRenderer as _createRenderer, writeScope as _writeScope, nextScopeId as _nextScopeId, register as _register, markResumeControlSingleNodeEnd as _markResumeControlSingleNodeEnd, serializedScope as _serializedScope, peekSerializedScope as _peekSerializedScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _customTag from "./components/custom-tag/index.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    x
  } = input;
  let _thing;
  const _scope1_id = _nextScopeId();
  let _ifScopeId, _scope2_, _ifRenderer;
  if (x) {
    const _scope2_id = _nextScopeId();
    _thing = {
      x: 1,
      renderBody: /* @__PURE__ */_createRenderer(() => {
        _write("Hello");
      })
    };
    _writeScope(_scope2_id, _scope2_ = {});
    _register(_ifRenderer = /* @__PURE__ */_createRenderer(() => {}), "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_2_renderer");
    _ifScopeId = _scope2_id;
  }
  _write(`${_markResumeControlSingleNodeEnd(_scope1_id, "#text/0", _ifScopeId)}`);
  _writeScope(_scope1_id, {
    "#text/0!": _scope2_,
    "#text/0(": _ifRenderer,
    "_": _serializedScope(_scope0_id)
  });
  const _childScope = _peekSerializedScope();
  _customTag._({
    thing: _thing
  });
  _writeScope(_scope0_id, {
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko");