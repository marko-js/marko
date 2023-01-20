import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  name,
  missing
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`Hello <!>${_escapeXML(name)}${_markHydrateNode(_scope, "#text/0")}! Hello <!>${_toString(name)}${_markHydrateNode(_scope, "#text/1")}! Hello <!>${_toString(missing)}${_markHydrateNode(_scope, "#text/2")}!`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);