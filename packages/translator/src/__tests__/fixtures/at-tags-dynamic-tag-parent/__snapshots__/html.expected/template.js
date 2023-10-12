import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer(({
  x
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _dynamicScope = _dynamicTag(x, {
    header: {
      class: "my-header",
      renderBody() {
        _write("Header content");
      }
    },
    footer: {
      class: "my-footer",
      renderBody() {
        _write("Footer content");
      }
    }
  }, /* @__PURE__ */_createRenderer(() => {
    const _scope1_id = _nextScopeId();
    _write("Body content");
  }));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": x
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko");