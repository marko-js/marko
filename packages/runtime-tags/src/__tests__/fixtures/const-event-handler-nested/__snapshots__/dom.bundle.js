// template.marko
const $for_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	($scope._.h ||= $add($scope._))($scope.d);
}));
const $if_content__setup = /* @__PURE__ */ _if_closure(1, 0, _script("a1", ($scope) => _on($scope.a, "click", $scope._.g ||= $inc($scope._))));
const $count = /*@__PURE__*/ _let(4, ($scope) => _text($scope.d, $scope.e));
const $if = /*@__PURE__*/ _if(1, "<button class=inc>inc</button>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.f);
}));
const $inc = ($scope) => function() {
	$count($scope, +$scope.e + 1);
};
const $add = ($scope) => function(n) {
	$count($scope, $scope.e + n);
};
