// template.marko
const $template = "<button></button><!><!>";
const $walks = " b%c";
const $placeholder_content = _content("__tests__/template.marko_3*content", "loading");
const $await_content__local = /*@__PURE__*/ _let("local/3", ($scope) => _text($scope["#text/1"], $scope.local));
const $await_content__n__OR__m = /*@__PURE__*/ _or(2, ($scope) => _text($scope["#text/0"], $scope._._.n + $scope._._.m));
const $await_content__n__script = _script("__tests__/template.marko_2_n#2", ($scope) => console.log("e" + $scope._._.n));
const $await_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => {
	$await_content__local($scope, $scope._._.n);
	$await_content__n__OR__m($scope);
	$await_content__n__script($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_2_n#2/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__n($scope);
	$await_content__m($scope);
};
const $await_content__m = /*@__PURE__*/ _closure_get("m", $await_content__n__OR__m, ($scope) => $scope._._, "__tests__/template.marko_2_m#3/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><span> </span>", "D lD ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $n__closure = /*@__PURE__*/ _closure($await_content__n);
const $n = /*@__PURE__*/ _let("n/2", $n__closure);
const $m__closure = /*@__PURE__*/ _closure($await_content__m);
const $m = /*@__PURE__*/ _let("m/3", $m__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$m($scope, +$scope.m + 1);
	});
	$n($scope, 5);
});
function $setup($scope) {
	$n($scope, 1);
	$m($scope, 2);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
