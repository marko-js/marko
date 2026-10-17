// tags/child.marko
const $setup__script$1 = _script("b0", ($scope) => console.log("static child script"));

// template.marko
const $for_content__setup = _script("a1", ($scope) => console.log("row script"));
const $if_content__setup = _script("a0", ($scope) => _lifecycle($scope, { onMount: function() {
	console.log("if lifecycle");
} }));
const $if = /*@__PURE__*/ _if(0, 0, 0, $if_content__setup);
const $show = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, 0, 0, $for_content__setup);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("a2", ($scope) => {
	_lifecycle($scope, { onMount: function() {
		console.log("parent lifecycle");
	} });
	console.log("parent script");
	_on($scope.d, "click", function() {
		$show($scope, !$scope.e);
		$items($scope, [...$scope.f, $scope.f.length + 1]);
	});
});
