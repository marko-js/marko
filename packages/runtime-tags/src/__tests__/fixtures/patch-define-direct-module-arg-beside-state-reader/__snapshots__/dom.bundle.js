// template.marko
const $if_content__input_label = /*@__PURE__*/ _fill_join("a5", 6, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.g)));
const $if = /*@__PURE__*/ _if(1, "<b> </b>", "D ", $if_content__input_label);
const $open = /*@__PURE__*/ _fill_let("a6", 7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.h);
}));
