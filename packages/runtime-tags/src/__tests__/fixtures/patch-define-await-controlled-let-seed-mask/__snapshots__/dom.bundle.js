// template.marko
const $await_content__c = _fill_let_change("a1", 4, ($scope) => _text($scope.a, $scope.e));
const $await_content__s = _let(3, ($scope) => $await_content__c($scope, $scope.d, $valueChange($scope)));
const $await_content__$params = ($scope, $params3) => $await_content__s($scope, $params3[0]);
const $S_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $S_content__promise = $S_content__await_promise;
const $if_content__p = /*@__PURE__*/ _if_closure_patch("a7", 0, 0, ($scope) => $S_content__promise($scope.a, $scope._.e));
const $p = _let(4, $if_content__p);
const $valueChange = ($scope) => function(v) {
	$await_content__s($scope, v);
};
_resumed.a0 = $valueChange;
