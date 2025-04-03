import "./foo";
import { b as c } from "./bar";
import Baz from "./tags/baz.marko";
import _baz from "./tags/baz.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  Baz({});
  Baz({});
  _baz({});
  _$.write(_$.escapeXML(c));
});