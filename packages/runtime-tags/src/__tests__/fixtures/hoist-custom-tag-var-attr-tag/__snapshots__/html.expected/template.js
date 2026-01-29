import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
import _thing from "./tags/thing.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $hoisted_setHtml = _._hoist($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml/hoist");
  const $what_content__subscribers = new Set();
  _thing({
    what: _.attrTag({
      content: _._content("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        let setHtml = _child({});
        _._subscribe($what_content__subscribers, _._scope($scope1_id, {
          setHtml
        }, "__tests__/template.marko", "3:4", {
          setHtml: "4:12"
        }));
        _._assert_hoist(setHtml);
      })
    })
  });
  _._script($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml");
  _._scope($scope0_id, {
    $hoisted_setHtml,
    "ClosureScopes:1": $what_content__subscribers
  }, "__tests__/template.marko", 0, {
    $hoisted_setHtml: "4:12"
  });
});