// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n$1($scope["#childScope/0"], $scope._.input_n))));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$if_content__input_w._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_w = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_w#0:5/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "input_w", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_w$1($scope["#childScope/0"], $scope._.input_w))));
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
const $List_content__walks = "b%c";
const $List_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($List_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($List_content__walks);
const $for_content__input_w = /*@__PURE__*/ _fill_closure("__tests__/tags/card.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/7", ($scope) => _text($scope["#text/1"], $scope._._.input_w), ($scope) => $scope._._, "__tests__/tags/card.marko_2_input_w#0:5/subscribe"), 0);
const $for_content__setup = $for_content__input_w;
const $for_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $for_content__$params = ($scope, $params3) => $for_content__x($scope, $params3[0]);
const $List_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<li><!> <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $List_content__items = ($scope, items) => $List_content__for($scope, [items]);
const $List_content__$params = ($scope, $params2) => $List_content__$temp($scope, $params2[0]);
const $List_content__$temp = ($scope, $temp) => $List_content__items($scope, $temp.items);
const $k = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "k/6", ($scope) => $List_content__items($scope["#childScope/0"], $scope.k));
const $input_n = ($scope, input_n) => $k($scope, [input_n]);
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$k($scope, []);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($for_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_w", $input_w__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
