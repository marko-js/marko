import * as _style from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
const {
  content
} = _style;
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div${_._attr_class(content)}>Hello</div>`);
});