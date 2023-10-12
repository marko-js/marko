const formatNumber = n => {
  return "$" + n.toFixed(2);
};
import _counter from "./components/counter.marko";
import { nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _counter._({
    format: formatNumber
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/component-attrs-static-code/template.marko");