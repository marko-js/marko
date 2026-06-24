// template.marko
const $template = "<button>toggle</button><div>foo</div><div>bar</div><div>baz</div>";
const $walks = " b b b b";
const $sometimesBar = ($scope, sometimesBar) => _attr($scope["#div/2"], "id", sometimesBar);
const $bar__OR__baz__script = _script("__tests__/template.marko_0_bar_baz", ($scope) => _on($scope["#button/0"], "click", function() {
	$bar($scope, $scope.bar ? null : "bar");
	$baz($scope, $scope.baz ? null : "baz");
}));
const $bar__OR__baz = /*@__PURE__*/ _or(6, $bar__OR__baz__script);
const $bar = /*@__PURE__*/ _let("bar/4", ($scope) => {
	$sometimesBar($scope, $scope.bar || _id($scope));
	$bar__OR__baz($scope);
});
const $sometimesBaz = ($scope, sometimesBaz) => _attr($scope["#div/3"], "id", sometimesBaz);
const $baz = /*@__PURE__*/ _let("baz/5", ($scope) => {
	$sometimesBaz($scope, $scope.baz || _id($scope));
	$bar__OR__baz($scope);
});
const $alwaysFoo = ($scope, alwaysFoo) => _attr($scope["#div/1"], "id", alwaysFoo);
function $setup($scope) {
	$bar($scope, undefined);
	$baz($scope, "baz");
	$alwaysFoo($scope, "foo" || _id($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
