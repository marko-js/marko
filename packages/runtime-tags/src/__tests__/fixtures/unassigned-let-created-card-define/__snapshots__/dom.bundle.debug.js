// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $if_content__input_w$1 = /*@__PURE__*/ _closure_get("input_w/6", ($scope) => _text($scope["#text/0"], $scope._._.input_w), ($scope) => $scope._._, "__tests__/tags/card.marko_2_input_w#0:4/subscribe");
const $if_content__setup$1 = $if_content__input_w$1;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup$1);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__open($scope, $temp.open);
const $k = /*@__PURE__*/ _let("k/5", ($scope) => $Panel_content__open($scope["#childScope/0"], $scope.k));
const $input_n$1 = $k;
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
}
const $input$1 = ($scope, input) => {
	$input_n$1($scope, input.n);
	$input_w$1($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($if_content__input_w$1);
const $input_w$1 = /*@__PURE__*/ _const("input_w", $input_w__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n$1($scope["#childScope/0"], $scope._.input_n));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$if_content__input_w._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_w = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_w$1($scope["#childScope/0"], $scope._.input_w));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_n = /*@__PURE__*/ _const("input_n", $if_content__input_n);
const $input_w = /*@__PURE__*/ _const("input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
