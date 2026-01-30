import Child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $setHtml_getter = _._hoist($scope0_id, "__tests__/template.marko_0_setHtml/hoist");
  _._if(() => {
    if (input.show) {
      const $scope1_id = _._scope_id();
      _._if(() => {
        if (input.show) {
          const $scope2_id = _._scope_id();
          const $Child_scope = _._peek_scope_id();
          let setHtml = _._dynamic_tag($scope2_id, "#text/0", 1 && Child, {});
          _._var($scope2_id, "#scopeOffset/1", $Child_scope, "__tests__/template.marko_2_setHtml/var");
          _._scope($scope2_id, {
            setHtml
          }, "__tests__/template.marko", "4:4", {
            setHtml: "5:20"
          });
          _._assert_hoist(setHtml);
          return 0;
        }
      }, $scope1_id, "#text/0", 1, _._serialize_guard($scope0_reason, /* input.show */0), _._serialize_guard($scope0_reason, /* input.show */0));
      _._scope($scope1_id, {
        _: _._serialize_if($scope0_reason, /* input.show */0) && _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/0", 1, _._serialize_guard($scope0_reason, /* input.show */0), _._serialize_guard($scope0_reason, /* input.show */0));
  _thing({
    value: $setHtml_getter
  });
  _._if(() => {
    if (true) {
      const $scope3_id = _._scope_id();
      const $Child_scope2 = _._peek_scope_id();
      let setHtml2 = _._dynamic_tag($scope3_id, "#text/0", 1 && Child, {});
      _._var($scope3_id, "#scopeOffset/1", $Child_scope2, "__tests__/template.marko_3_setHtml2/var");
      _._scope($scope3_id, {
        setHtml2
      }, "__tests__/template.marko", "15:2", {
        setHtml2: "16:18"
      });
      _._assert_hoist(setHtml2);
      return 0;
    }
  }, $scope0_id, "#text/2", 1, 0, _._serialize_guard($scope0_reason, /* input.show */0));
  _._if(() => {
    if (true) {
      const $scope4_id = _._scope_id();
      const $Child_scope3 = _._peek_scope_id();
      let setHtml3 = _._dynamic_tag($scope4_id, "#text/0", 1 && Child, {});
      _._var($scope4_id, "#scopeOffset/1", $Child_scope3, "__tests__/template.marko_4_setHtml3/var");
      _._scope($scope4_id, {
        setHtml3
      }, "__tests__/template.marko", "24:2", {
        setHtml3: "25:18"
      });
      _._assert_hoist(setHtml3);
      return 0;
    }
  }, $scope0_id, "#text/3", 1, 0, _._serialize_guard($scope0_reason, /* input.show */0));
  if (true) {
    const $scope5_id = _._scope_id();
    _._script($scope5_id, "__tests__/template.marko_5");
    _._scope($scope5_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "28:2");
  }
  _._script($scope0_id, "__tests__/template.marko_0");
  _._serialize_if($scope0_reason, /* input.show */0) && _._scope($scope0_id, {
    input_show: input.show
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});