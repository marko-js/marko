// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $f = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "f/6", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_opts_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_opts($scope, input.opts);
const $input_opts = ($scope, input_opts) => $input_opts_fn($scope, input_opts?.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_label__OR__k = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(1, ($scope) => $input_opts($scope["#childScope/0"], { [$scope._.k]: $opts($scope) })), "#text/0", 0);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__k);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__k._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__k = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__k);
const $k = /*@__PURE__*/ _const("k");
function $setup($scope) {
	$k($scope, "fn");
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
const $opts = ($scope) => function() {
	return "f:" + $scope._.input_label;
};
_resumed["__tests__/template.marko_1/opts"] = $opts;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
