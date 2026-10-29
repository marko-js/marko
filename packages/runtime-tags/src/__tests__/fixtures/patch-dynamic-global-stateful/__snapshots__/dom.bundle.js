// card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $setup__$global_brand = /*@__PURE__*/ _fill_global_join("a0", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $setup = $setup__$global_brand;
var card_default = /*@__PURE__*/ _template("a", $template, "D l", $setup);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $on = _let(2, ($scope) => $dynamicTag($scope, $scope.c ? card_default : null));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.c);
}));
