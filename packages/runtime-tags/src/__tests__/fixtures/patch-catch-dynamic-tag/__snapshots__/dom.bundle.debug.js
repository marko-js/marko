// tags/large-label.marko
const $template$2 = "<strong><!> <!> <!></strong>";
const $walks$2 = "D%c%c%l";
const $setup$2 = ($_) => {};
const $input_message$1 = ($scope, input_message) => _text($scope["#text/0"], input_message);
const $input_count$1 = ($scope, input_count) => _text($scope["#text/1"], input_count);
const $input_label$2 = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input$2 = ($scope, input) => {
	$input_message$1($scope, input.message);
	$input_count$1($scope, input.count);
	$input_label$2($scope, input.label);
};
var large_label_default = /*@__PURE__*/ _template("__tests__/tags/large-label.marko", $template$2, $walks$2, 0, $input$2);

// tags/small-label.marko
const $template$1 = "<small><!> <!> <!></small>";
const $walks$1 = "D%c%c%l";
const $setup$1 = ($_) => {};
const $input_message = ($scope, input_message) => _text($scope["#text/0"], input_message);
const $input_count = ($scope, input_count) => _text($scope["#text/1"], input_count);
const $input_label$1 = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input$1 = ($scope, input) => {
	$input_message($scope, input.message);
	$input_count($scope, input.count);
	$input_label$1($scope, input.label);
};
var small_label_default = /*@__PURE__*/ _template("__tests__/tags/small-label.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_error#0:7/init", /*@__PURE__*/ _closure_get("input_error/11", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_2_input_error#0:7/subscribe"));
const $try_content__setup = $try_content__input_error;
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $catch_content__input_large__OR__input_label__OR__count__OR__err_message = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "err_message", /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_large", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_large#0:5_input_label#0:6_count#0:8_err_message#3/init", 4, ($scope) => $catch_content__dynamicTag($scope, $scope._.input_large ? large_label_default : small_label_default, ($_) => ({
	message: $scope.err_message,
	count: $scope._.count,
	label: $scope._.input_label
})), 3), "input_large/9", 0), "input_label/10", 0));
const $catch_content__input_large = /*@__PURE__*/ _closure_get("input_large/9", $catch_content__input_large__OR__input_label__OR__count__OR__err_message, 0, "__tests__/template.marko_1_input_large#0:5/subscribe");
const $catch_content__setup = ($scope) => {
	$catch_content__input_large($scope);
	$catch_content__input_label($scope);
	$catch_content__count($scope);
};
const $catch_content__input_label = /*@__PURE__*/ _closure_get("input_label/10", $catch_content__input_large__OR__input_label__OR__count__OR__err_message, 0, "__tests__/template.marko_1_input_label#0:6/subscribe");
const $catch_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:8/init", /*@__PURE__*/ _closure_get("count/12", $catch_content__input_large__OR__input_label__OR__count__OR__err_message, 0, "__tests__/template.marko_1_count#0:8/subscribe"));
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__input_large__OR__input_label__OR__count__OR__err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = _let("count/8", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_large($scope, input.large);
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_large__closure = /*@__PURE__*/ _closure($catch_content__input_large);
const $input_large = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_large", $input_large__closure);
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
