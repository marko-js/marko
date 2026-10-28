// tags/show-await.marko
const $await_content__m__OR__n__OR__s__OR__c__script = _script("b2", ($scope) => $scope.b.textContent = [
	$scope.f,
	$scope.g,
	$scope.i,
	$scope.j
].join("|"));
const $await_content__m__OR__n__OR__s__OR__c = /*@__PURE__*/ _or(11, $await_content__m__OR__n__OR__s__OR__c__script, 3);
const $await_content__m = /*@__PURE__*/ _fill_let("b4", 5, $await_content__m__OR__n__OR__s__OR__c);
const $await_content__n = /*@__PURE__*/ _fill_let_change("b5", 6, $await_content__m__OR__n__OR__s__OR__c);
const $await_content__c = /*@__PURE__*/ _fill_let_change("b7", 9, $await_content__m__OR__n__OR__s__OR__c);
const $await_content__s = /*@__PURE__*/ _fill_let("b6", 8, ($scope) => {
	$await_content__m__OR__n__OR__s__OR__c($scope);
	$await_content__c($scope, $scope.i, $valueChange2($scope));
}, $await_content__m__OR__n__OR__s__OR__c);
const $await_content__x = ($scope, x) => {
	$await_content__m($scope, x);
	$await_content__s($scope, x);
	_text($scope.a, x);
	$await_content__n($scope, x, $valueChange($scope));
};
const $await_content__setup = _script("b3", ($scope) => _on($scope.c, "click", function() {
	$await_content__n($scope, "z");
	$await_content__c($scope, "y");
}));
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;
const $valueChange2 = ($scope) => function(v) {
	$await_content__s($scope, v);
};
const $valueChange = ($scope) => function(v) {
	$await_content__m($scope, v + "?");
};
_resumed.b1 = $valueChange2;
_resumed.b0 = $valueChange;

// template.marko
const $if_content__p = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g)));
const $p = _let(6, $if_content__p);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("green"));
}));
