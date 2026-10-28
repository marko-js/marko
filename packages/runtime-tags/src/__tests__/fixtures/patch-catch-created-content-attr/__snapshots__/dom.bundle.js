// tags/error-wrapper.marko
const $catch_content__input_fallback = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_closure("b6", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _attr_content($scope, "b", $scope._.d), 0, "b1"), 0));
const $catch_content__setup = $catch_content__input_fallback;
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("b4", "<b> </b><div></div>", "D l ", $catch_content__setup, $catch_content__$params);

// template.marko
const $fallback_content__input_label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_closure("a4", 6, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g), 0, "a1"), 0));
const $fallback_content__setup = ($scope) => {
	$fallback_content__input_label($scope);
	$fallback_content__count($scope);
};
const $fallback_content__count = /*@__PURE__*/ _init_resume("a6", /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.b, $scope._.h)));
const $fallback_content = _content$1("a2", "<i><!> <!></i>", "D%c%", $fallback_content__setup);
const $count__closure = /*@__PURE__*/ _closure($fallback_content__count);
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__closure($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
