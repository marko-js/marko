import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _classCounter from "./components/class-counter.marko";
_s(_classCounter, "__tests__/components/class-counter.marko");
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.dynamicTag($scope0_id, "#text/0", _classCounter, {
    onCount: _$.register(function (newCount) {
      count = newCount;
    }, "__tests__/template.marko_0/onCount", $scope0_id)
  });
  _$.write(`<div id=tags-api>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</div>`);
  _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
  _$.resumeClosestBranch($scope0_id);
});