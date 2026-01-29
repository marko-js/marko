import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let toggle = false;
  _._html(`<html><body${_._attr("data-toggle", toggle)}><button>Toggle</button>${_._el_resume($scope0_id, "#button/1")}</body>${_._el_resume($scope0_id, "#body/0")}`), _._trailers("</html>");
  _._script($scope0_id, "__tests__/template.marko_0_toggle");
  _._scope($scope0_id, {
    toggle
  }, "__tests__/template.marko", 0, {
    toggle: "1:5"
  });
  _._resume_branch($scope0_id);
});