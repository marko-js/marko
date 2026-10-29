// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__wrap._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__wrap = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_fmt($scope["#childScope/0"], $scope._.wrap));
const $wrap2 = /*@__PURE__*/ _const("wrap");
function $setup($scope) {
	$wrap2($scope, $wrap);
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
function $wrap(v) {
	return "[" + v + "]";
}
_resumed["__tests__/template.marko_0/wrap"] = $wrap;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);

// tags/outer.marko
const $template = "<button>plain</button><p> </p><p> </p><p> </p>";
const $walks = " bD lD lD l";
const $input_label__OR__o = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_label#7_o#10/init", 12, ($scope) => "f" in $scope && _text($scope["#text/3"], $scope.o.f($scope.input_label))));
const $o = /*@__PURE__*/ _const("o", $input_label__OR__o);
const $input_label__OR__f = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_label#7_f#8/init", 9, ($scope) => "f" in $scope && _text($scope["#text/1"], [$scope.input_label].map($scope.f).join())));
const $input_label__OR__g = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_label#7_g#6/init", 11, ($scope) => "f" in $scope && _text($scope["#text/2"], $scope.f($scope.input_label))));
const $f = /*@__PURE__*/ _let("f/8", ($scope) => {
	$o($scope, { f: $scope.f });
	$input_label__OR__f($scope);
	$input_label__OR__g($scope);
});
const $input_fmt = $f;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, (v) => v);
}));
const $setup = $setup__script;
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_label", ($scope) => {
	$input_label__OR__f($scope);
	$input_label__OR__g($scope);
	$input_label__OR__o($scope);
});
const $input = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
