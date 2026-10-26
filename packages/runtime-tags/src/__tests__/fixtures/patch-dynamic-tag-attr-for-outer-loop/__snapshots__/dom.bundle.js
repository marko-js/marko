// template.marko
const $item_content__input_note = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a11", 8, /*@__PURE__*/ _closure_get(12, ($scope) => _text($scope.c, $scope._._.i), ($scope) => $scope._._, "a1"), 0));
const $item_content__setup = ($scope) => {
	$item_content__input_note($scope);
	$item_content__a($scope);
};
const $item_content__a = /*@__PURE__*/ _init_resume("a2", /*@__PURE__*/ _fill_join_closure("a5", 3, /*@__PURE__*/ _closure_get(13, ($scope) => _text($scope.a, $scope._.d), 0, "a3"), 0));
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content$1("a4", "<!>:<!>:<!>", "%c%c%", $item_content__setup), { 3: ($scope) => _text($scope.b, $scope.d) });
_resumed.a4 = $item_content;
const $n = /*@__PURE__*/ _let(9, ($scope) => _text($scope.b, $scope.j));
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.j + 1);
}));
