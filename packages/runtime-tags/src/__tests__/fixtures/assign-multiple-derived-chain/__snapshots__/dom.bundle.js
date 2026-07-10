// template.marko
const $selected = ($scope, selected) => _text($scope.b, selected);
const $index__OR__filtered = /*@__PURE__*/ _or(10, ($scope) => $selected($scope, $scope.j["i" in $scope ? "i" in $scope ? $scope.i : 0 : 0]));
const $filtered = /*@__PURE__*/ _const(9, ($scope) => {
	_text($scope.a, $scope.j.join(" "));
	$index__OR__filtered($scope);
});
const $items__OR__min__OR__max = /*@__PURE__*/ _or(7, ($scope) => $filtered($scope, $scope.e.filter((item) => item >= ("f" in $scope ? "f" in $scope ? $scope.f : 0 : 0) && item <= ("g" in $scope ? "g" in $scope ? $scope.g : 4 : 4))), 2);
const $min = /*@__PURE__*/ _let(5, $items__OR__min__OR__max);
const $max = /*@__PURE__*/ _let(6, $items__OR__min__OR__max);
const $index = /*@__PURE__*/ _let(8, $index__OR__filtered);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$min($scope, 2);
		$max($scope, 3);
		$index($scope, 1);
	});
	_on($scope.d, "click", function() {
		$index($scope, 0);
	});
});
