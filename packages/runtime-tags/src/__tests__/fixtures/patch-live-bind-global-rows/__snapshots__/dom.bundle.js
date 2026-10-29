// tags/stepper.marko
const $clamp__OR__current = /*@__PURE__*/ _or_resume("b6", 10, ($scope) => _attr_input_value($scope, "a", $scope.i, $valueChange$1($scope)));
const $current = /*@__PURE__*/ _fill_let_change("b7", 8, $clamp__OR__current);
const $input_value__OR__input_valueChange = /*@__PURE__*/ _fill("b4", 5, /*@__PURE__*/ _fill("b3", 4, /*@__PURE__*/ _or_resume("b5", 6, ($scope) => $current($scope, $scope.e, $scope.f))));
const $input_value = /*@__PURE__*/ _const(4, $input_value__OR__input_valueChange);
const $setup__script = _script("b2", ($scope) => _attr_input_value_script($scope, "a"));
const $valueChange$1 = ($scope) => (_new_current) => {
	$current($scope, $scope.h(_new_current));
};
const $clamp = ($scope) => (v) => Math.min($scope.d, Number(v));
_bind_resume("b1 h", $valueChange$1);
_bind_resume("b0 d", $clamp);

// template.marko
const $for_content__qty = /*@__PURE__*/ _fill_let("a1", 4, ($scope) => $input_value($scope.a, $scope.e));
const $valueChange = ($scope) => (_new_qty) => {
	$for_content__qty($scope, _new_qty);
};
_resumed.a0 = $valueChange;
