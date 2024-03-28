import { write as _write, createRenderer as _createRenderer, nextScopeId as _nextScopeId, register as _register, dynamicTagInput as _dynamicTagInput, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const {
    x
  } = input;
  const _dynamicScope = _dynamicTagInput(x, {
    header: {
      class: "my-header",
      renderBody: /* @__PURE__ */_createRenderer(() => {
        _write("Header content");
      })
    },
    footer: {
      class: "my-footer",
      renderBody: /* @__PURE__ */_createRenderer(() => {
        _write("Footer content");
      })
    }
  }, _register( /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("Body content");
  }), "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko_1_renderer", _scope0_id));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": x
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko");