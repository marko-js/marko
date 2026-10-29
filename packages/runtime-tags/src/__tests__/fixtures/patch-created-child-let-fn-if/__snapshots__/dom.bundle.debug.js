// tags/outer.marko
const $template$1 = "<button>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if$1 = /*@__PURE__*/ _if("#text/1", "<b>yes</b>", 0, 0, "<i>no</i>");
const $input_label__OR__f = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or(7, ($scope) => $if$1($scope, $scope.f($scope.input_label) === "w-b" ? 0 : 1)));
const $f = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "f/6", $input_label__OR__f);
const $input_fmt = /*@__PURE__*/ _const("input_fmt", ($scope) => $f($scope, $scope.input_fmt));
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, $scope.f === $scope.input_fmt ? (v) => "p-" + v : $scope.input_fmt);
}));
const $setup$1 = $setup__script;
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__f);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

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
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
function $wrap(v) {
	return "w-" + v;
}
_resumed["__tests__/template.marko_0/wrap"] = $wrap;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
