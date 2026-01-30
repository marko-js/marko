import Child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $el_getter = _._hoist($scope0_id, "__tests__/template.marko_0_#span/hoist");
  const $child_content__subscribers = new Set();
  const $el2_getter = _._hoist($scope0_id, "__tests__/template.marko_0_#div/hoist");
  const $inputshowChildnull_content__subscribers = new Set();
  const $inputshowsectionnull_content__subscribers = new Set();
  _child({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html(`<span></span>${_._el_resume($scope1_id, "#span/0")}`);
      _._subscribe($child_content__subscribers, _._scope($scope1_id, {}, "__tests__/template.marko", "3:2"));
    })
  });
  _._dynamic_tag($scope0_id, "#text/1", input.show ? Child : null, {}, _._content_resume("__tests__/template.marko_2_content", () => {
    const $scope2_id = _._scope_id();
    const $inputshowChildnull_content__$el2_getter = _._hoist($scope2_id, "__tests__/template.marko_2_#div/hoist");
    const $child_content2__subscribers = new Set();
    _._scope_reason();
    _child({
      content: _._content("__tests__/template.marko_3_content", () => {
        _._scope_reason();
        const $scope3_id = _._scope_id();
        _._html(`<div></div>${_._el_resume($scope3_id, "#div/0")}`);
        _._subscribe($child_content2__subscribers, _._scope($scope3_id, {}, "__tests__/template.marko", "16:4"));
      })
    });
    _._script($scope2_id, "__tests__/template.marko_2");
    _._subscribe($inputshowChildnull_content__subscribers, _._scope($scope2_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureScopes:3": $child_content2__subscribers
    }, "__tests__/template.marko", "15:4"));
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.show */0));
  _._dynamic_tag($scope0_id, "#text/2", input.show ? 'section' : null, {}, _._content_resume("__tests__/template.marko_4_content", () => {
    const $scope4_id = _._scope_id();
    _._scope_reason();
    _._html(`<p></p>${_._el_resume($scope4_id, "#p/0")}`);
    _._subscribe($inputshowsectionnull_content__subscribers, _._scope($scope4_id, {}, "__tests__/template.marko", "34:4"));
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.show */0));
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    "ClosureScopes:1": $child_content__subscribers,
    "ClosureScopes:2": $inputshowChildnull_content__subscribers,
    "ClosureScopes:4": $inputshowsectionnull_content__subscribers
  }, "__tests__/template.marko", 0);
});