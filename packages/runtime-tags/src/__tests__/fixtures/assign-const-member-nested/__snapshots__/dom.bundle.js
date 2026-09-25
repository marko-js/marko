// template.marko
const $live_inner = /*@__PURE__*/ _const(5, _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$scope.f.open = true;
	});
	_on($scope.c, "click", function() {
		console.log("read", $scope.f.open);
	});
}));
