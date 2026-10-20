// tags/wrapper.marko
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_fallback = /*@__PURE__*/ _fill_join_closure("c5", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "c1"), 0);
const $catch_content = _content$1("c4", "<!><!><!>", "b%", $catch_content__input_fallback);

// tags/panel.marko
const $fallback_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("b5", 5, /*@__PURE__*/ _fill_join_subscribers("b4", 4, /*@__PURE__*/ _shell_or("b3", 1, ($scope) => _text($scope.a, $scope._.e + $scope._.f)), 6, 0), 7, 0);
const $fallback_content__input_a = _closure_resume("b1", /*@__PURE__*/ _closure_get(6, $fallback_content__input_a__OR__input_b));
const $fallback_content__setup = ($scope) => {
	$fallback_content__input_a($scope);
	$fallback_content__input_b($scope);
};
const $fallback_content__input_b = _closure_resume("b2", /*@__PURE__*/ _closure_get(7, $fallback_content__input_a__OR__input_b));
const $fallback_content = _content$1("b0", "<em> </em>", "D ", $fallback_content__setup);
const $input_b__closure = /*@__PURE__*/ _closure($fallback_content__input_b);
const $input_b = /*@__PURE__*/ _const(5, $input_b__closure);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => $input_b($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, $scope.i + "k");
}));
