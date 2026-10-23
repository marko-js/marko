// template.marko
const $template = "<select></select><select multiple></select><span> </span>";
const $walks = " b bD l";
const $for_content2__option_value = ($scope, option_value) => {
	_attr($scope["#option/0"], "value", option_value);
	_text($scope["#text/1"], option_value);
};
const $for_content2__$params = ($scope, $params3) => $for_content2__option_value($scope, $params3[0]?.value);
const $for_content__option_value = ($scope, option_value) => {
	_attr($scope["#option/0"], "value", option_value);
	_text($scope["#text/1"], option_value);
};
const $for_content__$params = ($scope, $params2) => $for_content__option_value($scope, $params2[0]?.value);
const $calls = /*@__PURE__*/ _let("calls/6", ($scope) => {
	_attr_select_value($scope, "#select/0", "b", $valueChange($scope));
	_attr_select_value($scope, "#select/1", ["b"], $valueChange2($scope));
	_text($scope["#text/2"], $scope.calls);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/0");
	_attr_select_value_script($scope, "#select/1");
});
function $setup($scope) {
	$calls($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#select/0", "<option> </option>", " D ", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of("#select/1", "<option> </option>", " D ", 0, $for_content2__$params);
const $input_options = ($scope, input_options) => {
	$for($scope, [input_options, "id"]);
	$for2($scope, [input_options, "id"]);
};
const $input = ($scope, input) => $input_options($scope, input.options);
const $valueChange2 = ($scope) => function() {
	$calls($scope, +$scope.calls + 1);
};
const $valueChange = ($scope) => function() {
	$calls($scope, +$scope.calls + 1);
};
_resumed["__tests__/template.marko_0/valueChange2"] = $valueChange2;
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
