import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $setHtml3_getter = _._hoist($scope0_id, "__tests__/template.marko_0_setHtml3/hoist");
  _._for_to(5, 0, 1, () => {
    const $scope1_id = _._scope_id();
    let setHtml = _child({});
    _._scope($scope1_id, {
      setHtml
    }, "__tests__/template.marko", "1:2", {
      setHtml: "2:10"
    });
    _._assert_hoist(setHtml);
  }, 0, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
  let to = 3;
  _._html("<hr>");
  _._for_to(to, 0, 1, () => {
    const $scope2_id = _._scope_id();
    let setHtml2 = _child({});
    _._scope($scope2_id, {
      setHtml2
    }, "__tests__/template.marko", "12:2", {
      setHtml2: "13:10"
    });
    _._assert_hoist(setHtml2);
  }, 0, $scope0_id, "#text/1", 1, 0, 0, 0, 1);
  _._html("<hr>");
  _._for_to(3, 0, 1, i => {
    const $scope3_id = _._scope_id();
    _._html("<ul>");
    _._for_to(3, 0, 1, j => {
      const $scope4_id = _._scope_id();
      let setHtml3 = _child({});
      _._scope($scope4_id, {
        setHtml3
      }, "__tests__/template.marko", "24:4", {
        setHtml3: "25:12"
      });
      _._assert_hoist(setHtml3);
    }, 0, $scope3_id, "#ul/0", 1, 0, 0, 0, 1);
    _._html("</ul>");
    _._scope($scope3_id, {}, "__tests__/template.marko", "22:2");
  }, 0, $scope0_id, "#text/2", 1, 0, 0, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._resume_branch($scope0_id);
});