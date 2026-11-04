// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>win</p>");
const $input__OR__count = /*@__PURE__*/ _or_patch("a1", 5, ($scope) => $if($scope, $scope.e + ($scope.d[$scope.d.key] || 0) > 10 ? 0 : 1));
const $count = _let(4, $input__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.e + 1);
}));
