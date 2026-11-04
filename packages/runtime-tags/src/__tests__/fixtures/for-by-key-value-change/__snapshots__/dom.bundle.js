// template.marko
const $for_content__count = /*@__PURE__*/ _let_change(3);
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__count($scope, +$scope.d + 1);
}));
const $valueChange = ($scope) => function(next) {
	document.getElementById("log").textContent = $scope.M + next;
};
_resumed.a0 = $valueChange;
