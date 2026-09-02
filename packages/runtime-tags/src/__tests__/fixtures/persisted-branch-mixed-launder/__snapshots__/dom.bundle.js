// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>win</p>");
const $score = ($scope, score) => $if($scope, score > 10 ? 0 : 1);
const $input__OR__count = /*@__PURE__*/ _fill_join("a0", 3, /*@__PURE__*/ _or(5, ($scope) => $score($scope, $scope.e + ($scope.d[$scope.d.key] || 0))));
const $count = /*@__PURE__*/ _let(4, $input__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.e + 1);
}));
