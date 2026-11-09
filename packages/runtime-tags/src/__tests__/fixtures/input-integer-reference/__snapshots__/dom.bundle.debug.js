// template.marko
const $template = "<!> <!>";
const $walks = "%c%b";
const $setup = ($_) => {};
const $input_value = ($scope, input_value) => {
	_text($scope["#text/0"], input_value);
	_text($scope["#text/1"], input_value?.[0]);
};
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
