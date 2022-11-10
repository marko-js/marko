import { asset as asset1 } from "./asset1";
import { asset as asset2 } from "./asset2";
import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = input => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(asset1)} ${_markHydrateNode(_scope, 1)}${_escapeXML(asset2)}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);