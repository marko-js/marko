// tags/child.marko
const $body_content__input_count__script = _script("b0", ($scope) => console.log("content count", $scope._.e));
const $body_content__input_count = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _closure_get(5, $body_content__input_count__script, 0, "b2"));
const $body_content = _content$1("b3", "<p>body</p>", 0, $body_content__input_count);
const $input_count__closure = /*@__PURE__*/ _closure($body_content__input_count);
const $input_count = /*@__PURE__*/ _const(4, $input_count__closure);

// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$input_count($scope.c, $scope.i);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
