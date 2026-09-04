// template.marko
const $if_content__api = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, [...$scope._.g].length)));
const $if_content__setup = ($scope) => {
	$if_content__api._($scope);
	$if_content__api_label._($scope);
};
const $if_content__api_label = /*@__PURE__*/ _fill_join("a1", 7, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.h)));
const $if = /*@__PURE__*/ _if(0, "<p><!>:<!></p>", "D%c%", $if_content__setup);
const $show = /*@__PURE__*/ _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, true);
}));
const $getTitle = ($scope) => () => $scope.e;
const $api = ($scope) => function* () {
	yield $getTitle($scope);
};
_resume("a0", $getTitle);
_resume("a1", $api);
