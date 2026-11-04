// tags/frag-host.marko
const $one_content = _content$1("b0", "<em>one</em>");
const $two_content__input_b = /*@__PURE__*/ _closure_get_patch("b2", 9, ($scope) => _text($scope.a, $scope._.e), 0, "b4", 0);
const $two_content = _content$1("b1", "<strong> </strong>", "D ", $two_content__input_b);
const $input_mode__OR__one__OR__two__script = _script("b3", ($scope) => {
	_attrs_script($scope, "a");
	_attrs_script($scope, "b");
});
const $input_mode__OR__one__OR__two = /*@__PURE__*/ _or_patch("b5", 8, ($scope) => {
	$input_mode__OR__one__OR__two__script($scope);
	_attrs_content($scope, "a", { content: $scope.f ? $scope.g : $scope.h });
	_attrs_partial_content($scope, "b", { content: $scope.f ? $scope.h : $scope.g }, { id: 1 });
}, 2);
const $input_mode = /*@__PURE__*/ _const(5, $input_mode__OR__one__OR__two);

// template.marko
const $mode = _let(5, ($scope) => $input_mode($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.f);
}));
