// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_w__OR__y = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_w#0:4_y#4/setup", 5, ($scope) => _text($scope["#text/0"], $scope.y + $scope._.input_w));
const $if_content__input_w = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_w#0:4/setup", "#text/0", 0, $if_content__input_w__OR__y);
const $if_content__y = _fill_let_resume("__tests__/template.marko_fill0", "y/4", $if_content__input_w__OR__y);
const $if_content__x__OR__f = /*@__PURE__*/ _or(3, ($scope) => $if_content__y($scope, $scope.f($scope.x)));
const $if_content__x = _let("x/1", $if_content__x__OR__f);
const $if_content__f = /*@__PURE__*/ _const("f", $if_content__x__OR__f);
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$if_content__x($scope, "a");
	$if_content__f($scope, $f);
};
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_w($scope, input.w);
	$input_show($scope, input.show);
};
const $input_w = /*@__PURE__*/ _const("input_w", $if_content__input_w);
function $f(v) {
	return v;
}
_resumed["__tests__/template.marko_1/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
