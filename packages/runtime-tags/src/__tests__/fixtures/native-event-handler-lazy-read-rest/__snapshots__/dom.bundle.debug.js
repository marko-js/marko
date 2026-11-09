// template.marko
const $template = "<button class=bump>bump</button><button class=show>show</button><button class=both>both</button><div class=a> </div><div class=log> </div>";
const $walks = " b b bD lD l";
const $state = /*@__PURE__*/ _let("state/5", ($scope) => {
	$rest($scope, (({ a, ...rest }) => rest)($scope.state));
	$state_a($scope, $scope.state.a);
});
const $rest = /*@__PURE__*/ _const("rest");
const $state_a = /*@__PURE__*/ _const("state_a", ($scope) => $a($scope, $scope.state_a));
const $a = ($scope) => _text($scope["#text/3"], $scope.state_a);
const $log = /*@__PURE__*/ _let("log/8", ($scope) => _text($scope["#text/4"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$state($scope, {
			a: $scope.state.a + 1,
			b: $scope.state.b + 1
		});
	});
	_on($scope["#button/1"], "click", function() {
		$log($scope, JSON.stringify($scope.rest));
	});
	_on($scope["#button/2"], "click", function() {
		$log($scope, `${JSON.stringify($scope.state)}:${$scope.rest.a}:${JSON.stringify($scope.rest)}`);
	});
});
function $setup($scope) {
	$state($scope, {
		a: 1,
		b: 2
	});
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
