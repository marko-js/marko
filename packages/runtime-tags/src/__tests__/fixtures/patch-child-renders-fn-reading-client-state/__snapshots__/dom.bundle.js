// tags/card.marko
const $g2__script = _script("b1", ($scope) => console.log("run", $scope.g()));
const $g2 = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.a, $scope.g());
	$g2__script($scope);
});
const $input_fn__OR__open = /*@__PURE__*/ _or_resume("b2", 5, ($scope) => $g2($scope, $scope.e ? $scope.d : $g));
const $input_fn = /*@__PURE__*/ _const(3, $input_fn__OR__open);
function $g() {
	return "-";
}
_resumed.b0 = $g;

// template.marko
const $input_label__OR__n = /*@__PURE__*/ _fill_join("a2", 5, /*@__PURE__*/ _or(8, ($scope) => $input_fn($scope.a, $fn($scope))));
const $n = /*@__PURE__*/ _let(7, $input_label__OR__n);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
const $fn = ($scope) => function() {
	return "f:" + $scope.f + $scope.h;
};
_resumed.a0 = $fn;
