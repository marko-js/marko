// template.marko
const $if_content2__input_w = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._._.f), ($scope) => $scope._._._, "a0");
const $Panel_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__input_w);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $if_content__k = /*@__PURE__*/ _let(2, ($scope) => $Panel_content__open($scope.a, $scope.c));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$if_content__k($scope, 0);
}));
