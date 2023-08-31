import { nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _myButton from "./components/my-button.marko";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _myButton._({
    text: clickCount,
    onClick: function () {
      clickCount++;
    },
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  });
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-component-attrs/template.marko");