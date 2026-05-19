// template.marko
const $template = "<button> </button><button></button>";
const $walks = " D l b";
const $resetCount2__script = _script("__tests__/template.marko_0_resetCount", ($scope) => _on($scope["#button/2"], "click", $scope.resetCount));
const $resetCount2 = /* @__PURE__ */ _const("resetCount", $resetCount2__script);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
		$count($scope, $scope.count + 1);
	});
	$scope.count;
});
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$resetCount2($scope, $resetCount($scope));
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
function $resetCount($scope) {
	return function() {
		if ($scope.count > 0) {
			$count($scope, 0);
		}
	};
}
_resume("__tests__/template.marko_0/resetCount", $resetCount);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
