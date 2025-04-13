import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_el = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_el/hoist");
  const $child_content_subscribers = new Set();
  const $hoisted_el3 = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_el3/hoist");
  const $inputshowChildnull_content_subscribers = new Set();
  const $inputshowsectionnull_content_subscribers = new Set();
  _child({
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      const el = _$.nodeRef();
      _$.write(`<span></span>${_$.markResumeNode($scope1_id, "#span/0")}`);
      _$.writeSubscribe($child_content_subscribers, _$.writeScope($scope1_id, {}, "__tests__/template.marko", "3:2"));
    })
  });
  _$.dynamicTag($scope0_id, "#text/1", input.show ? Child : null, {}, _$.registerContent("__tests__/template.marko_2_renderer", () => {
    const $scope2_id = _$.nextScopeId();
    const $hoisted_el2 = _$.hoist($scope2_id, "__tests__/template.marko_2_$hoisted_el2/hoist");
    const $child_content2_subscribers = new Set();
    _child({
      content: _$.createContent("__tests__/template.marko_3_renderer", () => {
        const $scope3_id = _$.nextScopeId();
        const el2 = _$.nodeRef();
        _$.write(`<div></div>${_$.markResumeNode($scope3_id, "#div/0")}`);
        _$.writeSubscribe($child_content2_subscribers, _$.writeScope($scope3_id, {}, "__tests__/template.marko", "16:4"));
      })
    });
    _$.writeEffect($scope2_id, "__tests__/template.marko_2_$hoisted_el2");
    _$.writeSubscribe($inputshowChildnull_content_subscribers, _$.writeScope($scope2_id, {
      $hoisted_el2,
      "ClosureScopes:3": $child_content2_subscribers
    }, "__tests__/template.marko", "15:4", {
      $hoisted_el2: 0
    }));
  }, $scope0_id), 0, _$.serializeGuard($serialize, 0));
  _$.dynamicTag($scope0_id, "#text/2", input.show ? 'section' : null, {}, _$.registerContent("__tests__/template.marko_4_renderer", () => {
    const $scope4_id = _$.nextScopeId();
    const el3 = _$.nodeRef();
    _$.write(`<p></p>${_$.markResumeNode($scope4_id, "#p/0")}`);
    _$.writeSubscribe($inputshowsectionnull_content_subscribers, _$.writeScope($scope4_id, {}, "__tests__/template.marko", "34:4"));
  }, $scope0_id), 0, _$.serializeGuard($serialize, 0));
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$hoisted_el3");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$hoisted_el");
  _$.writeScope($scope0_id, {
    $hoisted_el,
    $hoisted_el3,
    "ClosureScopes:1": $child_content_subscribers,
    "ClosureScopes:2": $inputshowChildnull_content_subscribers,
    "ClosureScopes:4": $inputshowsectionnull_content_subscribers
  }, "__tests__/template.marko", 0, {
    $hoisted_el: 0,
    $hoisted_el3: 0
  });
});