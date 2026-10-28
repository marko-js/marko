// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $i = /*@__PURE__*/ _let("i/3", ($scope) => $i_opts($scope, $scope.i?.opts));
const $i_opts = /*@__PURE__*/ _const("i_opts", ($scope) => $i_opts_fn($scope, $scope.i_opts?.fn));
const $f = ($scope, f) => _text($scope["#text/0"], f());
const $i_opts_fn = /*@__PURE__*/ _const("i_opts_fn", ($scope) => $f($scope, $scope.i_opts_fn));
const $input$1 = $i;
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { opts: attrTag({ fn: function() {
	return "f:" + $scope._.input_label;
} }) }))));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
