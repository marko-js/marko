// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_mode($scope["#childScope/0"], true);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/frag-host.marko
const $template = "<section></section>";
const $walks = " b";
const $one_content__input_mode = /*@__PURE__*/ _init_resume("__tests__/tags/frag-host.marko_1_input_mode#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/frag-host.marko_fill0", "input_mode", /*@__PURE__*/ _closure_get("input_mode/7", ($scope) => _text($scope["#text/0"], $scope._.input_mode ? "x" : "y"), 0, "__tests__/tags/frag-host.marko_1_input_mode#0:3/subscribe"), 0));
const $one_content__setup = ($scope) => {
	$one_content__input_mode($scope);
	$one_content__input_b($scope);
};
const $one_content__input_b = /*@__PURE__*/ _init_resume("__tests__/tags/frag-host.marko_1_input_b#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/frag-host.marko_fill1", "input_b", /*@__PURE__*/ _closure_get("input_b/8", ($scope) => _text($scope["#text/1"], $scope._.input_b), 0, "__tests__/tags/frag-host.marko_1_input_b#0:4/subscribe"), 0));
const $one_content = _content("__tests__/tags/frag-host.marko_1*content", "<em><!> <!></em>", "D%c%", $one_content__setup);
const $input_mode__OR__one__script = _script("__tests__/tags/frag-host.marko_0_input_mode#3_one#5", ($scope) => _attrs_script($scope, "#section/0"));
const $input_mode__OR__one = /*@__PURE__*/ _fill_join("__tests__/tags/frag-host.marko_fill0", "input_mode", /*@__PURE__*/ _or_resume("__tests__/tags/frag-host.marko_0_input_mode#3_one#5/init", 6, ($scope) => {
	$input_mode__OR__one__script($scope);
	_attrs_content($scope, "#section/0", { content: $scope.input_mode ? $scope.one : null });
}));
const $one = /*@__PURE__*/ _const("one", $input_mode__OR__one);
function $setup($scope) {
	$one($scope, { content: $one_content($scope) });
}
const $input_mode__closure = /*@__PURE__*/ _closure($one_content__input_mode);
const $input_mode = /*@__PURE__*/ _fill_const("__tests__/tags/frag-host.marko_fill0", "input_mode", ($scope) => {
	$input_mode__OR__one($scope);
	$input_mode__closure($scope);
});
const $input = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_b($scope, input.b);
};
const $input_b__closure = /*@__PURE__*/ _closure($one_content__input_b);
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/frag-host.marko_fill1", "input_b", $input_b__closure);
var frag_host_default = /*@__PURE__*/ _template("__tests__/tags/frag-host.marko", $template, " b", $setup, $input);
