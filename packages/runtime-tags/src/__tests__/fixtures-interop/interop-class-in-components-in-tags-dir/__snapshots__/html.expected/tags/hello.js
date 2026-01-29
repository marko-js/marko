import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _helloInternal from "./components/hello-internal.marko";
_s(_helloInternal, "__tests__/tags/components/hello-internal.marko");
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/hello.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._dynamic_tag($scope0_id, "#text/0", _helloInternal, {}, 0, 0, 0);
});