import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr(myStyles.content)}>Hello</div>`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);