import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<div${_$.classAttr(myStyles.content)}>Hello</div>`);
});