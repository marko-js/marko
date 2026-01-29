import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $hoisted_el3 = _._hoist($scope0_id, "__tests__/template.marko_0_$hoisted_el3/hoist");
  _._for_to(5, 0, 1, () => {
    const $scope1_id = _._scope_id();
    _._html(`<div></div>${_._el_resume($scope1_id, "#div/0")}`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
  }, 0, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
  let to = 3;
  _._html("<hr>");
  _._for_to(to, 0, 1, () => {
    const $scope2_id = _._scope_id();
    _._html(`<div></div>${_._el_resume($scope2_id, "#div/0")}`);
    _._scope($scope2_id, {}, "__tests__/template.marko", "15:2");
  }, 0, $scope0_id, "#text/1", 1, 0, 0, 0, 1);
  _._html("<hr>");
  _._for_to(3, 0, 1, i => {
    const $scope3_id = _._scope_id();
    _._html("<ul>");
    _._for_to(3, 0, 1, j => {
      const $scope4_id = _._scope_id();
      _._html(`<li${_._attr("data-index", i * 4 + j)}></li>${_._el_resume($scope4_id, "#li/0")}`);
      _._scope($scope4_id, {}, "__tests__/template.marko", "30:4");
    }, 0, $scope3_id, "#ul/0", 1, 0, 0, 0, 1);
    _._html("</ul>");
    _._scope($scope3_id, {}, "__tests__/template.marko", "28:2");
  }, 0, $scope0_id, "#text/2", 1, 0, 0, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0_$hoisted_el3");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    $hoisted_el3
  }, "__tests__/template.marko", 0, {
    $hoisted_el3: 0
  });
  _._resume_branch($scope0_id);
});