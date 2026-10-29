// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n$1($scope["#childScope/0"], $scope._.input_n))));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
};
const $input_n = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_n", $if_content__input_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks);
const $if_content__k = /*@__PURE__*/ _closure_get("k/6", ($scope) => _text($scope["#text/0"], $scope._._.k), ($scope) => $scope._._, "__tests__/tags/card.marko_2_k#0:5/subscribe");
const $if_content__setup = $if_content__k;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__open($scope, $temp.open);
const $k__closure = /*@__PURE__*/ _closure($if_content__k);
const $k = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "k/5", ($scope) => {
	$Panel_content__open($scope["#childScope/0"], $scope.k);
	$k__closure($scope);
});
const $input_n = $k;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$k($scope, 0);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$setup__script($scope);
}
const $input = ($scope, input) => $input_n($scope, input.n);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
