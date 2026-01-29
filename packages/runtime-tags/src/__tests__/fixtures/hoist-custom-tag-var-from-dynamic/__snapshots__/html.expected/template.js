import Thing from "./tags/thing.marko";
import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
import _thing from "./tags/thing.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $hoisted_setHtml = _._hoist($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml/hoist");
  const $thing_content__subscribers = new Set();
  const $inputshowThingnull_content__subscribers = new Set();
  const $inputshowsectionnull_content__subscribers = new Set();
  _thing({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      let setHtml = _child({});
      _._subscribe($thing_content__subscribers, _._scope($scope1_id, {
        setHtml
      }, "__tests__/template.marko", "3:2", {
        setHtml: "4:10"
      }));
      _._assert_hoist(setHtml);
    })
  });
  _._dynamic_tag($scope0_id, "#text/1", input.show ? Thing : null, {}, _._content_resume("__tests__/template.marko_2_content", () => {
    const $scope2_id = _._scope_id();
    const $thing_content2__subscribers = new Set();
    _._scope_reason();
    _thing({
      content: _._content("__tests__/template.marko_3_content", () => {
        _._scope_reason();
        const $scope3_id = _._scope_id();
        let setHtml2 = _child({});
        _._subscribe($thing_content2__subscribers, _._scope($scope3_id, {
          setHtml2
        }, "__tests__/template.marko", "16:4", {
          setHtml2: "17:12"
        }));
        _._assert_hoist(setHtml2);
      })
    });
    _._subscribe($inputshowThingnull_content__subscribers, _._scope($scope2_id, {
      "ClosureScopes:3": $thing_content2__subscribers
    }, "__tests__/template.marko", "15:4"));
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.show */0));
  _._dynamic_tag($scope0_id, "#text/2", input.show ? 'section' : null, {}, _._content_resume("__tests__/template.marko_4_content", () => {
    const $scope4_id = _._scope_id();
    _._scope_reason();
    let setHtml3 = _child({});
    _._subscribe($inputshowsectionnull_content__subscribers, _._scope($scope4_id, {
      setHtml3
    }, "__tests__/template.marko", "26:4", {
      setHtml3: "27:10"
    }));
    _._assert_hoist(setHtml3);
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.show */0));
  _._script($scope0_id, "__tests__/template.marko_0");
  _._script($scope0_id, "__tests__/template.marko_0_$hoisted_setHtml");
  _._scope($scope0_id, {
    $hoisted_setHtml,
    "ClosureScopes:1": $thing_content__subscribers,
    "ClosureScopes:2": $inputshowThingnull_content__subscribers,
    "ClosureScopes:4": $inputshowsectionnull_content__subscribers
  }, "__tests__/template.marko", 0, {
    $hoisted_setHtml: "4:10"
  });
});