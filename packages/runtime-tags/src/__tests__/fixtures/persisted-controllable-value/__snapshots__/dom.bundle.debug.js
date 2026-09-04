// template.marko
const $template = "<main><h1> </h1><input></main>";
const $walks = "E l l";
const $setup = () => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/1", $scope.input_value));
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_value($scope, input.value);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
