import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  children
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}<div>`);
  for (const child of children) {
    const _scope = _nextScopeId();
    _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(child.text)}`);
    _maybeFlush();
  }
  _write("</div>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);