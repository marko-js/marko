const $define_content__walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l",
  $define_content__template = "<div><!> <!></div>";
export const $template = `<!>${$define_content__template}${$define_content__template}${$define_content__template}<!>`;
export const $walks = /* over(1), beginChild, $define_content__walks, endChild, beginChild, $define_content__walks, endChild, beginChild, $define_content__walks, endChild, over(1) */`b/${$define_content__walks}&/${$define_content__walks}&/${$define_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__$bar_default = /* @__PURE__ */_._const("$bar_default", ($scope, $bar_default) => _._text($scope["#text/0"], $bar_default));
const $define_content__$foo_default = /* @__PURE__ */_._const("$foo_default", ($scope, $foo_default) => $define_content__bar($scope, $foo_default?.bar));
const $define_content__foo = /* @__PURE__ */_._const("foo", ($scope, foo) => {
  _._text($scope["#text/1"], typeof foo);
  $define_content__$foo_default($scope, void 0 !== foo ? foo : {
    bar: 2
  });
});
const $define_content__bar = /* @__PURE__ */_._const("bar", ($scope, bar) => $define_content__$bar_default($scope, void 0 !== bar ? bar : 1));
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $define_content__foo($scope, $temp.foo));
export function $setup($scope) {
  $define_content__foo($scope["#childScope/0"], {
    bar: 0
  });
  $define_content__foo($scope["#childScope/1"], {});
  $define_content__foo($scope["#childScope/2"], void 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);