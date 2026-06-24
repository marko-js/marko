// template.marko
const $template = "<form><select></select><button type=reset>reset</button></form><div> </div><button class=remove>Remove option</button><button class=add>Add option</button>";
const $walks = "D lD l b b";
const $for_content__opt = ($scope, opt) => {
	_attr($scope["#option/0"], "value", opt);
	_text($scope["#text/1"], opt);
};
const $for_content__$params = ($scope, $params2) => $for_content__opt($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#select/0", "<option> </option>", " D l", 0, $for_content__$params);
const $options__script = _script("__tests__/template.marko_0_options", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$options($scope, $scope.options.slice(1));
	});
	_on($scope["#button/3"], "click", function() {
		$options($scope, [$scope.options?.length ? $scope.options?.[0] - 1 : 3, ...$scope.options]);
	});
});
const $options = /*@__PURE__*/ _let("options/4", ($scope) => {
	$options_($scope, $scope.options?.[0]);
	$for($scope, [$scope.options, (v) => v]);
	$options__script($scope);
});
const $value = /*@__PURE__*/ _let("value/6", ($scope) => {
	_attr_select_value($scope, "#select/0", $scope.value, $valueChange($scope));
	_text($scope["#text/1"], $scope.value);
});
const $options_ = /*@__PURE__*/ _const("options_0", ($scope) => $value($scope, $scope.options_0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/0");
	_on($scope["#select/0"], "change", console.log);
	_on($scope["#select/0"], "input", console.log);
});
function $setup($scope) {
	$options($scope, [
		1,
		2,
		3
	]);
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
