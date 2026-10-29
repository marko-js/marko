// tags/one.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $setup$1 = ($_) => {};
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Wrap_content__content__OR__t = /*@__PURE__*/ _or_resume("__tests__/tags/one.marko_1_content#3_t#4/init", 5, ($scope) => $Wrap_content__dynamicTag($scope, $scope.content, ($_) => ({ title: $scope.t })));
const $Wrap_content__content = /*@__PURE__*/ _const("content", $Wrap_content__content__OR__t);
const $Wrap_content__t = /*@__PURE__*/ _const("t", $Wrap_content__content__OR__t);
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__$temp($scope, $params2[0]);
const $Wrap_content__$temp = ($scope, $temp) => {
	$Wrap_content__content($scope, $temp.content);
	$Wrap_content__t($scope, $temp.t);
};
const $input_content = ($scope, input_content) => $Wrap_content__content($scope["#childScope/0"], input_content);
const $input_t = ($scope, input_t) => $Wrap_content__t($scope["#childScope/0"], input_t);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_t($scope, input.t);
};
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $one_content__input_y = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_y", /*@__PURE__*/ _closure_get("input_y/6", ($scope) => _text($scope["#text/0"], $scope._.input_y), 0, "__tests__/template.marko_1_input_y#0:4/subscribe"), 0);
const $one_content__setup = $one_content__input_y;
const $one_content = _content("__tests__/template.marko_1*content", "A<!>", "b%", $one_content__setup);
const $s = _let("s/5", ($scope) => $input_t($scope["#childScope/1"], $scope.s));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, $scope.s + "!");
}));
function $setup($scope) {
	$input_content($scope["#childScope/1"], $one_content($scope));
	$s($scope, "a");
	$setup__script($scope);
}
const $input = ($scope, input) => $input_y($scope, input.y);
const $input_y__closure = /*@__PURE__*/ _closure($one_content__input_y);
const $input_y = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_y", $input_y__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
