// template.marko
const $foo_content__walks = "D l%c", $foo_content__template = "<b> </b><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks);
const $if_content__n = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $foo_content__tag_param_($scope["#childScope/0"], $scope._.n - 1));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$foo_content__setup._($scope["#childScope/0"], $scope._._);
};
const $foo_content__input_x = /*@__PURE__*/ _closure_get("input_x", ($scope) => _text($scope["#text/0"], $scope._.input_x));
const $foo_content__setup = /*@__PURE__*/ _child_setup($foo_content__input_x);
const $foo_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks), $if_content__setup);
const $foo_content__tag_param_ = /*@__PURE__*/ _const("n", ($scope) => {
	$foo_content__if($scope, $scope.n ? 0 : 1);
	$if_content__n($scope);
});
const $foo_content__$params = ($scope, $params2) => $foo_content__tag_param_($scope, $params2[0]);
function $setup($scope) {
	$foo_content__setup._($scope["#childScope/0"], $scope);
	$foo_content__tag_param_($scope["#childScope/0"], 2);
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $input_x__closure = /*@__PURE__*/ _closure($foo_content__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
