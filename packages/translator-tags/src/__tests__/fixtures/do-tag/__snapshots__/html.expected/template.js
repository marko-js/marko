function fromStatic() {
  console.log("from static");
}
import { nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  console.log("from block");
  const fromConst = function () {
    console.log("from const");
  };
  fromConst();
  fromStatic();
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/do-tag/template.marko");