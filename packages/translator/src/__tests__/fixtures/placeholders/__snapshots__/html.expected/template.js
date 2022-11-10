import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  x
}) => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(x)}<span>${_markHydrateNode(_scope, 1)}${_escapeXML(x)}<div></div></span><div><div>a</div>${_markHydrateNode(_scope, 2)}${_escapeXML(x)}Hello Text &lt;a/>${_markHydrateNode(_scope, 3)}${_toString(x)}Hello HTML <a/><script>
    Hello &lt;b> &lt;/script>
  </script></div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);