import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const $input_value__closures = new Set();
  let Parent = "div";
  let Child = "a";
  _._html(`<div><svg>${_._unescaped(input.value)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.value */0))}`);
  _._dynamic_tag($scope0_id, "#text/2", Child, {
    href: "#bar"
  }, _._content_resume("__tests__/template.marko_2_content", () => {
    const $scope2_id = _._scope_id();
    _._scope_reason();
    _._html("Hi");
  }, $scope0_id));
  _._html(`</svg><math>${_._unescaped(input.value)}${_._el_resume($scope0_id, "#text/3", _._serialize_guard($scope0_reason, /* input.value */0))}`);
  _._dynamic_tag($scope0_id, "#text/4", Child, {
    href: "#bar"
  }, _._content_resume("__tests__/template.marko_3_content", () => {
    const $scope3_id = _._scope_id();
    _._scope_reason();
    _._html("Hi");
  }, $scope0_id));
  _._html("</math>");
  _._dynamic_tag($scope0_id, "#text/5", Parent, {}, _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    const $scope1_reason = _._scope_reason();
    _._html(`${_._unescaped(input.value)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope0_reason, /* input.value */0))}`);
    _._subscribe($input_value__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:input_value": _._serialize_if($scope0_reason, /* input.value */0) && 0
    }, "__tests__/template.marko", "12:3"));
    _._resume_branch($scope1_id);
  }, $scope0_id));
  _._html(`<button class=toggle-parent>Toggle Parent</button>${_._el_resume($scope0_id, "#button/6")}<button class=toggle-child>Toggle Child</button>${_._el_resume($scope0_id, "#button/7")}</div>${_._el_resume($scope0_id, "#div/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_Parent_Child");
  _._script($scope0_id, "__tests__/template.marko_0_Child");
  _._script($scope0_id, "__tests__/template.marko_0_Parent");
  _._scope($scope0_id, {
    input_value: input.value,
    Parent,
    Child,
    "ClosureScopes:input_value": _._serialize_if($scope0_reason, /* input.value */0) && $input_value__closures
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"],
    Parent: "1:5",
    Child: "2:5"
  });
  _._resume_branch($scope0_id);
});