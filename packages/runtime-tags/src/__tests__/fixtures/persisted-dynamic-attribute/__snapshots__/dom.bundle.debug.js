// template.marko
const $template = "<a> </a>";
const $walks = " D l";
const $setup = () => {};
const $input_href = ($scope, input_href) => _attr($scope["#a/0"], "href", input_href);
const $input_title = ($scope, input_title) => _attr($scope["#a/0"], "title", input_title);
const $input_hidden = ($scope, input_hidden) => _attr($scope["#a/0"], "hidden", input_hidden);
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_href($scope, input.href);
	$input_title($scope, input.title);
	$input_hidden($scope, input.hidden);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
