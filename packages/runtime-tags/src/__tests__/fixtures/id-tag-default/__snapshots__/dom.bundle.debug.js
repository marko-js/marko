// template.marko
const $template = "<button>toggle</button><div>foo</div><div>bar</div><div>baz</div>";
const $walks = " b b b b";
const $bar = /*@__PURE__*/ _let("bar/4", ($scope) => _attr($scope["#div/2"], "id", $scope.bar || _id($scope, "IdFallback:sometimesBar")));
const $baz = /*@__PURE__*/ _let("baz/5", ($scope) => _attr($scope["#div/3"], "id", $scope.baz || _id($scope, "IdFallback:sometimesBaz")));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$bar($scope, $scope.bar ? null : "bar");
	$baz($scope, $scope.baz ? null : "baz");
}));
function $setup($scope) {
	$bar($scope);
	$baz($scope, "baz");
	_attr($scope["#div/1"], "id", "foo" || _id($scope));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
