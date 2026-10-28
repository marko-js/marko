// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill_signal("input_n __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n$1($scope["#childScope/0"], $scope._.input_n))));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$if_content__input_w._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_w = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_w#0:5/init", /*@__PURE__*/ _fill_signal("input_w __tests__/template.marko_fill1", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_w$1($scope["#childScope/0"], $scope._.input_w))));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_n = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_n", $if_content__input_n);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<!><button>x</button>";
const $walks = "/&b b";
const $Panel_content__input_w__OR__k__script = _script("__tests__/tags/card.marko_1_input_w#0:5_k#0:6", ($scope) => console.log("k", $scope._.k, $scope._.input_w));
const $Panel_content__input_w__OR__k = /*@__PURE__*/ _or_resume("__tests__/tags/card.marko_1_input_w#0:5_k#0:6/init", 0, $Panel_content__input_w__OR__k__script);
const $Panel_content__input_w = /*@__PURE__*/ _closure_get("input_w/7", $Panel_content__input_w__OR__k, 0, "__tests__/tags/card.marko_1_input_w#0:5/subscribe");
const $Panel_content__setup = ($scope) => {
	$Panel_content__input_w($scope);
	$Panel_content__k($scope);
};
const $Panel_content__k = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_k#0:6/init", /*@__PURE__*/ _closure_get("k/8", $Panel_content__input_w__OR__k, 0, "__tests__/tags/card.marko_1_k#0:6/subscribe"));
const $k__closure = /*@__PURE__*/ _closure($Panel_content__k);
const $k = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "k/6", $k__closure);
const $input_n = $k;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$k($scope, +$scope.k + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Panel_content__setup($scope["#childScope/0"]);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($Panel_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
