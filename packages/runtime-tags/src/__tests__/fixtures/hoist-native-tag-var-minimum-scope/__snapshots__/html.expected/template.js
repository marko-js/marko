import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $el_getter = _._hoist($scope0_id, "__tests__/template.marko_0_#div/hoist");
  _._html(`<pre id=root></pre>${_._el_resume($scope0_id, "#pre/0")}<pre id=outer></pre>${_._el_resume($scope0_id, "#pre/1")}<pre id=inner></pre>${_._el_resume($scope0_id, "#pre/2")}`);
  _._for_to(2, 0, 1, i => {
    const $scope1_id = _._scope_id();
    const $for_content__$el_getter = _._hoist($scope1_id, "__tests__/template.marko_1_#div/hoist");
    _._for_to(2, 0, 1, j => {
      const $scope2_id = _._scope_id();
      const $for_content2__$el_getter = _._hoist($scope2_id, "__tests__/template.marko_2_#div/hoist");
      _._html(`<div${_._attr_class(`${i}, ${j}`)}></div>${_._el_resume($scope2_id, "#div/0")}`);
      _._script($scope2_id, "__tests__/template.marko_2");
      _._scope($scope2_id, {
        _: _._scope_with_id($scope1_id)
      }, "__tests__/template.marko", "7:4");
    }, 0, $scope1_id, "#text/0", 1, 0, 0, 0, 1);
    _._script($scope1_id, "__tests__/template.marko_1");
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "5:2");
  }, 0, $scope0_id, "#text/3", 1, 0, 0);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});