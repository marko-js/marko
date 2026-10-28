// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/wrap.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $if_content__x__script = _script("__tests__/tags/wrap.marko_2_x#1:1", ($scope) => console.log("effect", $scope._.x));
const $if_content__x = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_2_x#1:1/init", /*@__PURE__*/ _fill("__tests__/tags/wrap.marko_fill0", "x", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_text($scope["#text/0"], $scope._.x);
	$if_content__x__script($scope);
})));
const $if_content__setup = $if_content__x;
const $Card_content__x = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "x", $if_content__x);
const $Card_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_label#0:3/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $Card_content__x($scope, $scope._.input_label + "!"), 0, "__tests__/tags/wrap.marko_1_input_label#0:3/subscribe"));
const $Card_content__setup = ($scope) => {
	$Card_content__input_label($scope);
	$Card_content__input_show($scope);
};
const $Card_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Card_content__input_show = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_show#0:4/init", /*@__PURE__*/ _closure_get("input_show/6", ($scope) => $Card_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/tags/wrap.marko_1_input_show#0:4/subscribe"));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Card_content__setup($scope["#childScope/0"]);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_show__closure = /*@__PURE__*/ _closure($Card_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);
