import _style from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    content
  } = _style;
  _$.write(`<div${_$.classAttr(content)}>Hello</div>`);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/style-tag-modules-destructured/template.marko", _renderer);