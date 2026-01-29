import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
});