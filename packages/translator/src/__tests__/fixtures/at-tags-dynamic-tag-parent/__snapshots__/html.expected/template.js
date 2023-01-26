import { write as _write, dynamicTag as _dynamicTag, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  x
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _dynamicTag(x, {
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
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);