import * as myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr_class(myStyles.content)}>Hello</div>`);
});