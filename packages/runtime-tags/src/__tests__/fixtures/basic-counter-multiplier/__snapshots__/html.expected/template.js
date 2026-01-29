import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  let multiplier = 1;
  const multipliedCount = count * multiplier;
  _._html(`<button id=multiplier>increase multiplier (<!>${_._escape(multiplier)}${_._el_resume($scope0_id, "#text/1")})</button>${_._el_resume($scope0_id, "#button/0")}<button id=count>increase count</button>${_._el_resume($scope0_id, "#button/2")}<div>${_._escape(multipliedCount)}${_._el_resume($scope0_id, "#text/3")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._script($scope0_id, "__tests__/template.marko_0_multiplier");
  _._scope($scope0_id, {
    count,
    multiplier
  }, "__tests__/template.marko", 0, {
    count: "1:6",
    multiplier: "2:6"
  });
  _._resume_branch($scope0_id);
});