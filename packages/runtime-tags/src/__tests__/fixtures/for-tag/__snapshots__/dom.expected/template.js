export const $template = "<!><!><!><!><!><!><!><!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(2) */"b%b%b%b%b%b%b%b%b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content10 = /* @__PURE__ */_._content_branch("Hello", /* over(1) */"b");
const $for_content9 = /* @__PURE__ */_._content_branch("Hello", /* over(1) */"b");
const $for_content8__i = /* @__PURE__ */_._const("i", ($scope, i) => {
  _._attr($scope["#div/0"], "key", i);
  _._text($scope["#text/1"], i);
  _._attr($scope["#div/2"], "key", `other-${i}`);
});
const $for_content8__$params = /* @__PURE__ */_._const("$params9", ($scope, $params9) => $for_content8__i($scope, $params9[0]));
const $for_content8 = /* @__PURE__ */_._content_branch("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get, over(1) */" D lb b", 0, $for_content8__$params);
const $for_content7__i = /* @__PURE__ */_._const("i", ($scope, i) => {
  _._attr($scope["#div/0"], "key", i);
  _._text($scope["#text/1"], i);
  _._attr($scope["#div/2"], "key", `other-${i}`);
});
const $for_content7__$params = /* @__PURE__ */_._const("$params8", ($scope, $params8) => $for_content7__i($scope, $params8[0]));
const $for_content7 = /* @__PURE__ */_._content_branch("<div> </div><div></div><div></div>", /* get, next(1), get, out(1), over(1), get, over(1) */" D lb b", 0, $for_content7__$params);
const $for_content6__i = /* @__PURE__ */_._const("i", ($scope, i) => {
  _._attr($scope["#div/0"], "key", i);
  _._text($scope["#text/1"], i);
  _._attr($scope["#div/2"], "key", `other-${i}`);
});
const $for_content6__for = /* @__PURE__ */_._for_to("#text/3", $for_content7);
const $for_content6__setup = $scope => {
  $for_content6__for($scope, [10, 0, 2]);
};
const $for_content6__$params = /* @__PURE__ */_._const("$params7", ($scope, $params7) => $for_content6__i($scope, $params7[0]));
const $for_content6 = /* @__PURE__ */_._content_branch("<div> </div><div></div><div></div><!><!>", /* get, next(1), get, out(1), over(1), get, over(1), replace, over(2) */" D lb b%c", $for_content6__setup, $for_content6__$params);
const $for_content5__key = /* @__PURE__ */_._const("key", ($scope, key) => {
  _._attr($scope["#div/0"], "key", key);
  _._text($scope["#text/1"], key);
  _._attr($scope["#div/3"], "key", `other-${key}`);
});
const $for_content5__val = /* @__PURE__ */_._const("val", ($scope, val) => _._text($scope["#text/2"], val));
const $for_content5__$params = /* @__PURE__ */_._const("$params6", ($scope, $params6) => {
  $for_content5__key($scope, $params6[0]);
  $for_content5__val($scope, $params6[1]);
});
const $for_content5 = /* @__PURE__ */_._content_branch("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get, over(1) */" D%c%lb b", 0, $for_content5__$params);
const $for_content4__i = /* @__PURE__ */_._const("i", ($scope, i) => {
  _._attr($scope["#div/0"], "key", i);
  _._text($scope["#text/1"], i);
  _._attr($scope["#div/3"], "key", `other-${i}`);
});
const $for_content4__val = /* @__PURE__ */_._const("val", ($scope, val) => _._text($scope["#text/2"], val));
const $for_content4__$params = /* @__PURE__ */_._const("$params5", ($scope, $params5) => {
  $for_content4__val($scope, $params5[0]);
  $for_content4__i($scope, $params5[1]);
});
const $for_content4 = /* @__PURE__ */_._content_branch("<div><!>: <!></div><div></div><div></div>", /* get, next(1), replace, over(2), replace, out(1), over(1), get, over(1) */" D%c%lb b", 0, $for_content4__$params);
const $for_content3__i = /* @__PURE__ */_._const("i", ($scope, i) => _._text($scope["#text/0"], i));
const $for_content3__$params = /* @__PURE__ */_._const("$params4", ($scope, $params4) => $for_content3__i($scope, $params4[0]));
const $for_content3 = /* @__PURE__ */_._content_branch("<div> </div><div></div><div></div>", /* next(1), get, out(1), over(2) */"D lc", 0, $for_content3__$params);
const $for_content2__key = /* @__PURE__ */_._const("key", ($scope, key) => _._text($scope["#text/0"], key));
const $for_content2__val = /* @__PURE__ */_._const("val", ($scope, val) => _._text($scope["#text/1"], val));
const $for_content2__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => {
  $for_content2__key($scope, $params3[0]);
  $for_content2__val($scope, $params3[1]);
});
const $for_content2 = /* @__PURE__ */_._content_branch("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace, out(1), over(2) */"D%c%lc", 0, $for_content2__$params);
const $for_content__i = /* @__PURE__ */_._const("i", ($scope, i) => _._text($scope["#text/0"], i));
const $for_content__val = /* @__PURE__ */_._const("val", ($scope, val) => _._text($scope["#text/1"], val));
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => {
  $for_content__val($scope, $params2[0]);
  $for_content__i($scope, $params2[1]);
});
const $for_content = /* @__PURE__ */_._content_branch("<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace, out(1), over(2) */"D%c%lc", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
const $for4 = /* @__PURE__ */_._for_of("#text/3", $for_content4);
const $arr = /* @__PURE__ */_._const("arr", ($scope, arr) => {
  $for($scope, [arr]);
  $for4($scope, [arr]);
});
const $for2 = /* @__PURE__ */_._for_in("#text/1", $for_content2);
const $for5 = /* @__PURE__ */_._for_in("#text/4", $for_content5);
const $obj = /* @__PURE__ */_._const("obj", ($scope, obj) => {
  $for2($scope, [obj]);
  $for5($scope, [obj]);
});
const $for3 = /* @__PURE__ */_._for_to("#text/2", $for_content3);
const $for6 = /* @__PURE__ */_._for_to("#text/5", $for_content6);
const $for7 = /* @__PURE__ */_._for_to("#text/6", $for_content8);
const $for8 = /* @__PURE__ */_._for_to("#text/7", $for_content9);
const $for9 = /* @__PURE__ */_._for_to("#text/8", $for_content10);
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
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);