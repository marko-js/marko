// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $else_content__input_w = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_w", /*@__PURE__*/ _closure_get("input_w/8", ($scope) => _text($scope["#text/0"], $scope._._.input_w), ($scope) => $scope._._, "__tests__/template.marko_3_input_w#0:5/subscribe"), 1);
const $else_content__setup = $else_content__input_w;
const $if_content2__input_w = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_w", /*@__PURE__*/ _closure_get("input_w/8", ($scope) => _text($scope["#text/0"], $scope._._.input_w), ($scope) => $scope._._, "__tests__/template.marko_2_input_w#0:5/subscribe"), 0);
const $if_content2__setup = $if_content2__input_w;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p>A <!></p>", "Db%", $if_content2__setup, "<p>B <!></p>", "Db%", $else_content__setup);
const $if_content__x = _let("x/1", ($scope) => $if_content__if($scope, $scope.x === "a" ? 0 : 1));
const $if_content__input_v = /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__x($scope, $scope._.input_v)));
const $if_content__setup = $if_content__input_v;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $on = _let("on/6", ($scope) => $if($scope, $scope.on ? 0 : 1));
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
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $if_content__input_v);
const $input_w__closure = /*@__PURE__*/ _closure($if_content2__input_w, $else_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
