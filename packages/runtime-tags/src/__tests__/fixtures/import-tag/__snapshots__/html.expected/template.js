import "./foo";
import { b as c } from "./bar";
import Baz from "./tags/baz.marko";
import _baz from "./tags/baz.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  Baz({});
  Baz({});
  _baz({});
  _._html(_._escape(c));
});