// tags/outer.marko
const $template$1 = "<button>plain</button><section></section><i></i><p>body</p>";
const $walks$1 = " b b b b";
const $input_label__OR__f__script = _script("__tests__/tags/outer.marko_0_input_label#7_f#8", ($scope) => {
	_attrs_script($scope, "#section/1");
	_attrs_script($scope, "#i/2");
	_attrs_script($scope, "#p/3");
});
const $input_label__OR__f = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or(9, ($scope) => {
	_attrs_content($scope, "#section/1", $scope.f($scope.input_label));
	_attrs_content($scope, "#i/2", { title: $scope.f($scope.input_label).title });
	_attrs($scope, "#p/3", { title: $scope.f($scope.input_label).title });
	$input_label__OR__f__script($scope);
}));
const $f = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "f/8", $input_label__OR__f);
const $input_fmt = $f;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, (v) => ({ title: "p-" + v }));
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
const $Body_content = _content("__tests__/template.marko_2*content", "<b>body</b>");
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__wrap._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__wrap = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_fmt($scope["#childScope/0"], $scope._.wrap));
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $wrap2 = /*@__PURE__*/ _const("wrap");
const $Body_content2 = /*@__PURE__*/ _const("Body_content", ($scope) => $wrap2($scope, $wrap($scope)));
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
const $wrap = ($scope) => (v) => ({
	title: "w-" + v,
	content: $scope.Body_content
});
_resumed["__tests__/template.marko_0/wrap"] = $wrap;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
