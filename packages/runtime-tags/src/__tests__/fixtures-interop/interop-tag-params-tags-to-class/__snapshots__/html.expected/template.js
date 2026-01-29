import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _ from "@marko/runtime-tags/debug/html";
import _classLayout from "./components/class-layout.marko";
_s(_classLayout, "__tests__/components/class-layout.marko");
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $multiplier__closures = new Set();
  let multiplier = 1;
  _._dynamic_tag($scope0_id, "#text/0", _classLayout, {}, _._content_resume("__tests__/template.marko_1_content", (baseCount, message) => {
    const $scope1_id = _._scope_id();
    const $scope1_reason = _._scope_reason();
    _._html(`<h1>${_._escape(message)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* message */1))}</h1><button id=tags>${_._escape(multiplier)}${_._el_resume($scope1_id, "#text/2")} * ${_._sep(_._serialize_guard($scope1_reason, /* baseCount */0))}${_._escape(baseCount)}${_._el_resume($scope1_id, "#text/3", _._serialize_guard($scope1_reason, /* baseCount */0))} = <!>${_._escape(multiplier * baseCount)}${_._el_resume($scope1_id, "#text/4")}</button>${_._el_resume($scope1_id, "#button/1")}`);
    _._script($scope1_id, "__tests__/template.marko_1_multiplier");
    _._subscribe($multiplier__closures, _._scope($scope1_id, {
      baseCount,
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:multiplier": 0
    }, "__tests__/template.marko", "2:2", {
      baseCount: "2:15"
    }));
    _._resume_branch($scope1_id);
  }, $scope0_id), 0, 0);
  _._scope($scope0_id, {
    multiplier,
    "ClosureScopes:multiplier": $multiplier__closures
  }, "__tests__/template.marko", 0, {
    multiplier: "1:6"
  });
  _._resume_branch($scope0_id);
});