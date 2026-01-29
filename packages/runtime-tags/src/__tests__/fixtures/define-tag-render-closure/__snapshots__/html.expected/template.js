import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $x__closures = new Set();
  let x = 1;
  const MyTag = {
    content: _._content("__tests__/template.marko_1_content", () => {
      const $scope1_id = _._scope_id();
      _._scope_reason();
      _._html(`<div>${_._escape(x)}${_._el_resume($scope1_id, "#text/0")}</div>`);
      _._subscribe($x__closures, _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id),
        "ClosureSignalIndex:x": 0
      }, "__tests__/template.marko", "2:2"));
      _._resume_branch($scope1_id);
    })
  };
  MyTag.content({});
  _._if(() => {
    if (x || 1) {
      const $scope2_id = _._scope_id();
      MyTag.content({});
      _._scope($scope2_id, {}, "__tests__/template.marko", "7:2");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _._html(`<button>${_._escape(x)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x,
    "ClosureScopes:x": $x__closures
  }, "__tests__/template.marko", 0, {
    x: "1:6"
  });
  _._resume_branch($scope0_id);
});