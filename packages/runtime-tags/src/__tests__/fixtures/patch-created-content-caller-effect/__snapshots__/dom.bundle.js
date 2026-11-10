// tags/child.marko
const $body_content__input_count__script = _script_patch("b0 >e", ($scope) => console.log("content count", $scope._.e));
const $body_content__input_count = /*@__PURE__*/ _closure_get_patch("b1", 5, $body_content__input_count__script, 0, "b3", 0);
const $body_content = _content$1("b2", "<p>body</p>", 0, $body_content__input_count);
const $input_count__closure = /*@__PURE__*/ _closure($body_content__input_count);
const $input_count = /*@__PURE__*/ _const(4, $input_count__closure);

// template.marko
const $count = _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$input_count($scope.c, $scope.i);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
