// template.marko
const $if_content__a = /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d)));
const $Body_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__a);
const $Body_content__a = /*@__PURE__*/ _fill_const("a1", 3, ($scope) => {
	$Body_content__if($scope, $scope.d ? 0 : 1);
	$if_content__a($scope);
});
const $k__OR__c = /*@__PURE__*/ _or(8, ($scope) => $Body_content__a($scope.c, $scope.h ? $scope.g + $scope.h : ""));
const $k = fill("a3", /*@__PURE__*/ _let(6, $k__OR__c));
const $c = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$k__OR__c($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.h + 1);
}));
