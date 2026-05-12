import Child from "./child.marko" with { lazy: "load" };
import * as _ from "@marko/runtime-tags/debug/html";
import _assetRuntime from "assets-runtime";
const $lazy_Child = _.withAssets(Child, _assetRuntime, "ready:__tests__/child.marko");
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<button>Inc</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._if(() => {
    if (count % 2 === 0) {
      const $scope1_id = _._scope_id();
      const $childScope = _._peek_scope_id();
      _._set_serialize_reason({
        /* input.label, input.value */0: /* count */1,
        /* input.value */2: /* count */1
      });
      $lazy_Child({
        label: "x",
        value: count
      });
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "#childScope/1": _._existing_scope($childScope)
      }, "__tests__/template.marko", "10:2");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "3:6"
  });
  _._resume_branch($scope0_id);
}, 1);