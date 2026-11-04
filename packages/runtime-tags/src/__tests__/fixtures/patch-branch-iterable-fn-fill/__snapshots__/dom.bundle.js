// template.marko
const $if_content__api = /*@__PURE__*/ _if_closure_patch("a2", 0, 0, ($scope) => _text($scope.b, [...$scope._.g].length));
const $if_content__setup = ($scope) => {
	$if_content__api._($scope);
	$if_content__api_label._($scope);
};
const $if_content__api_label = /*@__PURE__*/ _if_closure_patch("a3", 0, 0, ($scope) => _text($scope.a, $scope._.h));
const $if = /*@__PURE__*/ _if(0, "<p><!>:<!></p>", "D%c%", $if_content__setup);
const $show = _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$show($scope, true);
}));
const $getTitle = ($scope) => () => $scope.e;
const $api = ($scope) => function* () {
	yield $scope.f;
};
_bind_resume("a0 e", $getTitle);
_bind_resume("a1 f", $api);
