// template.marko
const $a_getter = _el("a0", 0);
const $b_getter = _el("a1", 1);
const $box__script = _script("a2", ($scope) => {
	$scope.a.dataset.ref = "a";
	$scope.b.dataset.ref = "b";
	console.log($scope.c.a() === $scope.c.b() ? "SAME" : "distinct");
});
