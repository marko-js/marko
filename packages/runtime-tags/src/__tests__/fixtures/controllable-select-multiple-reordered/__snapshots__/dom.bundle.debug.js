// template.marko
const $template = "<select multiple></select><span>sel:<!></span><button>Add</button>";
const $walks = " bDb%l b";
const $for_content__opt = ($scope, opt) => {
	_attr($scope["#option/0"], "value", opt);
	_text($scope["#text/1"], opt);
};
const $for_content__$params = ($scope, $params2) => $for_content__opt($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#select/0", "<option> </option>", " D l", 0, $for_content__$params);
const $options = /*@__PURE__*/ _let("options/3", ($scope) => $for($scope, [$scope.options, (v) => v]));
const $selected = /*@__PURE__*/ _let("selected/4", ($scope) => {
	_attr_select_value($scope, "#select/0", $scope.selected, $valueChange($scope));
	_text($scope["#text/1"], $scope.selected.join(","));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/0");
	_on($scope["#button/2"], "click", function() {
		$options($scope, [...$scope.options, "d"]);
	});
});
function $setup($scope) {
	$options($scope, [
		"a",
		"b",
		"c"
	]);
	$selected($scope, ["b", "a"]);
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(v) {
		$selected($scope, v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
