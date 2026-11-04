// template.marko
const $catch_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 5, ($scope) => _attr_input_value($scope, "b", $scope._.d, $valueChange), 0, "a6", 0);
const $catch_content__setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "b"));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__setup__script($scope);
};
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a4", "<b> </b><input>", "D l ", $catch_content__setup, $catch_content__$params);
function $valueChange(v) {
	console.log("changed", v);
}
_resumed.a0 = $valueChange;
