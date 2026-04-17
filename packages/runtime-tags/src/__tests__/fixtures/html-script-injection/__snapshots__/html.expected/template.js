import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let injection = "</SCRIPT>";
  _._html(`<script${_._attr_nonce()}>var x = '${_._escape_script(injection)}'</script>`);
  _._resume_branch($scope0_id);
}, 1);