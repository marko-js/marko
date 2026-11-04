// tags/wrapper.marko
const $catch_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $catch_content__input_fallback$1 = /*@__PURE__*/ _closure_get_patch("c0", 5, ($scope) => $catch_content__dynamicTag$1($scope, $scope._.d), 0, "c4", 0);
const $catch_content$1 = _content$1("c2", "<!><!><!>", "b%", $catch_content__input_fallback$1);

// tags/error-wrapper.marko
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $catch_content__input_fallback = /*@__PURE__*/ _closure_get_patch("b0", 5, ($scope) => $catch_content__dynamicTag($scope, $scope._.d), 0, "b4", 0);
const $catch_content__setup = $catch_content__input_fallback;
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("b2", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);

// template.marko
const $fallback_content2__input_label = /*@__PURE__*/ _closure_get_patch("a3", 9, ($scope) => _text($scope.a, $scope._.h), 0, "a7", 1);
const $fallback_content2__setup = ($scope) => {
	$fallback_content2__input_label($scope);
	$fallback_content2__count($scope);
};
const $fallback_content2__count = /*@__PURE__*/ _closure_get_patch("a4", 10, ($scope) => _text($scope.b, $scope._.i));
const $fallback_content2 = _content$1("a5", "<i><!> <!></i>", "D%c%", $fallback_content2__setup);
const $fallback_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 9, ($scope) => _text($scope.a, $scope._.h), 0, "a7", 0);
const $fallback_content__setup = ($scope) => {
	$fallback_content__input_label($scope);
	$fallback_content__count($scope);
};
const $fallback_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.b, $scope._.i), 0, "a1");
const $fallback_content = _content$1("a2", "<em><!> <!></em>", "D%c%", $fallback_content__setup);
const $count__closure = /*@__PURE__*/ _closure($fallback_content__count, $fallback_content2__count);
const $count = _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
