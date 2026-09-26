// tags/counter.marko
const $n = /*@__PURE__*/ _let(0, ($scope) => _return($scope, {
	n: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(value) {
	$n($scope, value);
};
_resumed.b0 = $_return;

// template.marko
_dynamic_tag_var_resume(0);
_dynamic_tag_var_resume(2);
const $Double_content__value = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c * 2));
const $Double_content__$params = ($scope, $params2) => $Double_content__value($scope, ($params2?.[0]).value);
const $Double_content = _content_return(_content("a0", 0, 0, 0, $Double_content__$params));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2, 0, () => $doubled);
const $count__OR__DoubleTag = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag2($scope, $scope.l, () => ({ value: $scope.j })));
const $count = /*@__PURE__*/ _let(9, $count__OR__DoubleTag);
const $setup__script = _script("a3", ($scope) => {
	_on($scope.e, "click", function() {
		$scope.n.set($scope.n?.n + 1);
	});
	_on($scope.g, "click", function() {
		$count($scope, +$scope.j + 1);
	});
});
const $counter = _var_resume("a1", /*@__PURE__*/ _const(13, ($scope) => $counter_n($scope, $scope.n?.n)));
const $counter_n = ($scope, counter_n) => _text($scope.f, counter_n);
const $doubled = _var_resume("a2", ($scope, doubled) => _text($scope.h, doubled));
