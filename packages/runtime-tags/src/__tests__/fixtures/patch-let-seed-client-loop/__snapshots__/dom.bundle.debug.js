// template.marko
const $template = "<button>add</button><!><!>";
const $walks = " b%c";
const $for_content__x = /*@__PURE__*/ _let("x/4", ($scope) => _text($scope["#text/1"], $scope.x));
const $for_content__input_v = /*@__PURE__*/ _fill_signal("input_v __tests__/template.marko_fill0", /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__x($scope, $scope._.input_v)));
const $for_content__setup = ($scope) => {
	$for_content__input_v._($scope);
	$for_content__input_w._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content__input_w = /*@__PURE__*/ _fill_signal("input_w __tests__/template.marko_fill1", /*@__PURE__*/ _for_closure("#text/1", ($scope) => _text($scope["#text/2"], $scope._.input_w)));
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/1", "<p><!>:<!> <!></p>", "D%c%c%", $for_content__setup);
const $n = /*@__PURE__*/ _let("n/6", ($scope) => $for($scope, [
	$scope.n,
	0,
	1
]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $for_content__input_v);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_w", $for_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
