import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $clickCount__closures = new Set();
  let clickCount = 0;
  _._html(`<button>inc</button>${_._el_resume($scope0_id, "#button/0")}<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  _._try($scope0_id, "#text/2", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._await($scope1_id, "#text/0", resolveAfter(clickCount), value => {
      const $scope4_id = _._scope_id();
      _._html(`Async: <!>${_._escape(value > 1 ? (() => {
        throw new Error("ERROR!");
      })() : value)}${_._el_resume($scope4_id, "#text/0")}`);
      _._scope($scope4_id, {}, "__tests__/template.marko", "11:4");
    });
    _._script($scope1_id, "__tests__/template.marko_1_clickCount");
    _._subscribe($clickCount__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "7:2"));
    _._resume_branch($scope1_id);
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_3_content", err => {
        const $scope3_reason = _._scope_reason();
        const $scope3_id = _._scope_id();
        _._html(`${_._escape(err)}${_._el_resume($scope3_id, "#text/0", _._serialize_guard($scope3_reason, /* err */0))}`);
        _._serialize_if($scope3_reason, /* err */0) && _._scope($scope3_id, {}, "__tests__/template.marko", "17:4");
      }, $scope0_id)
    }),
    placeholder: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("LOADING...");
      }, $scope0_id)
    })
  });
  _._script($scope0_id, "__tests__/template.marko_0_clickCount");
  _._scope($scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": $clickCount__closures
  }, "__tests__/template.marko", 0, {
    clickCount: "2:6"
  });
  _._resume_branch($scope0_id);
});