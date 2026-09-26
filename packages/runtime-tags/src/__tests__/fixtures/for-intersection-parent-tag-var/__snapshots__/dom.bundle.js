// tags/counter.marko
const $n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, {
	n: $scope.a,
	inc: $_return($scope)
}));
const $_return = ($scope) => function() {
	$n($scope, +$scope.a + 1);
};
_resumed.b0 = $_return;

// template.marko
const $for_content__m__OR__c = /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.g + ":" + $scope.f));
const $for_content__c = /*@__PURE__*/ _const(6, $for_content__m__OR__c);
const $for_content__v_n__OR__item = /*@__PURE__*/ _or(4, ($scope) => $for_content__c($scope, $scope._.e + $scope.d));
const $for_content__v_n = /*@__PURE__*/ _for_closure(2, $for_content__v_n__OR__item);
const $for_content__m = /*@__PURE__*/ _let(5, $for_content__m__OR__c);
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__m($scope, +$scope.f + 1);
	$scope._.d.inc();
}));
const $v = _var_resume("a0", /*@__PURE__*/ _const(3, ($scope) => $v_n($scope, $scope.d?.n)));
const $v_n = /*@__PURE__*/ _const(4, $for_content__v_n);
