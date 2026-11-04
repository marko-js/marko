// tags/wrapper.marko
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_fallback = /*@__PURE__*/ _closure_get_patch("c0", 5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "c4", 0);
const $catch_content = _content$1("c2", "<!><!><!>", "b%", $catch_content__input_fallback);

// tags/panel.marko
const $fallback_content__input_a__OR__input_b = /*@__PURE__*/ _or_patch("b2", 1, ($scope) => _text($scope.a, $scope._.e + $scope._.f));
const $fallback_content__input_a = /*@__PURE__*/ _closure_get_patch("b0", 6, $fallback_content__input_a__OR__input_b, 0, "b4", 0);
const $fallback_content__setup = ($scope) => {
	$fallback_content__input_a($scope);
	$fallback_content__input_b($scope);
};
const $fallback_content__input_b = /*@__PURE__*/ _closure_get_patch("b1", 7, $fallback_content__input_a__OR__input_b, 0, "b5", 0);
const $fallback_content = _content$1("b3", "<em> </em>", "D ", $fallback_content__setup);
const $input_b__closure = /*@__PURE__*/ _closure($fallback_content__input_b);
const $input_b = /*@__PURE__*/ _const(5, $input_b__closure);

// template.marko
const $n = _let(8, ($scope) => $input_b($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, $scope.i + "k");
}));
