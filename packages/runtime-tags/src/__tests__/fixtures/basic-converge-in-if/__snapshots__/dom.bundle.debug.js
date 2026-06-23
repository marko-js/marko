// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__a__OR__b = /* @__PURE__ */ _or(1, ($scope) => _text($scope["#text/0"], $scope._.a + $scope._.b));
const $if_content__a = /* @__PURE__ */ _if_closure("#text/0", 0, $if_content__a__OR__b);
const $if_content__setup = ($scope) => {
	$if_content__a._($scope);
	$if_content__b._($scope);
};
const $if_content__b = /* @__PURE__ */ _if_closure("#text/0", 0, $if_content__a__OR__b);
const $a = /* @__PURE__ */ _let("a/1");
const $b = /* @__PURE__ */ _let("b/2");
const $if = /* @__PURE__ */ _if("#text/0", " ", " b", $if_content__setup);
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
	$if($scope, true ? 0 : 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
