// tags/keep.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, $scope.e);
}));

// template.marko
const $keep_content__input_note = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_closure("a7", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "a1"), 0));
const $keep_content__setup = ($scope) => {
	$keep_content__input_note($scope);
	$keep_content__b($scope);
};
const $keep_content__b = /*@__PURE__*/ _init_resume("a2", /*@__PURE__*/ _fill_closure("a5", 2, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.c), 0, "a3"), 0));
const $keep_content = _content$1("a4", "<!>:<!>", "%c%", $keep_content__setup);
