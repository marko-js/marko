export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $else_content__clickCount = /* @__PURE__ */_._if_closure("clickCount", "#text/0", 1, ($scope, clickCount) => _._text($scope["#text/0"], clickCount));
const $else_content__setup = $else_content__clickCount;
const $else_content = /* @__PURE__ */_._content_branch("<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace, out(1) */"Db%l", $else_content__setup);
const $if_content__clickCount__script = _._script("__tests__/template.marko_1_clickCount", ($scope, {
  _: {
    clickCount
  }
}) => _._on($scope["#button/0"], "click", function () {
  $clickCount($scope._, ++clickCount);
}));
const $if_content__clickCount = /* @__PURE__ */_._if_closure("clickCount", "#text/0", 0, ($scope, clickCount) => {
  _._text($scope["#text/1"], clickCount);
  $if_content__clickCount__script($scope);
});
const $if_content__setup = $if_content__clickCount;
const $if_content = /* @__PURE__ */_._content_branch("<button> </button>", /* get, next(1), get, out(1) */" D l", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/0", $if_content, $else_content);
const $clickCount = /* @__PURE__ */_._let("clickCount/1", ($scope, clickCount) => {
  $if($scope, clickCount < 3 ? 0 : 1);
  $if_content__clickCount($scope);
  $else_content__clickCount($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);