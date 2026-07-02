// template.marko
const $template = "<ul></ul><button>rev</button>";
const $walks = " b b";
const $for_content__item_a__OR__item_b = /* @__PURE__ */ _or(5, ($scope) => _text($scope["#text/0"], $scope.item_a + $scope.item_b));
const $for_content__item_a = /* @__PURE__ */ _const("item_a", $for_content__item_a__OR__item_b);
const $for_content__item_b = /* @__PURE__ */ _const("item_b", $for_content__item_a__OR__item_b);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_a($scope, $params2[0]?.a);
	$for_content__item_b($scope, $params2[0]?.b);
};
const $for = /* @__PURE__ */ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content__$params);
const $list = /* @__PURE__ */ _let("list/2", ($scope) => $for($scope, [$scope.list]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$list($scope, [...$scope.list].reverse());
}));
function $setup($scope) {
	$list($scope, [{
		a: 1,
		b: 2
	}, {
		a: 3,
		b: 4
	}]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
