// template.marko
const $template = "<button id=post>post</button><button id=pre>pre</button><button id=dec>dec</button><div><!>:<!></div>";
const $walks = " b b bD%c%l";
const $x = /*@__PURE__*/ _let("x/5", ($scope) => _text($scope, "#text/3", $scope.x));
const $seen = /*@__PURE__*/ _let("seen/6", ($scope) => _text($scope, "#text/4", $scope.seen));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$seen($scope, String($x($scope, +$scope.x + 1) - 1));
	});
	_on($scope["#button/1"], "click", function() {
		$seen($scope, String($x($scope, +$scope.x + 1)));
	});
	_on($scope["#button/2"], "click", function() {
		$seen($scope, String($x($scope, +$scope.x - 1) + 1));
	});
});
function $setup($scope) {
	$x($scope, "5");
	$seen($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
