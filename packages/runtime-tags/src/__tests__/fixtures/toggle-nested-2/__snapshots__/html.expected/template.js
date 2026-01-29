import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $count__closures = new Set();
  let outer = true;
  let inner = true;
  let count = 0;
  _._html(`<div><button id=outer></button>${_._el_resume($scope0_id, "#button/0")}`);
  _._if(() => {
    if (outer) {
      const $scope1_id = _._scope_id();
      _._html(`<button id=inner></button>${_._el_resume($scope1_id, "#button/0")}`);
      _._if(() => {
        if (inner) {
          const $scope2_id = _._scope_id();
          _._html(`<button id=count>${_._escape(count)}${_._el_resume($scope2_id, "#text/1")}</button>${_._el_resume($scope2_id, "#button/0")}`);
          _._script($scope2_id, "__tests__/template.marko_2_count");
          _._subscribe($count__closures, _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id),
            "ClosureSignalIndex:count": 0
          }, "__tests__/template.marko", "8:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", 1, /* inner */1, /* inner */1, 0, 1);
      _._script($scope1_id, "__tests__/template.marko_1_inner");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "6:4");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _._html("</div>");
  _._script($scope0_id, "__tests__/template.marko_0_outer");
  _._scope($scope0_id, {
    outer,
    inner,
    count,
    "ClosureScopes:count": $count__closures
  }, "__tests__/template.marko", 0, {
    outer: "1:6",
    inner: "2:6",
    count: "3:6"
  });
  _._resume_branch($scope0_id);
});