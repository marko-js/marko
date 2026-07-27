// template.marko
const $template = "<button id=or>or</button><button id=and>and</button><button id=nullish>nullish</button><div>value=<!> changes=<!></div>";
const $walks = " b b bDb%c%l";
const $x = /*@__PURE__*/ _let_change("x/8");
const $changes__OR__value = /*@__PURE__*/ _or(7, ($scope) => $x($scope, $scope.value, $valueChange($scope)));
const $changes = /*@__PURE__*/ _let("changes/5", ($scope) => {
	_text($scope["#text/4"], $scope.changes);
	$changes__OR__value($scope);
});
const $value = /*@__PURE__*/ _let("value/6", ($scope) => {
	_text($scope["#text/3"], $scope.value);
	$changes__OR__value($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.x || $x($scope, 5);
	});
	_on($scope["#button/1"], "click", function() {
		$scope.x && $x($scope, 6);
	});
	_on($scope["#button/2"], "click", function() {
		$scope.x ?? $x($scope, 7);
	});
});
function $setup($scope) {
	$changes($scope, 0);
	$value($scope, 1);
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
		$changes($scope, $scope.changes + 1);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
