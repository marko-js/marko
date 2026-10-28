// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_w__OR__y = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/0"], $scope.y + $scope._.input_w));
const $if_content__y = /*@__PURE__*/ _let("y/5", $if_content__input_w__OR__y);
const $if_content__x__OR__f = /*@__PURE__*/ _or(4, ($scope) => $if_content__y($scope, $scope.f($scope.x)));
const $if_content__x = /*@__PURE__*/ _let("x/2", $if_content__x__OR__f);
const $if_content__input_v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__x($scope, $scope._.input_v));
const $if_content__input_w__OR__g = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.f($scope._.input_w)));
const $if_content__f = /*@__PURE__*/ _const("f", ($scope) => {
	$if_content__x__OR__f($scope);
	$if_content__input_w__OR__g($scope);
});
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$if_content__input_w._($scope);
	$if_content__f($scope, $f);
};
const $if_content__input_w = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__input_w__OR__y($scope);
	$if_content__input_w__OR__g($scope);
});
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p><span> </span>", "D lD ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_v = /*@__PURE__*/ _const("input_v", $if_content__input_v);
const $input_w = /*@__PURE__*/ _const("input_w", $if_content__input_w);
function $f(v) {
	return v;
}
_resumed["__tests__/template.marko_1/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
