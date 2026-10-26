// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n$1($scope["#childScope/0"], $scope._.input_n))));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$if_content__input_w._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_w = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_w#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_w", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_w$1($scope["#childScope/0"], $scope._.input_w))));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
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
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<div></div><button>x</button>";
const $walks = " b b";
const $if_content2__k = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_3_k#0:6/init", /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $Panel_content__open($scope["#childScope/0"], $scope._.k)));
const $if_content2__setup = ($scope) => {
	$if_content2__k._($scope);
	$scope["#childScope/0"]._ = $scope._;
};
const $if_content__input_w = /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/7", ($scope) => _text($scope["#text/0"], $scope._._.input_w), ($scope) => $scope._._, "__tests__/tags/card.marko_2_input_w#0:5/subscribe"), 0);
const $if_content__setup = $if_content__input_w;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__open($scope, $temp.open);
const $k = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "k/6", $if_content2__k);
const $input_n = $k;
const $if = /*@__PURE__*/ _if("#div/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content2__setup);
const $input_w__closure = /*@__PURE__*/ _closure($if_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_w", ($scope) => {
	$input_w__closure($scope);
	$if($scope, $scope.input_w ? 0 : 1);
}, $input_w__closure);
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$k($scope, 0);
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
