// tags/reader.marko
const $get__script = _script("c0", ($scope) => $scope.a.textContent = $scope.d());

// tags/child.marko
const $frag_content__input_a__OR__c = /*@__PURE__*/ _fill_join_subscribers("b2 | b1", 2, /*@__PURE__*/ _fill_join_subscribers("b13", 5, /*@__PURE__*/ _or_resume("b8", 2, ($scope) => _text($scope.a, $scope._._.f + $scope._.c)), 8, 0), 10, 0);
const $frag_content__input_a = /*@__PURE__*/ _closure_get(8, $frag_content__input_a__OR__c, ($scope) => $scope._._, "b5");
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__c($scope);
};
const $frag_content__c = /*@__PURE__*/ _init_resume("b6", /*@__PURE__*/ _fill_join_closure("b1 b2", 2, /*@__PURE__*/ _closure_get(10, ($scope) => {
	_text($scope.b, $scope._.c);
	$frag_content__input_a__OR__c($scope);
}, 0, "b7"), 0));
const $frag_content = _content$1("b4", "<em> </em><i> </i>", "D lD ", $frag_content__setup);
const $if_content__input_mode__OR__frag_content = /*@__PURE__*/ _fill_join_if("b12", 6, /*@__PURE__*/ _or_resume("b9", 5, ($scope) => _attr_content($scope, "a", $scope._.g ? $scope.e : null)), 0, 0);
const $if_content__input_mode = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_mode__OR__frag_content);
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const(5, $input_a__closure);
const $input_mode = /*@__PURE__*/ _fill_const("b12", 6, $if_content__input_mode);
const $get = ($scope) => function() {
	return $scope.c;
};
_bind_resume("b0 c", $get);

// template.marko
const $n = _let(9, ($scope) => $input_a($scope.a, $scope.j));
const $m = _let(10, ($scope) => {
	$input_mode($scope.a, $scope.k);
	$input_mode($scope.b, $scope.k);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, +$scope.j + 1);
	});
	_on($scope.d, "click", function() {
		$m($scope, !$scope.k);
	});
});
