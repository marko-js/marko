// template.marko
const $selected = ($scope, selected) => _text($scope.b, selected);
const $index__OR__filtered = /* @__PURE__ */ _or(9, ($scope) => $selected($scope, $scope.i[$scope.h]));
const $filtered = /* @__PURE__ */ _const(8, ($scope) => {
	_text($scope.a, $scope.i.join(" "));
	$index__OR__filtered($scope);
});
const $items__OR__min__OR__max = /* @__PURE__ */ _or(11, ($scope) => $filtered($scope, $scope.e.filter((item) => item >= $scope.f && item <= $scope.g)), 2);
const $min = /* @__PURE__ */ _let(5, $items__OR__min__OR__max);
const $max = /* @__PURE__ */ _let(6, $items__OR__min__OR__max);
const $index = /* @__PURE__ */ _let(7, $index__OR__filtered);
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
