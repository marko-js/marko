import _child from "./components/child.marko";
import { nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _child._({});
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/return-tag-no-var/template.marko");