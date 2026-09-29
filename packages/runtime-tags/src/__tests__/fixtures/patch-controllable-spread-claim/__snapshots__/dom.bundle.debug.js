// template.marko
const $template = "<input><p id=out>-</p><button>interactive</button>";
const $walks = " c b";
const $input_attrs__OR__input_on__script = _script("__tests__/template.marko_0_input_attrs#4_input_on#5", ($scope) => _attrs_script($scope, "#input/0"));
const $input_attrs__OR__input_on = /*@__PURE__*/ _or(6, ($scope) => {
	_attrs($scope, "#input/0", {
		type: "checkbox",
		...$scope.input_attrs,
		checked: $scope.input_on
	}, _controllable_input);
	$input_attrs__OR__input_on__script($scope);
});
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $input_attrs__OR__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_attrs__OR__input_on);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_on($scope, input.on);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
