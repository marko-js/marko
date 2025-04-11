import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _helloInternal from "./components/hello-internal.marko";
_s(_helloInternal, "__tests__/tags/components/hello-internal.marko");
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/hello.marko", input => {
  const $scope0_id = _$.nextScopeId();
  _$.dynamicTag($scope0_id, "#text/0", _helloInternal, {}, 0, 0, 1);
  _$.writeScope($scope0_id, {}, "__tests__/tags/hello.marko", 0);
});