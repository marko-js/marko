// total: 7103 (min) 3176 (brotli)
// template.marko: 246 (min) 164 (brotli)
const $if_content__value = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f));
const $if_content__setup = $if_content__value;
const $if = /* @__PURE__ */ _if(0, "<span> </span>", "D l", $if_content__setup);
const $value = /* @__PURE__ */ _let(5, ($scope) => {
	_attr_input_value($scope, "b", $scope.f, $valueChange($scope));
	$if($scope, $scope.f ? 0 : 1);
	$if_content__value($scope);
});
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "b"));
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
