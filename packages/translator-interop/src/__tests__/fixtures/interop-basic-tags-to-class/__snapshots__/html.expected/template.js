import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/html";
import _classCounter from "./components/class-counter.marko";
_s(_classCounter, "__tests__/components/class-counter.marko");
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let count = 0;
  _$.write(`<button id=tags>${_$.escapeXML(count)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.dynamicTag($scope0_id, "#text/2", _classCounter, {
    count: count
  }, 0, 0, 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope($scope0_id, {
    count
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _$.resumeClosestBranch($scope0_id);
});