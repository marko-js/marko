// template.marko
const $template = "<svg><style></style><script type=text/plain><\/script><foreignObject><style></style></foreignObject></svg><math><style></style><mi><style></style></mi></math>";
const $walks = "D b bD mD bD m";
function $setup($scope) {
	_attr_nonce($scope, "#style/0");
	_attr_nonce($scope, "#script/1");
	_attr_nonce($scope, "#style/2");
	_attr_nonce($scope, "#style/3");
	_attr_nonce($scope, "#style/4");
}
const $input_value = ($scope, input_value) => {
	_text_content($scope["#style/0"], `.a{color:${_to_text(input_value)}}`);
	_text_content($scope["#script/1"], `<${_to_text(input_value)}`);
	_text_content($scope["#style/2"], `.b{color:${_to_text(input_value)}}`);
	_text_content($scope["#style/3"], `.c{color:${_to_text(input_value)}}`);
	_text_content($scope["#style/4"], `.d{color:${_to_text(input_value)}}`);
};
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
