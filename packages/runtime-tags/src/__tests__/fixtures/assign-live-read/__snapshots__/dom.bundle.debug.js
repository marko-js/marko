// template.marko
const $template = "<button> </button><button></button>";
const $walks = " D l b";
const $count__script = _script("__tests__/template.marko_0_count#3", ($scope) => $scope.count);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
const $resetCount2__script = _script("__tests__/template.marko_0_resetCount#4", ($scope) => _on($scope["#button/2"], "click", $scope.resetCount ||= $resetCount($scope)));
const $resetCount2 = /*@__PURE__*/ _const("resetCount", $resetCount2__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$resetCount2($scope, $resetCount($scope));
	$setup__script($scope);
}
const $resetCount = ($scope) => function() {
	if ($scope.count > 0) {
		$count($scope, 0);
	}
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
