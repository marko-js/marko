// template.marko
const $Wrap_content__walks = "D l%c";
const $Wrap_content__template = "<span> </span><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $B_content = _content("__tests__/template.marko_3*content", "b");
const $A_content = _content("__tests__/template.marko_2*content", "a");
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Wrap_content__input_t__OR__content = /*@__PURE__*/ _fill_join("| __tests__/template.marko_fill0", "input_t", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_t#0:3_content#5/init", 6, ($scope) => $Wrap_content__dynamicTag($scope, $scope.content, ($_) => ({ title: $scope._.input_t }))));
const $Wrap_content__input_t = /*@__PURE__*/ _closure_get("input_t/9", $Wrap_content__input_t__OR__content, 0, "__tests__/template.marko_1_input_t#0:3/subscribe");
const $Wrap_content__setup = $Wrap_content__input_t;
const $Wrap_content__n = ($scope, n) => _text($scope["#text/0"], n);
const $Wrap_content__content = /*@__PURE__*/ _const("content", $Wrap_content__input_t__OR__content);
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__$temp($scope, $params2[0]);
const $Wrap_content__$temp = ($scope, $temp) => {
	$Wrap_content__n($scope, $temp.n);
	$Wrap_content__content($scope, $temp.content);
};
const $input_x__OR__A__OR__B = /*@__PURE__*/ _or(8, ($scope) => $Wrap_content__content($scope["#childScope/0"], $scope.input_x === 1 ? $scope.A : $scope.B), 2);
const $A = /*@__PURE__*/ _const("A", $input_x__OR__A__OR__B);
const $B = /*@__PURE__*/ _const("B", $input_x__OR__A__OR__B);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Wrap_content__setup($scope["#childScope/0"]);
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
}
const $input_n = ($scope, input_n) => $Wrap_content__n($scope["#childScope/0"], input_n);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__A__OR__B);
const $input = ($scope, input) => {
	$input_t($scope, input.t);
	$input_n($scope, input.n);
	$input_x($scope, input.x);
};
const $input_t__closure = /*@__PURE__*/ _closure($Wrap_content__input_t);
const $input_t = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_t", $input_t__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
