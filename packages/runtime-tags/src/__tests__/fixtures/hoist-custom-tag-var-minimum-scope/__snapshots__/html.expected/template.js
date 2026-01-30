import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $ref_getter = _._hoist($scope0_id, "__tests__/template.marko_0_ref/hoist");
  _._html(`<pre id=root></pre>${_._el_resume($scope0_id, "#pre/0")}<pre id=outer></pre>${_._el_resume($scope0_id, "#pre/1")}<pre id=inner></pre>${_._el_resume($scope0_id, "#pre/2")}`);
  _._for_to(2, 0, 1, i => {
    const $scope1_id = _._scope_id();
    const $for_content__ref_getter = _._hoist($scope1_id, "__tests__/template.marko_1_ref/hoist");
    _._for_to(2, 0, 1, j => {
      const $scope2_id = _._scope_id();
      const $for_content2__ref_getter = _._hoist($scope2_id, "__tests__/template.marko_2_ref/hoist");
      let ref = _child({
        value: `${i},${j}`
      });
      _._script($scope2_id, "__tests__/template.marko_2");
      _._scope($scope2_id, {
        ref,
        _: _._scope_with_id($scope1_id)
      }, "__tests__/template.marko", "7:4", {
        ref: "9:12"
      });
      _._assert_hoist(ref);
    }, 0, $scope1_id, "#text/0", 1, 0, 0);
    _._script($scope1_id, "__tests__/template.marko_1");
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "5:2");
  }, 0, $scope0_id, "#text/3", 1, 0, 0);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});