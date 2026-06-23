// template.marko
const $template = "Hello <!>! Hello <!>! Hello <!>!";
const $walks = "b%c%c%c";
const $setup = () => {};
const $input_name = ($scope, input_name) => {
	_text($scope["#text/0"], input_name);
	_html($scope, input_name, "#text/1");
};
const $input_missing = ($scope, input_missing) => _html($scope, input_missing, "#text/2");
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_missing($scope, input.missing);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
