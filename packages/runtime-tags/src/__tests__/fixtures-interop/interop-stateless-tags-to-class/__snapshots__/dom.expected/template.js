import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const $template = "<!><!><span id=display></span>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import _myButton from "./components/my-button/index.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
_._resume("__tests__/components/my-button/index.marko", _myButton);
_._resume_dynamic_tag();
const $mybutton_content = _._content_resume("__tests__/template.marko_1_content", "Say Hi", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $mybutton_content);
export function $setup($scope) {
  $dynamicTag($scope, _myButton, () => ({
    onClick: $onClick
  }));
}
function $onClick() {
  document.getElementById("display").innerHTML = "Hi!";
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);