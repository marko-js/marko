// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<p> </p><button>log</button>";
const $walks = "D l b";
const $setup = ($_) => {};
const $o = _let("o/6", ($scope) => $o_label($scope, $scope.o?.label));
const $a = _let("a/5", ($scope) => $o($scope, { label: $scope.a }));
const $input_label = $a;
const $o_label__script = _script("__tests__/tags/card.marko_0_o_label#7", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log($scope.o_label);
}));
const $o_label = /*@__PURE__*/ _const("o_label", ($scope) => {
	$o_label__script($scope);
	_text($scope["#text/0"], $scope.o_label);
});
const $input = ($scope, input) => $input_label($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, 0, $input);
