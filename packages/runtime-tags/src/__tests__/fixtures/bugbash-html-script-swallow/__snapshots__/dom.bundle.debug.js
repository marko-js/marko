// template.marko
const $template = "<script><\/script><div id=after>after</div>";
const $walks = " c";
function $setup($scope) {
	_attr_nonce($scope, "#script/0");
}
const $input_code = ($scope, input_code) => _text_content($scope["#script/0"], `var bugbashX = '${_to_text(input_code)}'`);
const $input = ($scope, input) => $input_code($scope, input.code);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " c", $setup, $input);
