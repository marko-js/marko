// template.marko
const $template = "<html><head><title></title><meta name=description></head><body><main> </main></body></html>";
const $walks = "E b lE n";
const $setup = () => {};
const $input_title = ($scope, input_title) => _text_content($scope["#title/0"], `${_to_text(input_title)} | Shop`);
const $input_description = ($scope, input_description) => _attr($scope["#meta/1"], "content", input_description);
const $input_body = ($scope, input_body) => _text($scope["#text/2"], input_body);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_description($scope, input.description);
	$input_body($scope, input.body);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
