// template.marko
const $MyButton_content__walks = " c", $MyButton_content__template = "<button></button> ";
const $template = /*@__PURE__*/ ((_w0) => `<div></div>${_w0}<!>`)($MyButton_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($MyButton_content__walks);
const $MyButton_content__input_message__script = _script("__tests__/template.marko_1_input_message", ($scope) => _on($scope["#button/0"], "click", function() {
	_el_read($scope._["#div/0"]).textContent += `[onClick(${$scope.input_message})]`;
}));
const $MyButton_content__input_message = /*@__PURE__*/ _const("input_message", $MyButton_content__input_message__script);
const $MyButton_content__$params = ($scope, $params2) => $MyButton_content__input($scope, $params2[0]);
const $MyButton_content__input = ($scope, input) => $MyButton_content__input_message($scope, input.message);
function $setup($scope) {
	$scope["#childScope/1"]._ = $scope;
	$MyButton_content__input_message($scope["#childScope/1"], "hello");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
