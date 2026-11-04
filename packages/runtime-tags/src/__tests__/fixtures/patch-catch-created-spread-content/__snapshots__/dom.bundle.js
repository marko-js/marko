// tags/error-wrapper.marko
const $catch_content__attrs__script = _script("b0", ($scope) => _attrs_script($scope, "b"));
const $catch_content__attrs = /*@__PURE__*/ _const(5, ($scope) => {
	$catch_content__attrs__script($scope);
	_attrs_content($scope, "b", $scope.f);
});
const $catch_content__input_fallback = /*@__PURE__*/ _closure_get_patch("b1", 5, ($scope) => $catch_content__attrs($scope, { content: $scope._.d }), 0, "b5", 0);
const $catch_content__setup = $catch_content__input_fallback;
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("b3", "<b> </b><div></div>", "D l ", $catch_content__setup, $catch_content__$params);

// template.marko
const $fallback_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 8, ($scope) => _text($scope.a, $scope._.g), 0, "a3", 0);
const $fallback_content__setup = ($scope) => {
	$fallback_content__input_label($scope);
	$fallback_content__count($scope);
};
const $fallback_content__count = /*@__PURE__*/ _closure_get_patch("a5", 9, ($scope) => _text($scope.b, $scope._.h));
const $fallback_content = _content$1("a1", "<i><!> <!></i>", "D%c%", $fallback_content__setup);
const $count__closure = /*@__PURE__*/ _closure($fallback_content__count);
const $count = _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$count__closure($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
