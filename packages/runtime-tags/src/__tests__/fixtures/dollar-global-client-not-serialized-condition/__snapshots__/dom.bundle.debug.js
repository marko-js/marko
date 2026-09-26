// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $if = /*@__PURE__*/ _if("#text/0", "hi");
const $y = /*@__PURE__*/ _let("y/2", ($scope) => $if($scope, _global_read($scope.$global, "flag") && $scope.y ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$y($scope, !$scope.y);
}));
function $setup($scope) {
	$y($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
