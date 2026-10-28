// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label__OR__input_n = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill1 __tests__/template.marko_fill1/unpatched", "input_n", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0 __tests__/template.marko_fill0/unpatched", "input_label", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_label#0:4_input_n#0:5/init", 1, ($scope) => $input_opts($scope["#childScope/0"], {
	label: $scope._.input_label,
	n: $scope._.input_n
})), "#text/0", 0), "#text/0", 0);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__input_n);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__input_n._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_n = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__input_n);
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_n($scope, input.n);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
const $input_n = /*@__PURE__*/ _const("input_n", $if_content__input_n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<p><!> <!></p><button>show</button>";
const $walks = "D%c%l b";
const $o = /*@__PURE__*/ _let("o/6", ($scope) => {
	$o_label($scope, $scope.o?.label);
	$o_n($scope, $scope.o?.n);
});
const $o_n = /*@__PURE__*/ _const("o_n", ($scope) => _text($scope["#text/0"], $scope.o_n));
const $o_label__script = _script("__tests__/tags/card.marko_0_o_label#8", ($scope) => _on($scope["#button/2"], "click", function() {
	$shown($scope, $scope.o_label);
}));
const $o_label = /*@__PURE__*/ _const("o_label", $o_label__script);
const $input_opts = $o;
const $shown = /*@__PURE__*/ _let("shown/9", ($scope) => _text($scope["#text/1"], $scope.shown));
function $setup($scope) {
	$shown($scope, "-");
}
const $input = ($scope, input) => $input_opts($scope, input.opts);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
