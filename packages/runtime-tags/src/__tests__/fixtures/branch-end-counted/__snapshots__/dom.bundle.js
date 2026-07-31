// template.marko
const $for_content__item = ($scope, item) => {
	_text($scope.a, item);
	_text($scope.b, item);
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<em> </em><span>#<!></span>", "D lDb%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f, (x) => x]));
const $if = /*@__PURE__*/ _if(1, "<b>big</b><i>really</i>");
const $big = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$items($scope, [...$scope.f].reverse());
	});
	_on($scope.d, "click", function() {
		$items($scope, $scope.f.slice(0, -1));
	});
	_on($scope.e, "click", function() {
		$big($scope, !$scope.g);
	});
});
