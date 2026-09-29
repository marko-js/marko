// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $placeholder_content = _content("__tests__/template.marko_3*content", "<em>loading</em>");
const $await_content__input_label__OR__n = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._._.input_label + $scope._._.n)), () => $await_content__input_label, 0);
const $await_content__input_label = /*@__PURE__*/ _closure_get("input_label/9", $await_content__input_label__OR__n, ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:6/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content__n($scope);
};
const $await_content__n = /*@__PURE__*/ _closure_get("n/10", $await_content__input_label__OR__n, ($scope) => $scope._._, "__tests__/template.marko_2_n#0:7/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=done> </div>", "D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise/8", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:5/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $n__closure = /*@__PURE__*/ _closure($await_content__n);
const $n = /*@__PURE__*/ _let("n/7", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label($scope, input.label);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
