export const $template = "<div><!><!></div>";
export const $walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $key$for$content2 = /* @__PURE__ */_$.value("key", ($scope, key) => _$.data($scope["#text/0"], key));
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $key$for$content2($scope, $params3[0]));
const $for_content2 = /* @__PURE__ */_$.createRenderer("<p> </p>", /* next(1), get */"D ", 0, $params3$for$content);
const $key$for$content = /* @__PURE__ */_$.value("key", ($scope, key) => _$.data($scope["#text/0"], key));
const $text$for$content = /* @__PURE__ */_$.value("text", ($scope, text) => _$.data($scope["#text/1"], text));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $key$for$content($scope, $params2[0]);
  $text$for$content($scope, $params2[1]);
});
const $for_content = /* @__PURE__ */_$.createRenderer("<p><!>: <!></p>", /* next(1), replace, over(2), replace */"D%c%", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopIn("#text/0", $for_content);
const $for2 = /* @__PURE__ */_$.loopIn("#text/1", $for_content2);
export const $input_children = /* @__PURE__ */_$.value("input_children", ($scope, input_children) => {
  $for($scope, [input_children]);
  $for2($scope, [input_children]);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_children($scope, input.children));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);