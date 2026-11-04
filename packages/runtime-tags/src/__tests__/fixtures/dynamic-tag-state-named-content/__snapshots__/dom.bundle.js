// tags/keep.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, $scope.e);
}));

// template.marko
const $keep_content__input_note = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a0");
const $keep_content__setup = ($scope) => {
	$keep_content__input_note($scope);
	$keep_content__b($scope);
};
const $keep_content__b = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.c), 0, "a1");
const $keep_content = _content("a2", "<!>:<!>", "%c%", $keep_content__setup);
