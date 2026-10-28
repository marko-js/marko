// template.marko
const $Wrap_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Wrap_content__template = $template$1;
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Wrap_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $Wrap_content__w_fn = ($scope, w_fn) => $input_fn($scope["#childScope/0"], w_fn);
const $Wrap_content__$params = ($scope, $params2) => $Wrap_content__w($scope, $params2[0]);
const $Wrap_content__w = ($scope, w) => $Wrap_content__w_fn($scope, w.fn);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Wrap_content__w_fn($scope["#childScope/0"], function() {
	return "f:" + $scope._.input_label;
}))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Wrap_content__setup($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $f = _let("f/5", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
