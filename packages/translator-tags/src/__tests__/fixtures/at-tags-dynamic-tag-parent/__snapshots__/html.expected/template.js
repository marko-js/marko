import { write as _write, createRenderer as _createRenderer, register as _register, nextScopeId as _nextScopeId, dynamicTagInput as _dynamicTagInput, peekNextScope as _peekNextScope, markResumeControlEnd as _markResumeControlEnd, writeExistingScope as _writeExistingScope, normalizeDynamicRenderer as _normalizeDynamicRenderer, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    x
  } = input;
  const _dynamicScope = _peekNextScope();
  _dynamicTagInput(_dynamicScope, x, {
    header: {
      class: "my-header",
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("Header content");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko_2_renderer", _scope0_id)
    },
    footer: {
      class: "my-footer",
      renderBody: _register(/* @__PURE__ */_createRenderer(() => {
        _write("Footer content");
      }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko_3_renderer", _scope0_id)
    }
  }, _register(/* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("Body content");
  }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko_1_renderer"));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _writeExistingScope(_dynamicScope),
    "#text/0(": _normalizeDynamicRenderer(x)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko");