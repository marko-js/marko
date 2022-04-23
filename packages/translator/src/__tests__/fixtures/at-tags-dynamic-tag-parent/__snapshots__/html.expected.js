import { write as _write, dynamicTag as _dynamicTag, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = ({
  x
}) => {
  const _scope = _nextScopeId();

  _write("Body content");

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
  });
};

export default _renderer;
export const render = _createRenderer(_renderer);