// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => $input_fn($scope["#childScope/0"], $fn($scope)));
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $fn = ($scope) => function() {
	return "f:" + $scope.input_label;
};
_bind_resume("__tests__/template.marko_0/fn input_label", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/card.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__f = /*@__PURE__*/ _let("f/2", ($scope) => _text($scope["#text/1"], $scope.f()));
const $if_content__input_fn = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_fn#0:4/init", /*@__PURE__*/ _fill_signal("input_fn __tests__/tags/card.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__f($scope, $scope._.input_fn))));
const $if_content__setup__script = _script("__tests__/tags/card.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__f($scope, () => "x");
}));
const $if_content__setup = ($scope) => {
	$if_content__input_fn._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button> </button>", " D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_fn($scope, input.fn);
};
const $input_fn = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_fn", $if_content__input_fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, "b%c", 0, $input);
