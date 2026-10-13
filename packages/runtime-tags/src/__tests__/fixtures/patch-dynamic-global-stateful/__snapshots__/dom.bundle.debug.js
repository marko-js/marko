// card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/card.marko_0_$global_brand#2/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
});
function $setup$1($scope) {
	$global_brand($scope);
}
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $on = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "on/2", ($scope) => $dynamicTag($scope, $scope.on ? card_default : null));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$setup__script($scope);
	$on($scope, true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
