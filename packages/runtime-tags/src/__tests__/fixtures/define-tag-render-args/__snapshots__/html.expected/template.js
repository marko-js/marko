import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  const MyTag = {
    content: _._content("__tests__/template.marko_1_content", (a, b, c) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._html(`<div>${_._escape(a)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* a */1))}|${_._sep(_._serialize_guard($scope1_reason, /* b */2))}${_._escape(b)}${_._el_resume($scope1_id, "#text/1", _._serialize_guard($scope1_reason, /* b */2))}|${_._sep(_._serialize_guard($scope1_reason, /* c */3))}${_._escape(c)}${_._el_resume($scope1_id, "#text/2", _._serialize_guard($scope1_reason, /* c */3))}</div>`);
      _._serialize_if($scope1_reason, /* a, b, c */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "2:2");
    })
  };
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* a, b, c */0: /* x */1,
    /* c */3: /* x */1
  });
  MyTag.content(1, "Hello", x);
  _._html(`<button>${_._escape(x)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _._resume_branch($scope0_id);
});