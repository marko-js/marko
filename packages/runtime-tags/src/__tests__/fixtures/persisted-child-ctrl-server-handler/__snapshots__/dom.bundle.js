// tags/field/index.marko
const $template = "<input>";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(5, ($scope) => _attr_input_value($scope, "a", $scope.d, $scope.e));
const $input_value = /*@__PURE__*/ _const(3, $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const(4, $input_value__OR__input_valueChange);
const $setup__script$1 = _script("b0", ($scope) => _attr_input_value_script($scope, "a"));
const $setup = $setup__script$1;

// template.marko
const $if_content__handle = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_valueChange($scope.a, $scope._.f)));
const $if_content__setup = ($scope) => {
	$if_content__handle._($scope);
	$setup($scope.a);
	$input_value($scope.a, "a");
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
function $handle($scope) {
	return (next) => {
		document.querySelector("output").textContent = $scope.e + next;
	};
}
_resume("a0", $handle);
