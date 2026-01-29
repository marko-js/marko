import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let selected = 0;
  _._html("<select>");
  _._for_until(3, 0, 1, i => {
    const $scope1_id = _._scope_id();
    _._html(`<option${_._attr("selected", selected === i)}>${_._escape(i)}</option>${_._el_resume($scope1_id, "#option/0")}`);
    _._scope($scope1_id, {
      "#LoopKey": i,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "3:3", {
      "#LoopKey": "3:7"
    });
  }, 0, $scope0_id, "#select/0", /* selected */1, 1, 0, "</select>", 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});