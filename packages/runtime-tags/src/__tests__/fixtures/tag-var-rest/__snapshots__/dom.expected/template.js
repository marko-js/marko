export const $template = "<div class=obj> </div><div class=partialObj> </div><div class=a> </div><div class=b> </div><div class=a> </div><button>Update</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), next(1), get, out(1), next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD lD lD lD l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $obj = /* @__PURE__ */_._let("obj/6", ($scope, obj) => {
  _._text($scope["#text/0"], JSON.stringify(obj));
  (({
    a,
    ...partialObj
  }) => $partialObj($scope, partialObj))(obj);
  $a($scope, obj.a);
  $partialObj_b($scope, obj.b);
});
const $partialObj = /* @__PURE__ */_._const("partialObj", ($scope, partialObj) => {
  _._text($scope["#text/1"], JSON.stringify(partialObj));
  $partialObj_a($scope, partialObj.a);
});
const $partialObj_a = /* @__PURE__ */_._const("partialObj_a", ($scope, partialObj_a) => _._text($scope["#text/4"], partialObj_a === undefined ? "removed a" : "didn't remove a"));
const $a = /* @__PURE__ */_._const("a", ($scope, a) => _._text($scope["#text/2"], a));
const $partialObj_b = /* @__PURE__ */_._const("partialObj_b", ($scope, partialObj_b) => _._text($scope["#text/3"], partialObj_b));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/5"], "click", function () {
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
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);