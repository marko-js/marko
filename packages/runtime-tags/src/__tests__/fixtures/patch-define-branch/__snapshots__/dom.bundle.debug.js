// template.marko
const $foo_content__walks = "D l";
const $foo_content__template = "<em> </em>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$foo_content__setup($scope["#childScope/0"]);
};
const $foo_content__input_x = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_x", /*@__PURE__*/ _closure_get("input_x/6", ($scope) => _text($scope["#text/0"], $scope._.input_x), 0, "__tests__/template.marko_1_input_x#0:4/subscribe"), 0);
const $foo_content__setup = $foo_content__input_x;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($foo_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($foo_content__walks), $if_content__setup);
const $s = _let("s/5", ($scope) => $if($scope, $scope.s ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$s($scope, 1);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $input_x__closure = /*@__PURE__*/ _closure($foo_content__input_x);
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
