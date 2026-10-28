// tags/large-label.marko
const $template$1 = "<strong><!> <!> <!></strong>";
const $walks$1 = "D%c%c%l";
const $input_message$1 = ($scope, input_message) => _text($scope.a, input_message);
const $input_count$1 = ($scope, input_count) => _text($scope.b, input_count);
const $input_label$1 = ($scope, input_label) => _text($scope.c, input_label);
const $input$1 = ($scope, input) => {
	$input_message$1($scope, input.message);
	$input_count$1($scope, input.count);
	$input_label$1($scope, input.label);
};
var large_label_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, 0, $input$1);

// tags/small-label.marko
const $template = "<small><!> <!> <!></small>";
const $walks = "D%c%c%l";
const $input_message = ($scope, input_message) => _text($scope.a, input_message);
const $input_count = ($scope, input_count) => _text($scope.b, input_count);
const $input_label = ($scope, input_label) => _text($scope.c, input_label);
const $input = ($scope, input) => {
	$input_message($scope, input.message);
	$input_count($scope, input.count);
	$input_label($scope, input.label);
};
var small_label_default = /*@__PURE__*/ _template("c", $template, $walks, 0, $input);

// template.marko
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_large__OR__input_label__OR__count__OR__err_message = /*@__PURE__*/ _fill_join("a0", 3, /*@__PURE__*/ _fill_join_subscribers("a10", 6, /*@__PURE__*/ _fill_join_subscribers("a9", 5, /*@__PURE__*/ _or_resume("a14", 4, ($scope) => $catch_content__dynamicTag($scope, $scope._.f ? large_label_default : small_label_default, ($_) => ({
	message: $scope.d,
	count: $scope._.i,
	label: $scope._.g
})), 3), 9, 0), 10, 0));
const $catch_content__input_large = /*@__PURE__*/ _closure_get(9, $catch_content__input_large__OR__input_label__OR__count__OR__err_message, 0, "a1");
const $catch_content__setup = ($scope) => {
	$catch_content__input_large($scope);
	$catch_content__input_label($scope);
	$catch_content__count($scope);
};
const $catch_content__input_label = /*@__PURE__*/ _closure_get(10, $catch_content__input_large__OR__input_label__OR__count__OR__err_message, 0, "a2");
const $catch_content__count = /*@__PURE__*/ _init_resume("a13", /*@__PURE__*/ _closure_get(12, $catch_content__input_large__OR__input_label__OR__count__OR__err_message, 0, "a3"));
const $catch_content__err_message = /*@__PURE__*/ _const(3, $catch_content__input_large__OR__input_label__OR__count__OR__err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a6", "<!><!><!>", "b%", $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($catch_content__count);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
