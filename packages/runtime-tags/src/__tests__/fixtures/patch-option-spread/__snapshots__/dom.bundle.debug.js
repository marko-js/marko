// template.marko
const $template = "<select><option> </option><option value=b>b</option><option>c</option></select><span> </span><button>t</button>";
const $walks = " D D lb lD l b";
const $v = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "v/11", ($scope) => {
	_attr_select_value($scope, "#select/0", $scope.v, $valueChange($scope));
	_text($scope["#text/4"], $scope.v);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/0");
	_on($scope["#button/5"], "click", function() {
		$v($scope, $scope.v === "b" ? "c" : "b");
	});
});
function $setup($scope) {
	$setup__script($scope);
	$v($scope, "b");
}
const $input_a__script = _script("__tests__/template.marko_0_input_a#8", ($scope) => _attrs_script($scope, "#option/1"));
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => {
	_attrs($scope, "#option/1", $scope.input_a);
	$input_a__script($scope);
});
const $input_label = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input_c__script = _script("__tests__/template.marko_0_input_c#10", ($scope) => _attrs_script($scope, "#option/3"));
const $input_c = /*@__PURE__*/ _const("input_c", ($scope) => {
	_attrs($scope, "#option/3", {
		value: "c",
		...$scope.input_c
	});
	$input_c__script($scope);
});
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_c($scope, input.c);
	$input_label($scope, input.label);
};
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
