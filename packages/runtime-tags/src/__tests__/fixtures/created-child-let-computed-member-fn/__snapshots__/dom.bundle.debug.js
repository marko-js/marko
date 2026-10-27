// tags/card.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $o = /*@__PURE__*/ _let("o/4", ($scope) => $o_fn($scope, $scope.o?.fn));
const $f = ($scope, f) => _text($scope["#text/0"], f());
const $o_fn = /*@__PURE__*/ _const("o_fn", ($scope) => $f($scope, $scope.o_fn));
const $input_opts = $o;
const $input$1 = ($scope, input) => $input_opts($scope, input.opts);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_label__OR__k = /*@__PURE__*/ _or(1, ($scope) => $input_opts($scope["#childScope/0"], { [$scope._.k]() {
	return "f:" + $scope._.input_label;
} }));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__k);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__k._($scope);
};
const $if_content__k = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__k);
const $k = /*@__PURE__*/ _const("k");
function $setup($scope) {
	$k($scope, "fn");
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
