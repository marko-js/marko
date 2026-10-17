// template.marko
const $catch_content__input_label = /*@__PURE__*/ _fill_join_closure("a6", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _attr_input_value($scope, "b", $scope._.d, $valueChange), 0, "a3"), 0);
const $catch_content__setup__script = _script("a2", ($scope) => _attr_input_value_script($scope, "b"));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__setup__script($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", "<b> </b><input>", "D l ", $catch_content__setup, $catch_content__$params);
function $valueChange(v) {
	console.log("changed", v);
}
_resumed.a0 = $valueChange;
