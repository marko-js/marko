import { pushContext as _pushContext, dynamicTag as _dynamicTag, popContext as _popContext, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko", "Hello");
  _dynamicTag(input.renderBody, null);
  _popContext();
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);