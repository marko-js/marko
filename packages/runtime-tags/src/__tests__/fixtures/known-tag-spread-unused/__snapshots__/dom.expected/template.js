const $Foo_content__walks = /* get, over(1) */" b",
  $Foo_content__template = " ",
  $Bar_content__walks = /* over(1), <Foo>, over(1) */`b/${$Foo_content__walks}&b`,
  $Bar_content__template = `<!>${$Foo_content__template}<!>`;
export const $template = `<!>${$Bar_content__template}<!>`;
export const $walks = /* over(1), <Bar>, over(1) */`b/${$Bar_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $Bar_content2 = /* @__PURE__ */_._content("__tests__/template.marko_3_content", "Unused", /* over(1) */"b");
const $Bar_content__input_foo = ($scope, input_foo) => $Foo_content__input_foo($scope["#childScope/0"], input_foo);
const $Bar_content__$params = ($scope, $params3) => $Bar_content__input($scope, $params3[0]);
const $Bar_content__input = ($scope, input) => $Bar_content__input_foo($scope, input?.foo);
const $Foo_content__input_foo = ($scope, input_foo) => _._text($scope["#text/0"], input_foo || "fallback");
const $Foo_content__$params = ($scope, $params2) => $Foo_content__input($scope, $params2[0]);
const $Foo_content__input = ($scope, input) => $Foo_content__input_foo($scope, input?.foo);
export function $setup($scope) {
  $Bar_content__input_foo($scope["#childScope/0"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);