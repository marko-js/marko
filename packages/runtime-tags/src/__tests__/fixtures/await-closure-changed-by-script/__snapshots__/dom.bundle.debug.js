// tags/counter.marko
const $template$1 = "";
const $walks$1 = "";
const $count = /*@__PURE__*/ _let("count/0", ($scope) => _return($scope, $scope.count));
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => $count($scope, 5));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script$1($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button></button><!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b1b b%c`)("");
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "loading");
const $await_content__local = /*@__PURE__*/ _let("local/5", ($scope) => _text($scope["#text/1"], $scope.local));
const $await_content__n__OR__m = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope._._.n + $scope._._.m));
const $await_content__n__script = _script("__tests__/template.marko_2_n#0:9", ($scope) => console.log("e" + $scope._._.n));
const $await_content__n = /*@__PURE__*/ _closure_get("n/13", ($scope) => {
	$await_content__local($scope, $scope._._.n);
	$await_content__n__OR__m($scope);
	$await_content__n__script($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_2_n#0:9/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__n($scope);
	$await_content__m($scope);
	$await_content__known($scope);
	$await_content__dynamic($scope);
};
const $await_content__m = /*@__PURE__*/ _closure_get("m/14", $await_content__n__OR__m, ($scope) => $scope._._, "__tests__/template.marko_2_m#0:10/subscribe");
const $await_content__known = /*@__PURE__*/ _closure_get("known/15", ($scope) => _text($scope["#text/2"], $scope._._.known), ($scope) => $scope._._, "__tests__/template.marko_2_known#0:11/subscribe");
const $await_content__dynamic = /*@__PURE__*/ _closure_get("dynamic/16", ($scope) => _text($scope["#text/3"], $scope._._.dynamic), ($scope) => $scope._._, "__tests__/template.marko_2_dynamic#0:12/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><span> </span><b><!> <!></b>", "D lD lD%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $n__closure = /*@__PURE__*/ _closure($await_content__n);
const $n = /*@__PURE__*/ _let("n/9", $n__closure);
const $m__closure = /*@__PURE__*/ _closure($await_content__m);
const $m = /*@__PURE__*/ _let("m/10", $m__closure);
const $try = /*@__PURE__*/ _try("#text/5", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/4"], "click", function() {
		$m($scope, +$scope.m + 1);
	});
	$n($scope, 5);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $known);
	$n($scope, 1);
	$m($scope, 2);
	$try($scope);
	$setup__script($scope);
}
const $known__closure = /*@__PURE__*/ _closure($await_content__known);
const $known = _var_resume("__tests__/template.marko_0_known#11/var", /*@__PURE__*/ _const("known", $known__closure));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", 0, ($_) => $dynamic);
const $dynamic__closure = /*@__PURE__*/ _closure($await_content__dynamic);
const $dynamic = _var_resume("__tests__/template.marko_0_dynamic#12/var", /*@__PURE__*/ _const("dynamic", $dynamic__closure));
const $input_show = ($scope, input_show) => $dynamicTag($scope, input_show && counter_default);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
