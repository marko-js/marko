// tags/field.marko
const $Log_content__log__OR__value__script = _script("b7", ($scope) => $scope.c($scope.d));
const $Log_content__log__OR__value = /*@__PURE__*/ _or_resume("b8", 4, $Log_content__log__OR__value__script);
const $Log_content__value = /*@__PURE__*/ _const(3, $Log_content__log__OR__value);
const $TextField_content__value__OR__valueChange = /*@__PURE__*/ _or_resume("b5", 5, ($scope) => _attr_input_value($scope, "a", $scope.d, $scope.e));
const $TextField_content__value = /*@__PURE__*/ _const(3, $TextField_content__value__OR__valueChange);
const $TextField_content__setup = _script("b4", ($scope) => _attr_input_value_script($scope, "a"));
const $TextField_content__attrs__script = _script("b3", ($scope) => _attrs_script($scope, "a"));
const $input_v = ($scope, input_v) => {
	$TextField_content__value($scope.a, input_v);
	$Log_content__value($scope.b, input_v);
};
function $valueChange(next) {
	document.title = next;
}
const $log = ($scope) => function(value) {
	console.log(value, $scope.e);
};
_resumed.b0 = $valueChange;
_bind_resume("b1 e", $log);

// template.marko
const $v = _let(5, ($scope) => $input_v($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$v($scope, $scope.f + "!");
}));
