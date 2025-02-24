import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import _helloInternal from "./components/hello-internal.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.register("__tests__/tags/components/hello-internal.marko", _helloInternal);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export function _setup_(_scope) {
  _dynamicTag(_scope, _helloInternal);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello.marko", _template_, _walks_, _setup_);