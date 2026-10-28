// tags/one.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks);
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Wrap_content__input_content__OR__t = /*@__PURE__*/ _fill_join("| __tests__/tags/one.marko_fill0", "input_content", /*@__PURE__*/ _or_resume("__tests__/tags/one.marko_1_input_content#0:3_t#3/init", 4, ($scope) => $Wrap_content__dynamicTag($scope, $scope._.input_content, ($_) => ({ title: $scope.t }))));
const $Wrap_content__input_content = /*@__PURE__*/ _closure_get("input_content/5", $Wrap_content__input_content__OR__t, 0, "__tests__/tags/one.marko_1_input_content#0:3/subscribe");
const $Wrap_content__setup = $Wrap_content__input_content;
const $Wrap_content__t = /*@__PURE__*/ _const("t", $Wrap_content__input_content__OR__t);
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__$temp($scope, $params2[0]);
const $Wrap_content__$temp = ($scope, $temp) => $Wrap_content__t($scope, $temp.t);
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Wrap_content__setup($scope["#childScope/0"]);
}
const $input_t = ($scope, input_t) => $Wrap_content__t($scope["#childScope/0"], input_t);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_t($scope, input.t);
};
const $input_content__closure = /*@__PURE__*/ _closure($Wrap_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/one.marko_fill0", "input_content", $input_content__closure);
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=z>z</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $one_content = _content("__tests__/template.marko_1*content", "A");
const $z = _let("z/5");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$z($scope, +$scope.z + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $one_content($scope));
	$setup__script($scope);
	$z($scope, 0);
}
const $input_y = ($scope, input_y) => $input_t($scope["#childScope/1"], input_y);
const $input = ($scope, input) => $input_y($scope, input.y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
