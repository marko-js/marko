import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/counter.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let clickCount = 0;
  _._html(`<button>${_._escape(clickCount)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/counter.marko_0_clickCount");
  _._scope($scope0_id, {
    clickCount
  }, "__tests__/tags/counter.marko", 0, {
    clickCount: "1:6"
  });
  _._resume_branch($scope0_id);
});