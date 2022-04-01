import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  _write(`<div><div>a</div>${_markHydrateNode(0)}${_escapeXML(x)}Hello Text &lt;a/>${_markHydrateNode(1)}${_toString(x)}Hello HTML <a/><script>
    Hello &lt;b> &lt;/script>
  </script></div>`);

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);