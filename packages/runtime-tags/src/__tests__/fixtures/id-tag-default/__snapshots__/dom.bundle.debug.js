// template.marko
const $template = "<button>toggle</button><div>foo</div><div>bar</div><div>baz</div>";
const $walks = " b b b b";
const $sometimesBar = ($scope, sometimesBar) => _attr($scope["#div/2"], "id", sometimesBar);
const $bar = /* @__PURE__ */ _let("bar/4", ($scope) => $sometimesBar($scope, $scope.bar || _id($scope)));
const $sometimesBaz = ($scope, sometimesBaz) => _attr($scope["#div/3"], "id", sometimesBaz);
const $baz = /* @__PURE__ */ _let("baz/5", ($scope) => $sometimesBaz($scope, $scope.baz || _id($scope)));
const $alwaysFoo = ($scope, alwaysFoo) => _attr($scope["#div/1"], "id", alwaysFoo);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$bar($scope, $scope.bar ? null : "bar");
	$baz($scope, $scope.baz ? null : "baz");
}));
function $setup($scope) {
	$bar($scope, undefined);
	$baz($scope, "baz");
	$alwaysFoo($scope, "foo" || _id($scope));
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
