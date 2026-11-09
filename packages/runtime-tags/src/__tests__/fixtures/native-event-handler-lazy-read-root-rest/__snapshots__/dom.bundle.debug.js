// template.marko
const $template = "<button class=bump>bump</button><button class=show>show</button><div class=log> </div>";
const $walks = " b bD l";
const $state = /*@__PURE__*/ _let("state/3", ($scope) => $rest($scope, (({ a, ...rest }) => rest)($scope.state)));
const $rest = /*@__PURE__*/ _const("rest", ($scope) => $rest_a($scope, $scope.rest.a));
const $rest_a = /*@__PURE__*/ _const("rest_a");
const $log = /*@__PURE__*/ _let("log/6", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$state($scope, {
			...$scope.state,
			a: $scope.state.a + 1,
			b: $scope.state.b + 1
		});
	});
	_on($scope["#button/1"], "click", function() {
		$log($scope, `${$scope.log}[${$scope.state.a}:${$scope.rest_a}:${$scope.state.b}]`);
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
