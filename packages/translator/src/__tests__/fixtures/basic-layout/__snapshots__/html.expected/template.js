import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _layout from "./components/layout.marko";
const _renderer = ({
  name
}) => {
  const _scope = _nextScopeId();
  _layout({
    renderBody() {
      const _scope = _nextScopeId();
      _write(`<h1>Hello ${_markHydrateNode(_scope, 0)}${_escapeXML(name)}</h1>`);
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);