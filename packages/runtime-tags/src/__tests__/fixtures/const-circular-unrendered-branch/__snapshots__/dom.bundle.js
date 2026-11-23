// template.marko
const $if_content__a = /*@__PURE__*/ _const(2, ($scope) => {
	_text($scope.a, $scope.c);
	$if_content__b($scope, $scope.c);
});
const $if_content__b = ($scope) => _text($scope.b, $scope.c);
const $if_content__setup = ($scope) => $if_content__a($scope, void 0);
const $if = /*@__PURE__*/ _if(1, "<div><!><!></div>", "D%b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
