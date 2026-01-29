import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/counter.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let clickCount = 0;
  _._html(`<button>${_._escape(((() => {
    if (clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
  })(), clickCount))}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/counter.marko_0_input_onCount_clickCount");
  _._scope($scope0_id, {
    input_onCount: input.onCount,
    clickCount
  }, "__tests__/tags/counter.marko", 0, {
    input_onCount: ["input.onCount"],
    clickCount: "1:6"
  });
  _._resume_branch($scope0_id);
});