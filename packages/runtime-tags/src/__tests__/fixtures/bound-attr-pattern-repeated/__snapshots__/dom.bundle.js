// template.marko
const $Wrap_content__a__OR__$valueChange = /* @__PURE__ */ _or(7, ($scope) => {
	_attr_input_value($scope, "a", $scope.g, $scope.f);
	_attr_input_value($scope, "b", $scope.g, $scope.f);
	_attr_input_value($scope, "c", $scope.g, $scope.f);
});
const $Wrap_content__a = /* @__PURE__ */ _const(6, $Wrap_content__a__OR__$valueChange);
const $Wrap_content__$aChange = /* @__PURE__ */ _const(5, $Wrap_content__a__OR__$valueChange);
const $Wrap_content__setup = /* @__PURE__ */ _child_setup(_script("a1", ($scope) => {
	_attr_input_value_script($scope, "a");
	_attr_input_value_script($scope, "b");
	_attr_input_value_script($scope, "c");
}));
const $Wrap_content__tag_param_ = ($scope, $temp) => {
	$Wrap_content__$aChange($scope, $temp.aChange);
	$Wrap_content__a($scope, $temp.a);
};
const $n = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$Wrap_content__tag_param_($scope.c, { a: "z" + $scope.d });
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
