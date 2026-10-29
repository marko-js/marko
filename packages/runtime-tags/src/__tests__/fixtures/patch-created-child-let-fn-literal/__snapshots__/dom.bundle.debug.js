// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/outer.marko
const $template = "<button>plain</button><section> </section>";
const $walks = " bD l";
const $input_label__OR__f = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.f($scope.input_label))));
const $f2 = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "f/5", $input_label__OR__f);
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f2($scope, (v) => v);
}));
function $setup($scope) {
	$f2($scope, $f);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__f);
const $input = ($scope, input) => $input_label($scope, input.label);
function $f(v) {
	return "[" + v + "]";
}
_resumed["__tests__/tags/outer.marko_0/f"] = $f;
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
