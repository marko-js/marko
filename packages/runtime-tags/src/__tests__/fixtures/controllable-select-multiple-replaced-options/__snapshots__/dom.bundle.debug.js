// template.marko
const $template = "<select multiple></select><div id=result> </div><button class=reload>reload</button><button class=drop>drop</button>";
const $walks = " bD l b b";
const $for_content__opt = ($scope, opt) => {
	_attr($scope["#option/0"], "value", opt);
	_text($scope["#text/1"], opt);
};
const $for_content__$params = ($scope, $params2) => $for_content__opt($scope, $params2[0]);
const $value = /*@__PURE__*/ _let("value/4", ($scope) => {
	_attr_select_value($scope, "#select/0", $scope.value, $valueChange($scope));
	_text($scope["#text/1"], $scope.value.join(","));
});
const $for = /*@__PURE__*/ _for_of("#select/0", "<option> </option>", " D ", 0, $for_content__$params);
const $options = /*@__PURE__*/ _let("options/5", ($scope) => $for($scope, [$scope.options, (v) => v]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/0");
	_on($scope["#button/2"], "click", function() {
		$options($scope, [
			"a",
			"b",
			"c"
		]);
	});
	_on($scope["#button/3"], "click", function() {
		$options($scope, ["a", "b"]);
	});
});
function $setup($scope) {
	$value($scope, ["b", "c"]);
	$options($scope, [
		"x",
		"b",
		"c"
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
