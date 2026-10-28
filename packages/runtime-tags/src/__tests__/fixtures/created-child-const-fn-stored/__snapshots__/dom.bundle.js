// tags/card.marko
const $g2__script = _script("b2", ($scope) => {
	$scope.a.textContent = $scope.h();
	console.log("run", $scope.h());
});
const $g2 = /*@__PURE__*/ _const(7, $g2__script);
const $input_fn__OR__open = /*@__PURE__*/ _or(6, ($scope) => $g2($scope, $scope.f ? $scope.e : $g));
const $open = /*@__PURE__*/ _let(5, $input_fn__OR__open);
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
function $g() {
	return "-";
}
_resumed.b0 = $g;

// template.marko
const $fn = ($scope) => function() {
	return "f:" + $scope._.e;
};
_resumed.a0 = $fn;
