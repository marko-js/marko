// tags/reader.marko
const $get__script = _script("c0", ($scope) => $scope.a.textContent = $scope.d());

// tags/child.marko
const $frag_content__input_a__OR__c = /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope._._.f + $scope._.c));
const $frag_content__input_a = /*@__PURE__*/ _closure_get(8, $frag_content__input_a__OR__c, ($scope) => $scope._._, "b2");
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__c($scope);
};
const $frag_content__c = /*@__PURE__*/ _closure_get(10, ($scope) => {
	_text($scope.b, $scope._.c);
	$frag_content__input_a__OR__c($scope);
}, 0, "b3");
const $frag_content = _content("b1", "<em> </em><i> </i>", "D lD ", $frag_content__setup);
const $if_content__input_mode__OR__frag_content = /*@__PURE__*/ _or(5, ($scope) => _attr_content($scope, "a", $scope._.g ? $scope.e : null));
const $if_content__input_mode = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_mode__OR__frag_content);
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const(5, $input_a__closure);
const $input_mode = /*@__PURE__*/ _const(6, $if_content__input_mode);
const $get = ($scope) => function() {
	return $scope.c;
};
_resumed.b0 = $get;

// template.marko
const $n = /*@__PURE__*/ _let(9, ($scope) => $input_a($scope.a, $scope.j));
const $m = /*@__PURE__*/ _let(10, ($scope) => {
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
