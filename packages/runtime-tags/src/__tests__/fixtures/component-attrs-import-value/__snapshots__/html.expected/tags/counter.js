import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/counter.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<button>${_._escape(input.format(count))}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/counter.marko_0_count");
  _._scope($scope0_id, {
    input,
    count
  }, "__tests__/tags/counter.marko", 0, {
    input: 0,
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});