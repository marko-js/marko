import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/counter.marko", input => {
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<button id=count>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/counter.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/tags/counter.marko", 0, {
    count: "1:5"
  });
  _._resume_branch($scope0_id);
});