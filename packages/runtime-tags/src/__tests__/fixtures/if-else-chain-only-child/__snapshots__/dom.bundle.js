// template.marko
const $if = /*@__PURE__*/ _if(2, "<p>a</p>", 0, 0, "<i>b</i>", 0, 0, "<b>c</b>");
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope, "b", $scope.d);
	$if($scope, $scope.d % 3 === 0 ? 0 : $scope.d % 3 === 1 ? 1 : 2);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
