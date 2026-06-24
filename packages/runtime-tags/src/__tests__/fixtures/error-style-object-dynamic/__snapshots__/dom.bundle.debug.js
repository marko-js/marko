// template.marko
const $template = "<style></style>";
const $walks = " b";
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
}
const $input_value = ($scope, input_value) => _text_content($scope["#style/0"], `${_to_text(input_value)}`);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
