// template.marko
const $template = "<!> <!>";
const $walks = "%c%b";
const $setup = () => {};
const $input_value = ($scope, input_value) => {
	_text($scope["#text/0"], input_value);
	$input_value_($scope, input_value?.[0]);
};
const $input_value_ = ($scope, input_value_0) => _text($scope["#text/1"], input_value_0);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
