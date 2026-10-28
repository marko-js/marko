// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/0"], input_v);
const $input_w = ($scope, input_w) => $input_w$1($scope["#childScope/0"], input_w);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/child.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__x = /*@__PURE__*/ _let("x/2", ($scope) => _text($scope["#text/0"], $scope.x));
const $if_content__input_v = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_v", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__x($scope, $scope._.input_v)));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$if_content__input_w._($scope);
};
const $if_content__input_w = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill1", "input_w", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.input_w)));
const $if = /*@__PURE__*/ _if("#text/1", "<p><!> <!></p>", "D%c%", $if_content__setup);
const $on = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill2", "on/6", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_v = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_v", $if_content__input_v);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill1", "input_w", $if_content__input_w);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
