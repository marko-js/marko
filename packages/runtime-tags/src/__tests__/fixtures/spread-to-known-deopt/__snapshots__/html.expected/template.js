import _wrapManySpreads from "./tags/wrap-many-spreads.marko";
import _wrapRest from "./tags/wrap-rest.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _wrapManySpreads({
    class: "foo"
  });
  _wrapRest({
    class: "bar"
  });
});