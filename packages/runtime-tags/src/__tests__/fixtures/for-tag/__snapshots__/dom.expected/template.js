export const $template = "<!><!><!><div>to 3: <!></div><div>until 3: <!></div><div>from 1 to 3: <!></div><div>from 1 until 3: <!></div><div>from 1 to 5 step 2: <!></div><div>from 1 until 5 step 2: <!></div><div>from 4 to 2 step -0.6: <!></div><div>from 4 until 2 step -0.6: <!></div>";
export const $walks = /* over(1), replace, over(1), replace, over(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1) */"b%b%bDb%lDb%lDb%lDb%lDb%lDb%lDb%lDb%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content10__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content9__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content8__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content7__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content6__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content5__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content4__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content3__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content2__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content2__val = /* @__PURE__ */_._const("val", $scope => _._text($scope["#text/1"], $scope.val));
const $for_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $for_content2__val($scope, $scope.$params3[1]));
const $for_content__setup = $scope => {
  _._text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content__val = /* @__PURE__ */_._const("val", $scope => _._text($scope["#text/1"], $scope.val));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__val($scope, $scope.$params2[0]));
const $for = /* @__PURE__ */_._for_of("#text/0", "<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace, out(1), over(2) */"D%c%lc", $for_content__setup, $for_content__$params);
const $arr = /* @__PURE__ */_._const("arr", $scope => $for($scope, [$scope.arr]));
const $for2 = /* @__PURE__ */_._for_in("#text/1", "<div><!>: <!></div><div></div><div></div>", /* next(1), replace, over(2), replace, out(1), over(2) */"D%c%lc", $for_content2__setup, $for_content2__$params);
const $obj = /* @__PURE__ */_._const("obj", $scope => $for2($scope, [$scope.obj]));
const $for3 = /* @__PURE__ */_._for_to("#text/2", " ", /* get, over(1) */" b", $for_content3__setup);
const $for4 = /* @__PURE__ */_._for_until("#text/3", " ", /* get, over(1) */" b", $for_content4__setup);
const $for5 = /* @__PURE__ */_._for_to("#text/4", " ", /* get, over(1) */" b", $for_content5__setup);
const $for6 = /* @__PURE__ */_._for_until("#text/5", " ", /* get, over(1) */" b", $for_content6__setup);
const $for7 = /* @__PURE__ */_._for_to("#text/6", " ", /* get, over(1) */" b", $for_content7__setup);
const $for8 = /* @__PURE__ */_._for_until("#text/7", " ", /* get, over(1) */" b", $for_content8__setup);
const $for9 = /* @__PURE__ */_._for_to("#text/8", "<!> ", /* replace, over(2) */"%c", $for_content9__setup);
const $for10 = /* @__PURE__ */_._for_until("#text/9", "<!> ", /* replace, over(2) */"%c", $for_content10__setup);
export function $setup($scope) {
  $arr($scope, [1, 2, 3]);
  $obj($scope, {
    a: 1,
    b: 1,
    c: 1
  });
  $for3($scope, [3, 0, 1]);
  $for4($scope, [3, 0, 1]);
  $for5($scope, [3, 1, 1]);
  $for6($scope, [3, 1, 1]);
  $for7($scope, [5, 1, 2]);
  $for8($scope, [5, 1, 2]);
  $for9($scope, [2, 4, -.6]);
  $for10($scope, [2, 4, -.6]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);