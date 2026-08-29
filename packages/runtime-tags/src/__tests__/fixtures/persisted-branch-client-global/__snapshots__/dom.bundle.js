// template.marko
const $if_content__setup = /* @__PURE__ */ _fill_join("a0", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d)));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c > 1 ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
