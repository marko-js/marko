import { nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _hello from "./hello.marko";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _hello._({
    name: "Frank",
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/custom-tag-template/template.marko");