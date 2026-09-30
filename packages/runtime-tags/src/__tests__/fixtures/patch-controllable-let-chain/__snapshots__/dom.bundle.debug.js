// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__b = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "b/3", ($scope) => _attr_input_value($scope, "#input/1", $scope.b, $valueChange2($scope)));
const $if_content__a = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "a/2", ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.a, $valueChange($scope));
	$if_content__b($scope, $scope.a);
}, ($scope) => _attr_input_value($scope, "#input/0", $scope.a, $valueChange($scope)));
const $if_content__input_text = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__a($scope, $scope._.input_text));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_attr_input_value_script($scope, "#input/1");
});
const $if_content__setup = ($scope) => {
	$if_content__input_text._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<input><input>", " b ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_text($scope, input.text);
	$input_show($scope, input.show);
};
const $input_text = /*@__PURE__*/ _const("input_text", $if_content__input_text);
const $valueChange2 = ($scope) => (_new_b) => {
	$if_content__b($scope, _new_b);
};
const $valueChange = ($scope) => (_new_a) => {
	$if_content__a($scope, _new_a);
};
_resumed["__tests__/template.marko_1/valueChange2"] = $valueChange2;
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
