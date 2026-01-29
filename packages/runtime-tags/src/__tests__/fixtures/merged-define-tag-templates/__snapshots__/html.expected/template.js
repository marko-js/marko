import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const A = {
    content: _._content("__tests__/template.marko_1_content", ({
      value
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._html(`${_._escape(value)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* value */0))}`);
      _._serialize_if($scope1_reason, /* value */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:1");
    })
  };
  const B = {
    content: _._content("__tests__/template.marko_2_content", ({
      value
    }) => {
      const $scope2_id = _._scope_id();
      const $scope2_reason = _._scope_reason();
      const $childScope = _._peek_scope_id();
      _._set_serialize_reason(_._serialize_guard($scope2_reason, /* value.length */0));
      A.content({
        value: value.length
      });
      _._serialize_if($scope2_reason, /* value.length */0) && _._scope($scope2_id, {
        "#childScope/0": _._serialize_if($scope2_reason, /* value.length */0) && _._existing_scope($childScope)
      }, "__tests__/template.marko", "4:1");
    })
  };
  let value = "";
  const $childScope2 = _._peek_scope_id();
  _._set_serialize_reason(/* value */1);
  B.content({
    value: value
  });
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope2)
  }, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});