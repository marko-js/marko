import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import _helloInternal from "./components/hello-internal.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.register("__tests__/tags/components/hello-internal.marko", _helloInternal);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export function $setup($scope) {
  $dynamicTag($scope, _helloInternal);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello.marko", $template, $walks, $setup);