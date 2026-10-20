// template.marko
const $if_content__input_label = /*@__PURE__*/ _fill_join("a6", 6, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("a7", 7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.h);
}));
