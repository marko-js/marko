// tags/card.marko
const $if_content2__k = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__open($scope.a, $scope._.g));
const $if_content__input_w = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "b0");
const $Panel_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_w);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $k = /*@__PURE__*/ _let(6, $if_content2__k);
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$k($scope, 0);
}));
