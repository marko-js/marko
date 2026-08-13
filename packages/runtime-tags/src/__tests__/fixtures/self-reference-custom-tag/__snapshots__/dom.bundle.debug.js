// template.marko
const $Child_content__walks = " b", $Child_content__template = "<button></button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b0${_w0}&b`)($Child_content__walks);
const $Child_content__$el_getter = _el("__tests__/template.marko_1_#button#0", "#button/0");
const $Child_content__input_onClick__script = _script("__tests__/template.marko_1_input_onClick#3", ($scope) => _on($scope["#button/0"], "click", $scope.input_onClick));
const $Child_content__input_onClick = /*@__PURE__*/ _const("input_onClick", $Child_content__input_onClick__script);
const $Child_content__setup = /*@__PURE__*/ _child_setup(($scope) => _return($scope, $Child_content__$el_getter($scope)));
const $Child_content__$params = ($scope, $params2) => $Child_content__input($scope, $params2[0]);
const $Child_content__input = ($scope, input) => $Child_content__input_onClick($scope, input.onClick);
const $foo = /*@__PURE__*/ _const("foo", ($scope) => $Child_content__input_onClick($scope["#childScope/0"], $onClick($scope)));
function $setup($scope) {
	_var($scope, "#childScope/0", $foo);
	$Child_content__setup._($scope["#childScope/0"], $scope);
}
const $onClick = ($scope) => function() {
	$scope.foo().innerHTML = "clicked";
};
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
