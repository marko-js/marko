// template.marko
const $template = "<!----><button> </button>";
const $walks = " b D l";
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#comment/0"], `${_to_text(_global_read($scope.$global, "x"))} ${_to_text($scope.count)}`);
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
