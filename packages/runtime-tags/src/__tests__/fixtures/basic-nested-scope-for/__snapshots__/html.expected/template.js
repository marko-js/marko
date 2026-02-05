import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let selected = 0;
  _._for_of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], num => {
    const $scope1_id = _._scope_id();
    _._html(`<button${_._attr("data-selected", (selected === num))}${_._attr("data-multiple", (num % selected === 0))}>${_._escape(num)}</button>${_._el_resume($scope1_id, "#button/0")}`);
    _._script($scope1_id, "__tests__/template.marko_1_num");
    _._scope($scope1_id, {
      num,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "3:2", {
      num: "3:6"
    });
  }, 0, $scope0_id, "#text/0", /* selected */1, 0, 0, 0, 1);
  _._resume_branch($scope0_id);
});