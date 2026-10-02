// tags/child.marko
const $if_content__input_value = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.d));
const $if_content__input_valueChange__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$scope._.e($scope._.d + 1);
}));
const $if_content__rest__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $value = /*@__PURE__*/ _const(3, $if_content__input_value);

// template.marko
const $v = /*@__PURE__*/ _let(2, ($scope) => {
	$value($scope.a, $scope.c);
	_text($scope.b, $scope.c);
});
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed.a0 = $valueChange;
