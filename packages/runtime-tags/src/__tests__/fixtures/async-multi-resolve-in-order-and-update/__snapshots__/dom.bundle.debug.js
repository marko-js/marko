// template.marko
const $template = "<button>increment</button><p>1 * <!> = <!></p><p>2 * <!> = <!></p><p>3 * <!> = <!></p><p>4 * <!> = <!></p><p>5 * <!> = <!></p>";
const $walks = " bDb%c%lDb%c%lDb%c%lDb%c%lDb%c%l";
const multiply = (multiplier, n) => resolveAfter(multiplier * n);
const $await_content5__$params = ($scope, $params6) => _text($scope["#text/0"], $params6[0]);
const $await_content4__$params = ($scope, $params5) => _text($scope["#text/0"], $params5[0]);
const $await_content3__$params = ($scope, $params4) => _text($scope["#text/0"], $params4[0]);
const $await_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $await_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/4", " ", " ");
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/4", $await_content2__$params);
const $await_content3 = /*@__PURE__*/ _await_content("#text/6", " ", " ");
const $await_promise3 = /*@__PURE__*/ _await_promise("#text/6", $await_content3__$params);
const $await_content4 = /*@__PURE__*/ _await_content("#text/8", " ", " ");
const $await_promise4 = /*@__PURE__*/ _await_promise("#text/8", $await_content4__$params);
const $await_content5 = /*@__PURE__*/ _await_content("#text/10", " ", " ");
const $await_promise5 = /*@__PURE__*/ _await_promise("#text/10", $await_content5__$params);
const $n = /*@__PURE__*/ _let("n/11", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_text($scope["#text/3"], $scope.n);
	_text($scope["#text/5"], $scope.n);
	_text($scope["#text/7"], $scope.n);
	_text($scope["#text/9"], $scope.n);
	$await_promise($scope, multiply(1, $scope.n));
	$await_promise2($scope, multiply(2, $scope.n));
	$await_promise3($scope, multiply(3, $scope.n));
	$await_promise4($scope, multiply(4, $scope.n));
	$await_promise5($scope, multiply(5, $scope.n));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$await_content3($scope);
	$await_content4($scope);
	$await_content5($scope);
	$n($scope, 2);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
