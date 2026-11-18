// template.marko
const $for_content__$params = ($scope, $temp) => {
	_text($scope.a, $temp.name);
	_text($scope.b, $temp.description);
};
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<div><!>: <!></div>", "D%c%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$items($scope, [...$scope.d, {
			name: "JavaScript",
			description: "Java, but scriptier"
		}]);
	});
	_on($scope.c, "click", function() {
		$items($scope, $scope.d.slice(0, -1));
	});
});
