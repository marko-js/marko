// tags/card.marko
const $if_content__k = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "b0");
const $Panel_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__k);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $k__closure = /*@__PURE__*/ _closure($if_content__k);
const $k = /*@__PURE__*/ _let(5, ($scope) => {
	$Panel_content__open($scope.a, $scope.f);
	$k__closure($scope);
});
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$k($scope, 0);
}));
