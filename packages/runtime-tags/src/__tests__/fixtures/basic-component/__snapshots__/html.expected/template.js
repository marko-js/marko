import * as _$ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _counter({});
  _$.write("</div>");
});