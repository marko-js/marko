export const $template = `${_wrapManySpreads_template}${_wrapRest_template}`;
export const $walks = /* <wrap-many-spreads>, <wrap-rest> */`/${_wrapManySpreads_walks}&/${_wrapRest_walks}&`;
import { $setup as _wrapManySpreads, $input as _wrapManySpreads_input, $template as _wrapManySpreads_template, $walks as _wrapManySpreads_walks } from "./tags/wrap-many-spreads.marko";
import { $setup as _wrapRest, $rest as _wrapRest_input_$rest, $template as _wrapRest_template, $walks as _wrapRest_walks } from "./tags/wrap-rest.marko";
export function $setup($scope) {
  _wrapManySpreads($scope["#childScope/0"]);
  _wrapManySpreads_input($scope["#childScope/0"], {
    class: "foo"
  });
  _wrapRest($scope["#childScope/1"]);
  _wrapRest_input_$rest($scope["#childScope/1"], {
    class: "bar"
  });
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);