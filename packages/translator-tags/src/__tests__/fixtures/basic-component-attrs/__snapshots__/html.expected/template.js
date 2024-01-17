import _myButton from "./components/my-button.marko";
import { nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _myButton._({
    text: clickCount,
    onClick: function () {
      clickCount++;
    }
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/template.marko");