import { pushContext as _pushContext, markHydrateNode as _markHydrateNode, write as _write, dynamicTag as _dynamicTag, popContext as _popContext, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = input => {
  const _scope = _nextScopeId();
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko", "Hello");
  _write(`${_markHydrateNode(_scope, 0)}`);
  _dynamicTag(input.renderBody, null);
  _popContext();
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);