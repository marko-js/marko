// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__input_w = /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/1"], $scope._.input_w)));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$if_content__d._($scope);
};
const $if_content__x = _let("x/2", ($scope) => _text($scope["#text/0"], $scope.x));
const $if_content__d = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "d", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__x($scope, $scope._.d)));
const $d = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "d", $if_content__d);
const $input_v = ($scope, input_v) => $d($scope, input_v + "!");
const $if = /*@__PURE__*/ _if("#text/1", "<p><!> <!></p>", "D%c%", $if_content__setup);
const $on = _let("on/7", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
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
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
