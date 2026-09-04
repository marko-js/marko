// tags/counter.marko
const $n = /*@__PURE__*/ _fill_let("b0", 7, ($scope) => _text($scope.b, $scope.h));
const $setup__script$1 = _script("b0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, +$scope.h + 1);
	});
	{
		const main = document.querySelector("main");
		main.dataset.mounts = String(+(main.dataset.mounts || 0) + 1);
	}
});

// template.marko
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
