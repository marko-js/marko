// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $if_content__input_value = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr_input_value($scope, "#input/0", $scope._.input_value, $valueChange));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$if_content__setup__script($scope);
};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<input>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
	$input_value($scope, input.value);
};
const $input_value = /*@__PURE__*/ _const("input_value", $if_content__input_value);
function $valueChange(next) {
	document.querySelector("main").dataset.got = next;
}
_resume("__tests__/template.marko_1/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
