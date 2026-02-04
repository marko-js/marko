import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  const MyButton = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      _._html(`<button></button>${_._el_resume($scope1_id, "#button/0")} `);
      _._script($scope1_id, "__tests__/template.marko_1_input_message");
      _._scope($scope1_id, {
        input_message: input.message,
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "2:2", {
        input_message: ["input.message", "2:18"]
      });
    })
  };
  MyButton.content({
    message: "hello"
  });
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});