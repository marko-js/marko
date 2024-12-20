import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import _helloInternal from "./components/hello-internal.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.register("__tests__/tags/components/hello-internal.marko", _helloInternal);
const _helloInternal_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _helloInternal_input(_scope, () => ({})), () => _helloInternal_input);
export function _setup_(_scope) {
  _dynamicTagName(_scope, _helloInternal);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello.marko", _template_, _walks_, _setup_);