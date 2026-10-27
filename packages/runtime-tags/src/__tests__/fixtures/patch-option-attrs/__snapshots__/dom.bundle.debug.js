// template.marko
const $template = "<main><select></select><select id=plain><option value=a>A</option><option value=b>B</option></select><em> </em><button>+</button></main>";
const $walks = "D bD b lD l l";
const $for_content__o_value = ($scope, o_value) => _attr($scope["#option/0"], "value", o_value);
const $for_content__o_label = ($scope, o_label) => _text($scope["#text/1"], o_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__o_value($scope, $params2[0]?.value);
	$for_content__o_label($scope, $params2[0]?.label);
};
const $count = /*@__PURE__*/ _let("count/10", ($scope) => _text($scope["#text/3"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_picked = /*@__PURE__*/ _const("input_picked", ($scope) => _attr_select_value_default($scope, "#select/0", $scope.input_picked));
const $for = /*@__PURE__*/ _for_of("#select/0", "<option> </option>", " D ", 0, $for_content__$params);
const $input_options = ($scope, input_options) => $for($scope, [input_options, (o) => o.id]);
const $input_pick = ($scope, input_pick) => {
	_attr($scope["#option/1"], "selected", input_pick === "a");
	_attr($scope["#option/2"], "selected", input_pick === "b");
};
const $input = ($scope, input) => {
	$input_picked($scope, input.picked);
	$input_options($scope, input.options);
	$input_pick($scope, input.pick);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
