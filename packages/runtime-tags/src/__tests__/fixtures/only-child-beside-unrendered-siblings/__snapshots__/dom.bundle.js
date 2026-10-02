// template.marko
const $if = /*@__PURE__*/ _if(0, "<b> </b>", "D ", /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d)));
const $open = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.c);
}));
