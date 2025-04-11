import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_setHtml = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml/hoist");
  const $what_content_subscribers = new Set();
  _thing({
    what: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
        const $scope1_id = _$.nextScopeId();
        const setHtml = _child({});
        _$.writeSubscribe($what_content_subscribers, _$.writeScope($scope1_id, {
          setHtml
        }, "__tests__/template.marko", "3:4", {
          setHtml: "4:12"
        }));
      }, $scope0_id)
    })
  });
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml");
  _$.writeScope($scope0_id, {
    $hoisted_setHtml,
    "ClosureScopes:1": $what_content_subscribers
  }, "__tests__/template.marko", 0, {
    $hoisted_setHtml: "4:12"
  });
});