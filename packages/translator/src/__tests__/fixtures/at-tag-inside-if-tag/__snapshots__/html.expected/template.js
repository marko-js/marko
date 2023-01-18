import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag/index.marko";
const _renderer = ({
  x
}, _tagVar) => {
  const _scope = _nextScopeId();
  let _thing;
  const _scope = _nextScopeId();
  if (x) {
    const _scope = _nextScopeId();
    _thing = {
      x: 1,
      renderBody() {
        _write("Hello");
      }
    };
  }
  _customTag({
    thing: _thing
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);