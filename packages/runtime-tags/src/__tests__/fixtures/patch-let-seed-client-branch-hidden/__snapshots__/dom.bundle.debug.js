// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__x = /*@__PURE__*/ _let("x/1", ($scope) => _text($scope["#text/0"], $scope.x));
const $if_content__input_v = /*@__PURE__*/ _fill_signal("input_v __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__x($scope, $scope._.input_v)));
const $if_content__setup = $if_content__input_v;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_v($scope, input.v);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $if_content__input_v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
