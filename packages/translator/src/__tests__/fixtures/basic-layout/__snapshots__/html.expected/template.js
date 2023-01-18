import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _layout from "./components/layout.marko";
const _renderer = ({
  name
}, _tagVar) => {
  const _scope = _nextScopeId();
  _layout({
    renderBody() {
      const _scope = _nextScopeId();
      _write(`<h1>Hello <!>${_escapeXML(name)}${_markHydrateNode(_scope, 0)}</h1>`);
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);