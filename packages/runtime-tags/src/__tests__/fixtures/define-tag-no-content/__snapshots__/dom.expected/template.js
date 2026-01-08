const $Baz_content__walks = /* over(1) */"b",
  $Baz_content__template = "<div>Baz Content</div>";
export const $template = `<!><!><!>${$Baz_content__template}<!>`;
export const $walks = /* over(1), replace, over(1), replace, over(1), <Baz>, over(1) */`b%b%b/${$Baz_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $Baz_content2 = /* @__PURE__ */_._content("__tests__/template.marko_4_content", "<div>Baz Fallback</div>", /* over(1) */"b");
const $Bar_content = _._content_resume("__tests__/template.marko_2_content", "<div>Bar Fallback</div>", /* over(1) */"b");
const $Foo_content = _._content_resume("__tests__/template.marko_1_content", "<div>Foo Fallback</div>", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $Foo_content);
const $Foo = ($scope, Foo) => $dynamicTag($scope, Foo);
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/1", $Bar_content);
const $Bar = ($scope, Bar) => $dynamicTag2($scope, Bar);
export function $setup($scope) {
  $Foo($scope, {});
  $Bar($scope, {});
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);