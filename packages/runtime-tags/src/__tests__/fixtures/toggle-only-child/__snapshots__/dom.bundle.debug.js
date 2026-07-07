// template.marko
const $template = "<div></div><input>";
const $walks = " b b";
const $if_content__value = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $if = /*@__PURE__*/ _if("#div/0", "<span> </span>", "D l", $if_content__setup);
const $value = /*@__PURE__*/ _let("value/5", ($scope) => {
	_attr_input_value($scope, "#input/1", $scope.value, $valueChange($scope));
	$if($scope, $scope.value ? 0 : 1);
	$if_content__value($scope);
});
const $input_value = $value;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/1"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
