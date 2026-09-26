// template.marko
const $template = "<script type=application/ld+json><\/script>";
const $walks = " b";
function $setup($scope) {
	_attr_nonce($scope, "#script/0");
}
const $input_a = ($scope, input_a) => _text_content($scope["#script/0"], JSON.stringify({ a: input_a }));
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
