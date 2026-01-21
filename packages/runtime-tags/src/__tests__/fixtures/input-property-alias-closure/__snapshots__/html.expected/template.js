import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $input_text__closures = new Set();
  const Child = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._html(`${_._escape(input.text)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* input.text */1))} and `);
      _._dynamic_tag($scope1_id, "#text/1", input.content, {}, 0, 0, _._serialize_guard($scope1_reason, /* input.content */2));
      _._serialize_if($scope1_reason, /* input.text, input.content */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:1");
    })
  };
  const {
    text
  } = input;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.text, input.content */0: _._serialize_guard($scope0_reason, /* input.text */0),
    /* input.text */1: _._serialize_guard($scope0_reason, /* input.text */0)
  });
  Child.content({
    text: input.text,
    content: _._content("__tests__/template.marko_2_content", () => {
      const $scope2_reason = _._scope_reason();
      const $scope2_id = _._scope_id();
      _._html(`${_._escape(text)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope0_reason, /* input.text */0))}`);
      _._serialize_if($scope0_reason, /* input.text */0) && _._subscribe($input_text__closures, _._scope($scope2_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:input_text": _._serialize_if($scope0_reason, /* input.text */0) && 0
      }, "__tests__/template.marko", "7:1"));
      _._resume_branch($scope2_id);
    })
  });
  _._serialize_if($scope0_reason, /* input.text */0) && _._scope($scope0_id, {
    "ClosureScopes:input_text": _._serialize_if($scope0_reason, /* input.text */0) && $input_text__closures,
    "#childScope/0": _._serialize_if($scope0_reason, /* input.text */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});