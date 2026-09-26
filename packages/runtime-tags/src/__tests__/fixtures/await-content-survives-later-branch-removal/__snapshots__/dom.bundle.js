// tags/counter.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script("b0", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, +$scope.c + 1);
	});
	$signal($scope, 0).onabort = () => console.log("counter destroyed");
});

// template.marko
const $if = /*@__PURE__*/ _if(1, "<span>shown</span>");
const $show = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$show($scope, false);
}));
