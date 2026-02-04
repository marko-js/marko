import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div id=el></div>");
  const MyButton = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      _._html("<button");
      _._attrs_partial_content(input, {
        "on-click": 1
      }, "#button/0", $scope1_id, "button");
      _._html(`</button>${_._el_resume($scope1_id, "#button/0")} `);
      _._script($scope1_id, "__tests__/template.marko_1_input");
      _._script($scope1_id, "__tests__/template.marko_1_input_onClick");
      _._scope($scope1_id, {
        input,
        input_onClick: input.onClick
      }, "__tests__/template.marko", "2:2", {
        input: "2:18",
        input_onClick: ["input.onClick", "2:18"]
      });
    })
  };
  MyButton.content({
    "on-click": _._resume(function () {
      throw new Error("Should never be called.");
    }, "__tests__/template.marko_0/onclick"),
    onClick: _._resume(function () {
      document.getElementById("el").textContent += "[onClick(parent)]";
    }, "__tests__/template.marko_0/onClick"),
    content: _._content_resume("__tests__/template.marko_2_content", () => {
      _._scope_reason();
      const $scope2_id = _._scope_id();
      _._html("Click Me");
    }, $scope0_id)
  });
});