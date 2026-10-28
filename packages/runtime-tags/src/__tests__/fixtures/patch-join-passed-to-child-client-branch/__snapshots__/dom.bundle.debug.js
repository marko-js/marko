// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $c = ($scope, c) => $input_v($scope["#childScope/0"], c);
const $input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_a __tests__/template.marko_fill0,input_b __tests__/template.marko_fill1", /*@__PURE__*/ _or(5, ($scope) => $c($scope, $scope.input_a + $scope.input_b)));
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/child.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__input_v = /*@__PURE__*/ _fill_signal("input_v __tests__/tags/child.marko_fill0", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_v)));
const $if_content__setup = $if_content__input_v;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input = ($scope, input) => $input_v($scope, input.v);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_v", $if_content__input_v);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
