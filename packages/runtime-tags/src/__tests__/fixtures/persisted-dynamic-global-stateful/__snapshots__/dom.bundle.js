// card.marko
const $template = "<em> </em>";
const $walks = "D l";
const $global_brand = /*@__PURE__*/ _global_join("brand", "a0", ($scope, $global_brand) => _text($scope.a, $scope.$.brand));
function $setup($scope) {
	$global_brand($scope, $scope.$.brand);
}
var card_default = /*@__PURE__*/ _template("a", $template, "D l", $setup);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $on = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c ? card_default : null));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$on($scope, !$scope.c);
}));
