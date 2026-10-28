// template.marko
const $if_content__label = /*@__PURE__*/ _fill("a2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__label);
const $Panel_content__open = /*@__PURE__*/ _fill_let("a3", 5, ($scope) => $Panel_content__if($scope, $scope.f ? 0 : 1));
const $Panel_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$Panel_content__open($scope, !$scope.f);
}));
