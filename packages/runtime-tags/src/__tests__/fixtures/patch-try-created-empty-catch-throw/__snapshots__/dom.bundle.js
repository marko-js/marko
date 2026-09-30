// tags/counter.marko
function fail() {
	throw new Error("boom");
}
const $n = /*@__PURE__*/ _fill_let("b1", 2, ($scope) => _text($scope.b, $scope.c ? fail() : "ok"));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));

// template.marko
const $if_content__try__catch = _content$1("a6");
