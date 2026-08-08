// tags/field/index.marko
const $template = "<input><em> </em>";
const $walks = " bD l";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(6, ($scope) => _attr_input_value($scope, "a", $scope.e, $scope.f));
const $input_value = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.b, $scope.e);
	$input_value__OR__input_valueChange($scope);
});
const $input_valueChange = /*@__PURE__*/ _const(5, $input_value__OR__input_valueChange);
const $setup__script$1 = _script("b0", ($scope) => _attr_input_value_script($scope, "a"));
const $setup = $setup__script$1;

// template.marko
const $if_content__text = /*@__PURE__*/ _resume("a2", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_value($scope.a, $scope._.d)));
const $if_content__setup = ($scope) => {
	$if_content__text._($scope);
	$setup($scope.a);
	$input_valueChange($scope.a, $valueChange($scope));
};
const $text = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$if_content__text($scope);
});
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $open = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.e);
}));
function $valueChange($scope) {
	return (_new_text) => {
		$text($scope._, _new_text);
	};
}
_resume("a0", $valueChange);
