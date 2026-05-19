// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
_enable_catch();
const $if_content__a = /* @__PURE__ */ _closure_get("a", ($scope) => _text($scope["#text/0"], $scope._._.a), ($scope) => $scope._._);
const $if_content__setup = ($scope) => {
	$if_content__a($scope);
	$if_content__b($scope);
};
const $if_content__b = /* @__PURE__ */ _closure_get("b", ($scope) => _text($scope["#text/1"], $scope._._.b), ($scope) => $scope._._);
const $try_content__if = /* @__PURE__ */ _if("#text/0", "<div> </div><div> </div>", "D lD l", $if_content__setup);
const $try_content__setup = ($scope) => $try_content__if($scope, true ? 0 : 1);
const $a__OR__b__script = _script("__tests__/template.marko_0_a_b", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, $scope.a + 1);
	$b($scope, $scope.b + 1);
}));
const $a__OR__b = /* @__PURE__ */ _or(4, $a__OR__b__script);
const $a__closure = /* @__PURE__ */ _closure($if_content__a);
const $a = /* @__PURE__ */ _let("a/2", ($scope) => {
	$a__OR__b($scope);
	$a__closure($scope);
});
const $b__closure = /* @__PURE__ */ _closure($if_content__b);
const $b = /* @__PURE__ */ _let("b/3", ($scope) => {
	$a__OR__b($scope);
	$b__closure($scope);
});
const $try = /* @__PURE__ */ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
	$try($scope, {});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
