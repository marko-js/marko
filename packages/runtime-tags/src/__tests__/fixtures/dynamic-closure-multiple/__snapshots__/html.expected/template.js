import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $a__closures = new Set();
  const $b__closures = new Set();
  let a = 0;
  let b = 0;
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/0")}`);
  _._try($scope0_id, "#text/1", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    if (true) {
      const $scope2_id = _._scope_id();
      _._html(`<div>${_._escape(a)}${_._el_resume($scope2_id, "#text/0")}</div><div>${_._escape(b)}${_._el_resume($scope2_id, "#text/1")}</div>`);
      _._subscribe($b__closures, _._subscribe($a__closures, _._scope($scope2_id, {
        _: _._scope_with_id($scope1_id),
        "ClosureSignalIndex:a": 0,
        "ClosureSignalIndex:b": 0
      }, "__tests__/template.marko", "8:4")));
    }
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "7:2");
  }, $scope0_id), {});
  _._script($scope0_id, "__tests__/template.marko_0_a_b");
  _._scope($scope0_id, {
    a,
    b,
    "ClosureScopes:a": $a__closures,
    "ClosureScopes:b": $b__closures
  }, "__tests__/template.marko", 0, {
    a: "1:6",
    b: "2:6"
  });
  _._resume_branch($scope0_id);
});