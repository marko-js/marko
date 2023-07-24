import { write as _write, dynamicTag as _dynamicTag, markResumeControlEnd as _markResumeControlEnd, nextScopeId as _nextScopeId, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
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
  }, () => _write("Body content"));
  _write(`${_markResumeControlEnd(_scope0_id, "#text/0")}`);
  _writeScope(_scope0_id, {
    "#text/0!": _dynamicScope,
    "#text/0(": x
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-tag-parent/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);