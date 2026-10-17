// tags/panel.marko
const $catch_content__text = ($scope, text) => _text($scope.b, text);
const $catch_content__input_label__OR__err_message = /*@__PURE__*/ _fill_join_subscribers("b8", 3, /*@__PURE__*/ _shell_or("b2", 6, ($scope) => $catch_content__text($scope, `${$scope._.d}: ${$scope.f}`)), 5, 0);
const $catch_content__input_label = /*@__PURE__*/ _closure_get(5, $catch_content__input_label__OR__err_message, 0, "b4");
const $catch_content__n = /*@__PURE__*/ _fill_let("b3", 7, ($scope) => _text($scope.c, $scope.h));
const $catch_content__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$catch_content__n($scope, +$scope.h + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__setup__script($scope);
	$catch_content__n($scope, 0);
};
const $catch_content__err_message = /*@__PURE__*/ _const(5, $catch_content__input_label__OR__err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("b7", "<button class=inc><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__$params);
const $input_label__closure = /*@__PURE__*/ _closure($catch_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("b8", 3, $input_label__closure);

// template.marko
const $label = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $input_label($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$label($scope, $scope.f + "!");
}));
