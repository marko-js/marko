const $ChildB_content__walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l",
  $ChildB_content__template = "<div class=b><!> <!></div>",
  $ChildA_content__walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l",
  $ChildA_content__template = "<div class=a><!> <!></div>";
export const $template = `<!>${$ChildA_content__template}${$ChildA_content__template}${$ChildA_content__template}${$ChildB_content__template}${$ChildB_content__template}${$ChildB_content__template}<!>`;
export const $walks = /* over(1), beginChild, $ChildA_content__walks, endChild, beginChild, $ChildA_content__walks, endChild, beginChild, $ChildA_content__walks, endChild, beginChild, $ChildB_content__walks, endChild, beginChild, $ChildB_content__walks, endChild, beginChild, $ChildB_content__walks, endChild, over(1) */`b/${$ChildA_content__walks}&/${$ChildA_content__walks}&/${$ChildA_content__walks}&/${$ChildB_content__walks}&/${$ChildB_content__walks}&/${$ChildB_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $ChildB_content__$pattern = /* @__PURE__ */_._const("$pattern2", ($scope, $pattern2) => $ChildB_content__$bar($scope, $pattern2.bar));
const $ChildB_content__bar = /* @__PURE__ */_._const("bar", ($scope, bar) => _._text($scope["#text/0"], bar));
const $ChildB_content__$bar = /* @__PURE__ */_._const("$bar2", ($scope, $bar2) => $ChildB_content__bar($scope, void 0 !== $bar2 ? $bar2 : 1));
const $ChildB_content__$foo = ($scope, $foo2) => {
  $ChildB_content__$pattern($scope, void 0 !== $foo2 ? $foo2 : {
    bar: 2
  });
};
const $ChildB_content__foo = /* @__PURE__ */_._const("foo", ($scope, foo) => {
  _._text($scope["#text/1"], typeof foo);
  $ChildB_content__$foo($scope, foo);
});
const $ChildB_content__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $ChildB_content__input($scope, $params3[0]));
const $ChildB_content__input = /* @__PURE__ */_._const("input", ($scope, input) => $ChildB_content__foo($scope, input.foo));
const $ChildA_content__$pattern = /* @__PURE__ */_._const("$pattern", ($scope, $pattern) => $ChildA_content__$bar($scope, $pattern.bar));
const $ChildA_content__bar = /* @__PURE__ */_._const("bar", ($scope, bar) => _._text($scope["#text/0"], bar));
const $ChildA_content__$bar = /* @__PURE__ */_._const("$bar", ($scope, $bar) => $ChildA_content__bar($scope, void 0 !== $bar ? $bar : 1));
const $ChildA_content__$foo = ($scope, $foo) => {
  $ChildA_content__$pattern($scope, void 0 !== $foo ? $foo : {
    bar: 2
  });
};
const $ChildA_content__foo = /* @__PURE__ */_._const("foo", ($scope, foo) => {
  _._text($scope["#text/1"], typeof foo);
  $ChildA_content__$foo($scope, foo);
});
const $ChildA_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $ChildA_content__$temp($scope, $params2?.[0]));
const $ChildA_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $ChildA_content__foo($scope, $temp.foo));
export function $setup($scope) {
  $ChildA_content__foo($scope["#childScope/0"], {
    bar: 0
  });
  $ChildA_content__foo($scope["#childScope/1"], {});
  $ChildA_content__foo($scope["#childScope/2"], void 0);
  $ChildB_content__foo($scope["#childScope/3"], {
    bar: 0
  });
  $ChildB_content__foo($scope["#childScope/4"], {});
  $ChildB_content__foo($scope["#childScope/5"], void 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);