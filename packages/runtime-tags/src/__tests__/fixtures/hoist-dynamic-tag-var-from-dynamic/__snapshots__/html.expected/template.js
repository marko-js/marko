import Child from "./tags/child.marko";
import Thing from "./tags/thing.marko";
import * as _ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $setHtml_getter = _._hoist($scope0_id, "__tests__/template.marko_0_setHtml/hoist");
  const $thing_content__subscribers = new Set();
  const $inputshowThingnull_content__subscribers = new Set();
  const $inputshowsectionnull_content__subscribers = new Set();
  _thing({
    content: _._content("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      const $Child_scope = _._peek_scope_id();
      let setHtml = _._dynamic_tag($scope1_id, "#text/0", 1 && Child, {});
      _._var($scope1_id, "#scopeOffset/1", $Child_scope, "__tests__/template.marko_1_setHtml/var");
      _._subscribe($thing_content__subscribers, _._scope($scope1_id, {
        setHtml
      }, "__tests__/template.marko", "4:2", {
        setHtml: "5:18"
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
        const $Child_scope2 = _._peek_scope_id();
        let setHtml2 = _._dynamic_tag($scope3_id, "#text/0", 1 && Child, {});
        _._var($scope3_id, "#scopeOffset/1", $Child_scope2, "__tests__/template.marko_3_setHtml2/var");
        _._subscribe($thing_content2__subscribers, _._scope($scope3_id, {
          setHtml2
        }, "__tests__/template.marko", "17:4", {
          setHtml2: "18:20"
        }));
        _._assert_hoist(setHtml2);
      })
    });
    _._subscribe($inputshowThingnull_content__subscribers, _._scope($scope2_id, {
      "ClosureScopes:3": $thing_content2__subscribers
    }, "__tests__/template.marko", "16:4"));
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.show */0));
  _._dynamic_tag($scope0_id, "#text/2", input.show ? 'section' : null, {}, _._content_resume("__tests__/template.marko_4_content", () => {
    const $scope4_id = _._scope_id();
    _._scope_reason();
    const $Child_scope3 = _._peek_scope_id();
    let setHtml3 = _._dynamic_tag($scope4_id, "#text/0", 1 && Child, {});
    _._var($scope4_id, "#scopeOffset/1", $Child_scope3, "__tests__/template.marko_4_setHtml3/var");
    _._subscribe($inputshowsectionnull_content__subscribers, _._scope($scope4_id, {
      setHtml3
    }, "__tests__/template.marko", "27:4", {
      setHtml3: "28:18"
    }));
    _._assert_hoist(setHtml3);
  }, $scope0_id), 0, _._serialize_guard($scope0_reason, /* input.show */0));
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    "ClosureScopes:1": $thing_content__subscribers,
    "ClosureScopes:2": $inputshowThingnull_content__subscribers,
    "ClosureScopes:4": $inputshowsectionnull_content__subscribers
  }, "__tests__/template.marko", 0);
});