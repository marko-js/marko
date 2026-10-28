// tags/card.marko
const $template$1 = "<p> </p><p> </p>";
const $walks$1 = "D lD l";
const $setup$1 = ($_) => {};
const $input_opts_label = ($scope, input_opts_label) => _text($scope["#text/0"], input_opts_label);
const $all = /*@__PURE__*/ _let("all/6", ($scope) => $all_opts($scope, $scope.all?.opts));
const $all_opts = /*@__PURE__*/ _const("all_opts", ($scope) => $all_opts_fn($scope, $scope.all_opts?.fn));
const $f = ($scope, f) => _text($scope["#text/1"], f());
const $all_opts_fn = /*@__PURE__*/ _const("all_opts_fn", ($scope) => $f($scope, $scope.all_opts_fn));
const $input$1 = ($scope, input) => {
	$input_opts_label($scope, input.opts?.label);
	$all($scope, input);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { opts: {
	fn() {
		return "f:" + $scope._.input_label;
	},
	label: $scope._.input_label
} }));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
