import { nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = "y";
  _child._({
    value: 3,
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
  _child._({
    value: x,
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  });
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/custom-tag-default-value/template.marko");