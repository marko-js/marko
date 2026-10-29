// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content__n__$global_brand = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_2_n#0:6_$global_brand#0:7", ($scope) => _text($scope["#text/0"], $scope._.n + _global_read($scope.$global, "brand")), "brand");
const $placeholder_content__n = /*@__PURE__*/ _closure_get("n/8", $placeholder_content__n__$global_brand, 0, "__tests__/template.marko_2_n#0:6/subscribe");
const $placeholder_content__setup = $placeholder_content__n;
const $placeholder_content = _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:5/init", /*@__PURE__*/ _closure_get("input_promise/7", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:5/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $n__closure = /*@__PURE__*/ _closure($placeholder_content__n);
const $n = _let("n/6", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$n__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
