import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $showInner__closures = new Set();
  let showOuter = true;
  let showMiddle = true;
  let showInner = true;
  const write = _._resume(function (msg) {
    (el => el())(_._el_read_error).innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", $scope0_id);
  _._html(`<button id=outer>Toggle Outer</button>${_._el_resume($scope0_id, "#button/0")}<button id=middle>Toggle Middle</button>${_._el_resume($scope0_id, "#button/1")}<button id=inner>Toggle Inner</button>${_._el_resume($scope0_id, "#button/2")}<pre></pre>${_._el_resume($scope0_id, "#pre/3")}`);
  _._if(() => {
    if (showOuter) {
      const $scope1_id = _._scope_id();
      _._html("<div>");
      _child({
        write: write,
        name: "Outer"
      });
      _._if(() => {
        if (showMiddle) {
          const $scope2_id = _._scope_id();
          _._html("<div>");
          _child({
            write: write,
            name: "Middle"
          });
          _._if(() => {
            if (showInner) {
              const $scope3_id = _._scope_id();
              _child({
                write: write,
                name: "Inner"
              });
              _._scope($scope3_id, {
                _: _._scope_with_id($scope2_id)
              }, "__tests__/template.marko", "17:10");
              return 0;
            }
          }, $scope2_id, "#text/1");
          _._html("</div>");
          _._subscribe($showInner__closures, _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id),
            "ClosureSignalIndex:showInner": 0
          }, "__tests__/template.marko", "14:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", 1, /* showMiddle */1, /* showMiddle */1, 0, 1);
      _._html("</div>");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "11:2");
      return 0;
    }
  }, $scope0_id, "#text/4", 1, /* showOuter */1, /* showOuter */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0_showInner");
  _._script($scope0_id, "__tests__/template.marko_0_showMiddle");
  _._script($scope0_id, "__tests__/template.marko_0_showOuter");
  _._scope($scope0_id, {
    showOuter,
    showMiddle,
    showInner,
    write,
    "ClosureScopes:showInner": $showInner__closures
  }, "__tests__/template.marko", 0, {
    showOuter: "1:6",
    showMiddle: "2:6",
    showInner: "3:6",
    write: "9:8"
  });
  _._resume_branch($scope0_id);
});