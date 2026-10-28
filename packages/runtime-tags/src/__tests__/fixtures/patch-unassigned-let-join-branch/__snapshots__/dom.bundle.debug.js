// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_b__OR__x = /*@__PURE__*/ _fill_if("__tests__/template.marko_fill0", "input_b", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_b#0:5_x#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.x + $scope._.input_b)), "#text/0", 0);
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_b__OR__x);
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__x._($scope);
};
const $if_content__x = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_b__OR__x);
const $x = _let("x/6", $if_content__x);
const $input_a = $x;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_show($scope, input.show);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_b", $if_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
