// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $if_content__input_foo = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_foo#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_foo", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_foo$1($scope["#childScope/0"], $scope._.input_foo))));
const $if_content__setup = ($scope) => {
	$if_content__input_foo._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_foo($scope, input.foo);
};
const $input_foo = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_foo", $if_content__input_foo);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// tags/child.marko
const $template = "<em> </em><button>set</button>";
const $walks = "D l b";
const $x = _let("x/5", ($scope) => $x_length($scope, $scope.x?.length));
const $x_length__script = _script("__tests__/tags/child.marko_0_x_length#6", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.x_length);
}));
const $x_length = /*@__PURE__*/ _const("x_length", $x_length__script);
const $input_foo = $x;
const $count = _let("count/7", ($scope) => _text($scope["#text/0"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $input = ($scope, input) => $input_foo($scope, input.foo);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
