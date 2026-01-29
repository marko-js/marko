import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let selected = 0;
  _._html("<div id=target>");
  _._for_until(3, 0, 1, i => {
    const $scope1_id = _._scope_id();
    _._html(`<span${_._attr("data-selected", selected === i)}>${_._escape(i)}</span>${_._el_resume($scope1_id, "#span/0")}`);
    _._scope($scope1_id, {
      "#LoopKey": i,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "3:3", {
      "#LoopKey": "3:7"
    });
  }, 0, $scope0_id, "#div/0", /* selected */1, 1, 0, "</div>", 1);
  _._script($scope0_id, "__tests__/template.marko_0_selected");
  _._scope($scope0_id, {
    selected
  }, "__tests__/template.marko", 0, {
    selected: "1:5"
  });
  _._resume_branch($scope0_id);
});