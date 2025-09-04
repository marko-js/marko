export const $template = "<div id=ref>0</div>";
export const $walks = /* over(1) */"b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $promise__script = _._script("__tests__/template.marko_0_promise", ({
  promise
}) => (async () => {
  document.getElementById("ref").textContent = await promise;
})());
const $promise = /* @__PURE__ */_._const("promise", $promise__script);
export function $setup($scope) {
  $promise($scope, Promise.resolve("hello"));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);