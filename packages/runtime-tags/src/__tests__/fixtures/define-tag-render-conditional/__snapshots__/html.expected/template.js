import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = true;
  let x = 1;
  const MyTag = {
    content: _._content("__tests__/template.marko_2_content", ({
      value
    }) => {
      const $scope2_id = _._scope_id();
      const $scope2_reason = _._scope_reason();
      _._html(`<div>Hello ${_._sep(_._serialize_guard($scope2_reason, /* value */0))}${_._escape(value)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* value */0))}</div>`);
      _._serialize_if($scope2_reason, /* value */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "4:2");
    })
  };
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      const $childScope = _._peek_scope_id();
      _._set_serialize_reason(/* x */1);
      MyTag.content({
        value: x
      });
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "#childScope/0": _._existing_scope($childScope)
      }, "__tests__/template.marko", "8:2");
      return 0;
    }
  }, $scope0_id, "#text/0");
  _._html(`<button>${_._escape(x)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "2:6"
  });
  _._resume_branch($scope0_id);
});