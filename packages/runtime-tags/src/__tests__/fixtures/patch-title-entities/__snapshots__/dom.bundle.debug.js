// template.marko
const $template = "<html><head><title></title></head><body><main> </main></body></html>";
const $walks = "E lE n";
const $setup = () => {};
const $input_title = ($scope, input_title) => _text_content($scope["#title/0"], `${_to_text(input_title)} & more <3`);
const $input_body = ($scope, input_body) => _text($scope["#text/1"], input_body);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_body($scope, input.body);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
