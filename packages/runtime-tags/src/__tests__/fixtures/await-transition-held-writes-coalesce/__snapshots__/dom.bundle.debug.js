// template.marko
const $template = "<button>inc</button><b>outside <!></b><div><!></div>";
const $walks = " bDb%lD%l";
const $if_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope, "#text/0", $scope._._.n), ($scope) => $scope._._);
const $if_content__setup = $if_content__n;
const $await_content__if = /*@__PURE__*/ _if("#text/1", "<em>odd <!></em>", "Db%l", $if_content__setup);
const $await_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => {
	_text($scope, "#text/0", $scope._.n);
	$await_content__if($scope, $scope._.n % 2 ? 0 : 1);
});
const $await_content__setup = $await_content__n;
const $await_content__result = ($scope, result) => _text($scope, "#text/2", result);
const $await_content__$params = ($scope, $params2) => $await_content__result($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<span>#<!></span><!><p> </p>", "Db%l%bD l", $await_content__setup);
_enable_transition();
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $n__closure = /*@__PURE__*/ _closure($await_content__n, $if_content__n);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope, "#text/1", $scope.n);
	$await_promise($scope, resolveAfter(`R${$scope.n}`));
	$n__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
