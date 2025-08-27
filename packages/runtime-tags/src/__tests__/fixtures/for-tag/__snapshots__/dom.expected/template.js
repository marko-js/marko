export const $template = "<!><!><!><!><!><!><!><!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(2) */"b%b%b%b%b%b%b%b%b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $for_content10 = /* @__PURE__ */_$.createRenderer("Hello", /* over(1) */"b");
const $for_content9 = /* @__PURE__ */_$.createRenderer("Hello", /* over(1) */"b");
const $i$for$content6 = /* @__PURE__ */_$.value("i", ($scope, i) => {
  _$.attr($scope["#div/0"], "key", i);
  _$.data($scope["#text/1"], i);
  _$.attr($scope["#div/2"], "key", `other-${i}`);
});
const $params9$for$content = /* @__PURE__ */_$.value("$params9", ($scope, $params9) => $i$for$content6($scope, $params9[0]));
const $for_content8 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get, over(1) */" D lb b", 0, $params9$for$content);
const $i$for$content5 = /* @__PURE__ */_$.value("i", ($scope, i) => {
  _$.attr($scope["#div/0"], "key", i);
  _$.data($scope["#text/1"], i);
  _$.attr($scope["#div/2"], "key", `other-${i}`);
});
const $params8$for$content = /* @__PURE__ */_$.value("$params8", ($scope, $params8) => $i$for$content5($scope, $params8[0]));
const $for_content7 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get, over(1) */" D lb b", 0, $params8$for$content);
const $i$for$content4 = /* @__PURE__ */_$.value("i", ($scope, i) => {
  _$.attr($scope["#div/0"], "key", i);
  _$.data($scope["#text/1"], i);
  _$.attr($scope["#div/2"], "key", `other-${i}`);
});
const $for$for$content = /* @__PURE__ */_$.loopTo("#text/3", $for_content7);
const $setup$for$content = $scope => {
  $for$for$content($scope, [10, 0, 2]);
};
const $params7$for$content = /* @__PURE__ */_$.value("$params7", ($scope, $params7) => $i$for$content4($scope, $params7[0]));
const $for_content6 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div><!><!>", /* get, next(1), get, out(1), over(1), get, over(1), replace, over(2) */" D lb b%c", $setup$for$content, $params7$for$content);
const $key$for$content2 = /* @__PURE__ */_$.value("key", ($scope, key) => {
  _$.attr($scope["#div/0"], "key", key);
  _$.data($scope["#text/1"], key);
  _$.attr($scope["#div/3"], "key", `other-${key}`);
});
const $val$for$content4 = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/2"], val));
const $params6$for$content = /* @__PURE__ */_$.value("$params6", ($scope, $params6) => {
  $key$for$content2($scope, $params6[0]);
  $val$for$content4($scope, $params6[1]);
});
const $for_content5 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get, over(1) */" D%c%lb b", 0, $params6$for$content);
const $i$for$content3 = /* @__PURE__ */_$.value("i", ($scope, i) => {
  _$.attr($scope["#div/0"], "key", i);
  _$.data($scope["#text/1"], i);
  _$.attr($scope["#div/3"], "key", `other-${i}`);
});
const $val$for$content3 = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/2"], val));
const $params5$for$content = /* @__PURE__ */_$.value("$params5", ($scope, $params5) => {
  $val$for$content3($scope, $params5[0]);
  $i$for$content3($scope, $params5[1]);
});
const $for_content4 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get, over(1) */" D%c%lb b", 0, $params5$for$content);
const $i$for$content2 = /* @__PURE__ */_$.value("i", ($scope, i) => _$.data($scope["#text/0"], i));
const $params4$for$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $i$for$content2($scope, $params4[0]));
const $for_content3 = /* @__PURE__ */_$.createRenderer("<div> </div><div></div><div></div>", /* next(1), get, out(1), over(2) */"D lc", 0, $params4$for$content);
const $key$for$content = /* @__PURE__ */_$.value("key", ($scope, key) => _$.data($scope["#text/0"], key));
const $val$for$content2 = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/1"], val));
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => {
  $key$for$content($scope, $params3[0]);
  $val$for$content2($scope, $params3[1]);
});
const $for_content2 = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace, out(1), over(2) */"D%c%lc", 0, $params3$for$content);
const $i$for$content = /* @__PURE__ */_$.value("i", ($scope, i) => _$.data($scope["#text/0"], i));
const $val$for$content = /* @__PURE__ */_$.value("val", ($scope, val) => _$.data($scope["#text/1"], val));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $val$for$content($scope, $params2[0]);
  $i$for$content($scope, $params2[1]);
});
const $for_content = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace, out(1), over(2) */"D%c%lc", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
const $for4 = /* @__PURE__ */_$.loopOf("#text/3", $for_content4);
const $arr = /* @__PURE__ */_$.value("arr", ($scope, arr) => {
  $for($scope, [arr]);
  $for4($scope, [arr]);
});
const $for2 = /* @__PURE__ */_$.loopIn("#text/1", $for_content2);
const $for5 = /* @__PURE__ */_$.loopIn("#text/4", $for_content5);
const $obj = /* @__PURE__ */_$.value("obj", ($scope, obj) => {
  $for2($scope, [obj]);
  $for5($scope, [obj]);
});
const $for3 = /* @__PURE__ */_$.loopTo("#text/2", $for_content3);
const $for6 = /* @__PURE__ */_$.loopTo("#text/5", $for_content6);
const $for7 = /* @__PURE__ */_$.loopTo("#text/6", $for_content8);
const $for8 = /* @__PURE__ */_$.loopTo("#text/7", $for_content9);
const $for9 = /* @__PURE__ */_$.loopTo("#text/8", $for_content10);
export function $setup($scope) {
  $arr($scope, [1, 2, 3]);
  $obj($scope, {
    a: 1,
    b: 1,
    c: 1
  });
  $for3($scope, [10, 0, 2]);
  $for6($scope, [10, 0, 2]);
  $for7($scope, [0, 10, -2]);
  $for8($scope, [10, 0, 1]);
  $for9($scope, [10, 0, 1]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);