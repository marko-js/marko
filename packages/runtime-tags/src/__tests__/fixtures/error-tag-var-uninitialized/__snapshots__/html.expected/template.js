import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Tag = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, (_._serialize_guard($scope1_reason, /* input.content */0)));
      const $return = "A";
      (_._serialize_if($scope1_reason, /* input.content */0)) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
      return $return;
    })
  };
  let name = Tag.content({
    content: _._content("__tests__/template.marko_2_content", () => {
      _._scope_reason();
      const $scope2_id = _._scope_id();
      _._html(`<div>${_._escape(name)}</div>`);
      _._resume_branch($scope2_id);
    })
  });
}, 1);