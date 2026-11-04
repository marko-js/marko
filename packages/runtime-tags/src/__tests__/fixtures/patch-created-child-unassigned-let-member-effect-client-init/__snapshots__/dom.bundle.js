// tags/child.marko
const $o = _fill_let("b1", 4, ($scope) => $o_label($scope, $scope.e?.label));
const $o_label__script = _script("b0", ($scope) => $scope.a.textContent += $scope.f);
const $o_label = /*@__PURE__*/ _const(5, $o_label__script);
const $input_opts = $o;

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a3", 2, 0, ($scope) => $input_opts($scope.a, {
	label: "v" + $scope._.g,
	n: "SECRET_"
}));
const $count = _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
