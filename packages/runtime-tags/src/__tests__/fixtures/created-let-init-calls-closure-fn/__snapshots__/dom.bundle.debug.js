// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__input_w__OR__y = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.y + $scope._._.input_w));
const $if_content2__input_w = /*@__PURE__*/ _closure_get("input_w/9", $if_content2__input_w__OR__y, ($scope) => $scope._._, "__tests__/template.marko_2_input_w#0:6/subscribe");
const $if_content2__setup = ($scope) => {
	$if_content2__input_w($scope);
	$if_content2__x._($scope);
	$if_content2__f._($scope);
};
const $if_content2__y = /*@__PURE__*/ _let("y/2", $if_content2__input_w__OR__y);
const $if_content2__x__OR__f = /*@__PURE__*/ _or(1, ($scope) => $if_content2__y($scope, $scope._.f($scope._.x)));
const $if_content2__x = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__x__OR__f);
const $if_content2__f = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__x__OR__f);
const $if_content__x = /*@__PURE__*/ _let("x/1");
const $if_content__input_v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__x($scope, $scope._.input_v));
const $if_content__f = /*@__PURE__*/ _const("f");
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$if_content__input_inner._($scope);
	$if_content__f($scope, $f);
};
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
	$input_inner($scope, input.inner);
	$input_w($scope, input.w);
};
const $input_v = /*@__PURE__*/ _const("input_v", $if_content__input_v);
const $input_inner = /*@__PURE__*/ _const("input_inner", $if_content__input_inner);
const $input_w__closure = /*@__PURE__*/ _closure($if_content2__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
function $f(v) {
	return v;
}
_resumed["__tests__/template.marko_1/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
