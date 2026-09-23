// template.marko
const $if_content__list_length = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.f));
const $if_content__setup = $if_content__list_length;
const $list__OR__show = ($scope) => {
	_text($scope.a, $scope.h ? $scope.e.join() : "none");
};
const $list = /*@__PURE__*/ _let(4, ($scope) => {
	$list_length($scope, $scope.e?.length);
	$list__OR__show($scope);
});
const $show = /*@__PURE__*/ _const(7);
const $list_length = /*@__PURE__*/ _const(5, ($scope) => {
	$show($scope, $scope.f > 1);
	$if_content__list_length($scope);
});
const $if = /*@__PURE__*/ _if(1, "<span> </span>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$list($scope, [...$scope.e]);
	});
	_on($scope.d, "click", function() {
		$open($scope, !$scope.g);
	});
});
