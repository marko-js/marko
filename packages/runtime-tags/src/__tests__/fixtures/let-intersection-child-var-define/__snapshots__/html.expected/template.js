import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Let = {
    content: _._content("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      let internal = 0;
      const $return = internal;
      _._scope($scope1_id, {
        "#TagVariableChange": _._resume(_new_internal => {
          internal = _new_internal;
        }, "__tests__/template.marko_1/valueChange", $scope1_id) || void 0
      }, "__tests__/template.marko", "1:2");
      _._resume_branch($scope1_id);
      return $return;
    })
  };
  const $childScope = _._peek_scope_id();
  let a = Let.content({});
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_a/var");
  let b = 0;
  _._html(`<button>${_._escape(`${a},${b}`)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_a_b");
  _._scope($scope0_id, {
    a,
    b,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    a: "6:6",
    b: "7:6"
  });
  _._resume_branch($scope0_id);
}, 1);