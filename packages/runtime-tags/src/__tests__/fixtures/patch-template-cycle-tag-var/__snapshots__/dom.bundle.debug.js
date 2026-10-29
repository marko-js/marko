// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n$1($scope["#childScope/0"], $scope._.input_n))));
const $if_content__setup = $if_content__input_n;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_n($scope, input.n);
};
const $input_n = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_n", $if_content__input_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/b-tag.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
_dynamic_tag_var_resume("#text/0");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, ($_) => $if_content__x);
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/tags/b-tag.marko_1_input_n#0:3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, a_tag_default, ($_) => ({ n: $scope._.input_n - 1 }))));
const $if_content__setup = $if_content__input_n;
const $if_content__x = _fill_var_resume("__tests__/tags/b-tag.marko_1_x#3/var", ($scope, x) => _text($scope["#text/2"], x));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><em> </em>", "b1bD ", $if_content__setup);
const $input_n$1 = /*@__PURE__*/ _const("input_n", ($scope) => {
	$if_content__input_n($scope);
	$if($scope, $scope.input_n > 0 ? 0 : 1);
});
const $input$1 = ($scope, input) => $input_n$1($scope, input.n);
var b_tag_default = /*@__PURE__*/ _template("__tests__/tags/b-tag.marko", $template$1, "b%c", 0, $input$1);

// tags/a-tag.marko
const $template = /*@__PURE__*/ ((_w0) => `<span>a<!></span>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_n = /*@__PURE__*/ _const("input_n", ($scope) => {
	_return($scope, $scope.input_n * 10);
	_text($scope["#text/0"], $scope.input_n);
	$input_n$1($scope["#childScope/1"], $scope.input_n);
});
const $input = ($scope, input) => $input_n($scope, input.n);
var a_tag_default = /*@__PURE__*/ _template("__tests__/tags/a-tag.marko", $template, $walks, 0, /*@__PURE__*/ _return_setup($input));
