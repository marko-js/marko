// template.marko
const $if_content__setup = /* @__PURE__ */ _fill_join("a0", 3, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.d)));
const $if = /*@__PURE__*/ _if(1, "<em> </em>", "D ", $if_content__setup);
const $on = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.c);
}));
