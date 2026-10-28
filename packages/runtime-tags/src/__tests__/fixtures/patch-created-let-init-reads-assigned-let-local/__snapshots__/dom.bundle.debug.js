// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_a__OR__x = /*@__PURE__*/ _fill_signal("input_a __tests__/template.marko_fill0", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_a#0:4_x#4/init", 5, ($scope) => _text($scope["#text/3"], $scope.x + $scope._.input_a)), _if_closure, "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_signal("input_a __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__input_a__OR__x($scope);
	_text($scope["#text/1"], $scope._.input_a);
})));
const $if_content__k = /*@__PURE__*/ _const("k");
const $if_content__y__script = _script("__tests__/template.marko_1_y#6", ($scope) => _el_read($scope["#span/0"]).dataset.y = String($scope.y));
const $if_content__y = /*@__PURE__*/ _let("y/6", ($scope) => {
	$if_content__y__script($scope);
	$if_content__k($scope, $scope.y + 1);
});
const $if_content__x = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "x/4", ($scope) => {
	$if_content__y($scope, $scope.x);
	$if_content__input_a__OR__x($scope);
});
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$if_content__x($scope, $scope.k + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__setup__script($scope);
	$if_content__x($scope, 1);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span><button> </button>", " D l D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
