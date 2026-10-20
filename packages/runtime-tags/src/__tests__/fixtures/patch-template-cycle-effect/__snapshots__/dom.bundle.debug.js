// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_n = ($scope, input_n) => $input_n$1($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/b-tag.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_n = /*@__PURE__*/ _shell_init("__tests__/tags/b-tag.marko_1_input_n#0:3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, a_tag_default, ($_) => ({ n: $scope._.input_n - 1 }))));
const $if_content__setup = $if_content__input_n;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_n$1 = /*@__PURE__*/ _const("input_n", ($scope) => {
	$if_content__input_n($scope);
	$if($scope, $scope.input_n > 0 ? 0 : 1);
});
const $input$1 = ($scope, input) => $input_n$1($scope, input.n);
var b_tag_default = /*@__PURE__*/ _template("__tests__/tags/b-tag.marko", $template$1, "b%c", 0, $input$1);

// tags/a-tag.marko
const $template = /*@__PURE__*/ ((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&b`)("b%c");
const $input_n = ($scope, input_n) => {
	_text($scope["#text/0"], input_n);
	$input_n$1($scope["#childScope/1"], input_n);
};
const $setup__script = _script("__tests__/tags/a-tag.marko_0", ($scope) => console.log("a setup"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_n($scope, input.n);
var a_tag_default = /*@__PURE__*/ _template("__tests__/tags/a-tag.marko", $template, $walks, $setup, $input);
