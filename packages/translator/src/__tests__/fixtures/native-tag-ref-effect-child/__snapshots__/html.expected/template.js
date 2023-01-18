import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _helloSetter from "./components/hello-setter.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const el = () => {
    throw new Error("Cannot reference DOM node from server");
  };
  _write(`<div></div>${_markHydrateNode(_scope, 0)}`);
  _helloSetter({
    el: el,
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);