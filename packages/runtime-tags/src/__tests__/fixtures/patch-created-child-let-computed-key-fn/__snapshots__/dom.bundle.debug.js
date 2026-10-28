// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_label__OR__k = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_label#0:4_k#0:5/init", 1, ($scope) => $input_opts($scope["#childScope/0"], { [$scope._.k]() {
	return "f:" + $scope._.input_label;
} })), "#text/0", 0);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $f = /*@__PURE__*/ _let("f/6", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_opts_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_opts($scope, input.opts);
const $input_opts = ($scope, input_opts) => $input_opts_fn($scope, input_opts?.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
