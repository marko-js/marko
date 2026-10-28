// tags/one.marko
const $template$1 = "<i>one <!></i>";
const $walks$1 = "Db%l";
const $input_id$1 = ($scope, input_id) => _text($scope.a, input_id);
const $input$1 = ($scope, input) => $input_id$1($scope, input.id);
var one_default = /*@__PURE__*/ _template("b", $template$1, $walks$1, 0, $input$1);

// tags/two.marko
const $template = "<b>two <!></b>";
const $walks = "Db%l";
const $input_id = ($scope, input_id) => _text($scope.a, input_id);
const $input = ($scope, input) => $input_id($scope, input.id);
var two_default = /*@__PURE__*/ _template("c", $template, $walks, 0, $input);

// template.marko
const $try_content__input_id = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a8 a9", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a1"), 2));
const $try_content__setup = $try_content__input_id;
const $placeholder_content__input_id = /*@__PURE__*/ _fill_join_closure("a8 a9", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._), 1);
const $placeholder_content = _content$1("a2", "loading <!>", "b%", $placeholder_content__input_id);
const $wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $wrap_content__input_which__OR__input_id = /*@__PURE__*/ _fill_join_subscribers("a9 | a8", 5, /*@__PURE__*/ _fill_join_subscribers("a10", 4, /*@__PURE__*/ _or_resume("a6", 2, ($scope) => $wrap_content__dynamicTag($scope, $scope._.e ? one_default : two_default, ($_) => ({ id: $scope._.f }))), 6, 0), 7, 0);
const $wrap_content__input_which = /*@__PURE__*/ _closure_get(6, $wrap_content__input_which__OR__input_id, 0, "a4");
const $wrap_content__try = /*@__PURE__*/ _try(1, "<p> </p>", "D ", $try_content__setup, $placeholder_content);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_which($scope);
	$wrap_content__input_id($scope);
	$wrap_content__try($scope);
};
const $wrap_content__input_id = /*@__PURE__*/ _closure_get(7, $wrap_content__input_which__OR__input_id, 0, "a5");
const $wrap_content = _content$1("a7", "<!><!><!><!>", "b%b%", $wrap_content__setup);
