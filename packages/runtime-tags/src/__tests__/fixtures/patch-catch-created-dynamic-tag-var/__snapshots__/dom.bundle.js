// tags/huge-label.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $input_label$1 = /*@__PURE__*/ _const(3, ($scope) => {
	_return($scope, $scope.d + "!");
	_text($scope.a, $scope.d);
});
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var huge_label_default = /*@__PURE__*/ _template("b", $template$1, "D l", 0, $input$1);

// tags/tiny-label.marko
const $template = "<b> </b>";
const $walks = "D l";
const $input_label = /*@__PURE__*/ _const(3, ($scope) => {
	_return($scope, $scope.d + "?");
	_text($scope.a, $scope.d);
});
const $input = ($scope, input) => $input_label($scope, input.label);
var tiny_label_default = /*@__PURE__*/ _template("c", $template, "D l", 0, $input);

// template.marko
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1, 0, ($_) => $catch_content__v);
const $catch_content__input_big__OR__input_label = /*@__PURE__*/ _fill_join_subscribers("a9", 4, /*@__PURE__*/ _fill_join_subscribers("a8", 3, /*@__PURE__*/ _or_resume("a3", 4, ($scope) => $catch_content__dynamicTag($scope, $scope._.d ? huge_label_default : tiny_label_default, ($_) => ({ label: $scope._.e }))), 6, 0), 7, 0);
const $catch_content__input_big = /*@__PURE__*/ _closure_get(6, $catch_content__input_big__OR__input_label, 0, "a1");
const $catch_content__setup = ($scope) => {
	$catch_content__input_big($scope);
	$catch_content__input_label($scope);
};
const $catch_content__input_label = /*@__PURE__*/ _closure_get(7, $catch_content__input_big__OR__input_label, 0, "a2");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__v = _fill_var_resume("a0", ($scope, v) => _text($scope.d, v));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a6", "<b> </b><!><i> </i>", "D l1bD ", $catch_content__setup, $catch_content__$params);
