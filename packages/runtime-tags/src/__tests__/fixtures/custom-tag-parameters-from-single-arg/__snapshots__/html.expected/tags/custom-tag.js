import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-tag.marko", input => {
  const $scope0_id = _._scope_id();
  let x = 1;
  _._html(`<button class=inc>${_._escape(x)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._dynamic_tag($scope0_id, "#text/2", input.content, [x], 0, 1);
  _._script($scope0_id, "__tests__/tags/custom-tag.marko_0_x");
  _._scope($scope0_id, {
    input_content: input.content,
    x
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_content: ["input.content"],
    x: "1:6"
  });
  _._resume_branch($scope0_id);
});