export const $template = "<div class=obj> </div><div class=partialObj> </div><div class=a> </div><div class=b> </div><div class=a> </div><button>Update</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), next(1), get, out(1), next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD lD lD lD l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $obj = /* @__PURE__ */_$.state("obj/6", ($scope, obj) => {
  _$.data($scope["#text/0"], JSON.stringify(obj));
  (({
    a,
    ...partialObj
  }) => $partialObj($scope, partialObj))(obj);
  $a($scope, obj.a);
  $partialObj_b($scope, obj.b);
});
const $partialObj = /* @__PURE__ */_$.value("partialObj", ($scope, partialObj) => {
  _$.data($scope["#text/1"], JSON.stringify(partialObj));
  $partialObj_a($scope, partialObj.a);
});
const $partialObj_a = /* @__PURE__ */_$.value("partialObj_a", ($scope, partialObj_a) => _$.data($scope["#text/4"], partialObj_a === undefined ? "removed a" : "didn't remove a"));
const $a = /* @__PURE__ */_$.value("a", ($scope, a) => _$.data($scope["#text/2"], a));
const $partialObj_b = /* @__PURE__ */_$.value("partialObj_b", ($scope, partialObj_b) => _$.data($scope["#text/3"], partialObj_b));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/5"], "click", function () {
  $obj($scope, {
    a: 4,
    b: 5,
    d: 6
  });
}));
export function $setup($scope) {
  $obj($scope, {
    a: 1,
    b: 2,
    c: 3
  });
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);