import Thing from "./tags/thing.marko";
import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const $hoisted_setHtml = _$.hoist($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml/hoist");
  const $thing_content_subscribers = new Set();
  const $inputshowThingnull_content_subscribers = new Set();
  const $inputshowsectionnull_content_subscribers = new Set();
  _thing({
    content: _$.createContent("__tests__/template.marko_1_renderer", () => {
      const $scope1_id = _$.nextScopeId();
      let setHtml = _child({});
      _$.writeSubscribe($thing_content_subscribers, _$.writeScope($scope1_id, {
        setHtml
      }, "__tests__/template.marko", "3:2", {
        setHtml: "4:10"
      }));
    })
  });
  _$.dynamicTag($scope0_id, "#text/1", input.show ? Thing : null, {}, _$.registerContent("__tests__/template.marko_2_renderer", () => {
    const $scope2_id = _$.nextScopeId();
    const $thing_content2_subscribers = new Set();
    _thing({
      content: _$.createContent("__tests__/template.marko_3_renderer", () => {
        const $scope3_id = _$.nextScopeId();
        let setHtml2 = _child({});
        _$.writeSubscribe($thing_content2_subscribers, _$.writeScope($scope3_id, {
          setHtml2
        }, "__tests__/template.marko", "16:4", {
          setHtml2: "17:12"
        }));
      })
    });
    _$.writeSubscribe($inputshowThingnull_content_subscribers, _$.writeScope($scope2_id, {
      "ClosureScopes:3": $thing_content2_subscribers
    }, "__tests__/template.marko", "15:4"));
  }, $scope0_id), 0, _$.serializeGuard($serialize, /* input.show */0));
  _$.dynamicTag($scope0_id, "#text/2", input.show ? 'section' : null, {}, _$.registerContent("__tests__/template.marko_4_renderer", () => {
    const $scope4_id = _$.nextScopeId();
    let setHtml3 = _child({});
    _$.writeSubscribe($inputshowsectionnull_content_subscribers, _$.writeScope($scope4_id, {
      setHtml3
    }, "__tests__/template.marko", "26:4", {
      setHtml3: "27:10"
    }));
  }, $scope0_id), 0, _$.serializeGuard($serialize, /* input.show */0));
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml");
  _$.writeScope($scope0_id, {
    $hoisted_setHtml,
    "ClosureScopes:1": $thing_content_subscribers,
    "ClosureScopes:2": $inputshowThingnull_content_subscribers,
    "ClosureScopes:4": $inputshowsectionnull_content_subscribers
  }, "__tests__/template.marko", 0, {
    $hoisted_setHtml: "4:10"
  });
});