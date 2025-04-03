import "virtual:./template.marko.css \n  .content {\n    color: green;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div class=content>Hello</div>");
});