// total: 7148 (min) 3259 (brotli)
// template.marko: 359 (min) 215 (brotli)
const $for_content__name = ($scope, name) => _text($scope.a, name);
const $for_content__description = ($scope, description) => _text($scope.b, description);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => {
	$for_content__name($scope, $temp.name);
	$for_content__description($scope, $temp.description);
};
const $for = /* @__PURE__ */ _for_of(0, "<div><!>: <!></div>", "D%c%l", 0, $for_content__$params);
const $items__script = _script("a0", ($scope) => {
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
const $items = /* @__PURE__ */ _let(3, ($scope) => {
	$for($scope, [$scope.d]);
	$items__script($scope);
});
