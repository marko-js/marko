// template.marko
const $template = "<template><span>static</span></template><button> </button>";
const $walks = " b D l";
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_attr_class($scope["#template/0"], `c${$scope.count}`);
	_text($scope["#text/2"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
