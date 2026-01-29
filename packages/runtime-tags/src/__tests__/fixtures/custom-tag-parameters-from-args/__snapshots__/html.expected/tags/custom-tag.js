import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/custom-tag.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  let y = 10;
  _._html(`<button class=inc>${_._escape(x)}${_._el_resume($scope0_id, "#text/1")},<!>${_._escape(y)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._dynamic_tag($scope0_id, "#text/3", input.content, [x, y], 0, 1);
  _._script($scope0_id, "__tests__/tags/custom-tag.marko_0_x_y");
  _._scope($scope0_id, {
    input_content: input.content,
    x,
    y
  }, "__tests__/tags/custom-tag.marko", 0, {
    input_content: ["input.content"],
    x: "1:6",
    y: "2:6"
  });
  _._resume_branch($scope0_id);
});