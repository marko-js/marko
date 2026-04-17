import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let injection = "</STYLE>";
  _._html(`<style${_._attr_nonce()}>.evil { content: '${_._escape_style(injection)}'; }</style>`);
  _._resume_branch($scope0_id);
}, 1);