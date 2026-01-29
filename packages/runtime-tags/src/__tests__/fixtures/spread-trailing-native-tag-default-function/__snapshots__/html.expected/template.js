import * as _2 from "@marko/runtime-tags/debug/html";
export default _2._template("__tests__/template.marko", input => {
  _2._scope_reason();
  const $scope0_id = _2._scope_id();
  const {
    onClick,
    ...rest
  } = input;
  _2._html("<button");
  _2._attrs_content({
    onClick: _2._resume(function (_, el) {
      el.textContent = "clicked";
    }, "__tests__/template.marko_0/onClick"),
    ...rest
  }, "#button/0", $scope0_id, "button");
  _2._html(`</button>${_2._el_resume($scope0_id, "#button/0")}`);
  _2._script($scope0_id, "__tests__/template.marko_0_rest");
  _2._scope($scope0_id, {
    rest
  }, "__tests__/template.marko", 0, {
    rest: "1:22"
  });
});