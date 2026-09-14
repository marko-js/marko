// template.marko
const $template = "<script><\/script><style></style><title></title><!----><button>+</button>";
const $walks = " b b b b b";
const $input_title__OR__x = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(10, ($scope) => _text_content($scope["#script/0"], `window.log = [${_to_text($scope.x)}, "${_to_text($scope.input_title)}"]`)));
const $x = /*@__PURE__*/ _let("x/9", $input_title__OR__x);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	_attr_nonce($scope, "#script/0");
	_attr_nonce($scope, "#style/1");
	$x($scope, 1);
	$setup__script($scope);
}
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$input_title__OR__x($scope);
	_text_content($scope["#title/2"], `${_to_text($scope.input_title)} | site`);
	_text($scope["#comment/3"], $scope.input_title);
}, $input_title__OR__x);
const $input_color = ($scope, input_color) => _text_content($scope["#style/1"], `.a { color: ${_to_text(input_color)} }`);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_color($scope, input.color);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
