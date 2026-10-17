// tags/frag-host.marko
const $one_content = _content$1("b0", "<em>one</em>");
const $two_content__input_b = /*@__PURE__*/ _shell_init("b2", /*@__PURE__*/ _fill_join_closure("b4", 3, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.d), 0, "b3"), 0));
const $two_content = _content$1("b1", "<strong> </strong>", "D ", $two_content__input_b);
const $input_mode__OR__one__OR__two = /*@__PURE__*/ _shell_or("b5", 7, ($scope) => _attr_content($scope, "a", $scope.e ? $scope.f : $scope.g), 2);
const $input_mode = /*@__PURE__*/ _const(4, $input_mode__OR__one__OR__two);

// template.marko
const $mode = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $input_mode($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.f);
}));
