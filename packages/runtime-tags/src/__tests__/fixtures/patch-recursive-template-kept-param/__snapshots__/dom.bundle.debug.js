// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_n($scope["#childScope/0"], 2);
	$input_content($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/keeper.marko
const $template$1 = "<button class=toggle>t</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/keeper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/keeper.marko_fill1", "open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/keeper.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/keeper.marko_fill0", "input_content", $if_content__input_content);
var keeper_default = /*@__PURE__*/ _template("__tests__/tags/keeper.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/level.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $level_content__input_n = /*@__PURE__*/ _init_resume("__tests__/tags/level.marko_2_input_n#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/level.marko_fill0", "input_n", /*@__PURE__*/ _closure_get("input_n/7", ($scope) => _text($scope["#text/0"], $scope._._.input_n), ($scope) => $scope._._, "__tests__/tags/level.marko_2_input_n#0:4/subscribe"), 0));
const $level_content__setup = ($scope) => {
	$level_content__input_n($scope);
	$level_content__input_label($scope);
};
const $level_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/level.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/level.marko_fill1 __tests__/tags/level.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/level.marko_2_input_label#0:5/subscribe"), 0));
const $level_content = _content("__tests__/tags/level.marko_2*content", "<em><!>:<!></em>", "D%c%", $level_content__setup);
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/tags/level.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/level.marko_fill0", "input_n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_n($scope["#childScope/0"], $scope._.input_n - 1))));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$if_content__input_label._($scope);
	$setup($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $level_content($scope));
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/level.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/level.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_label))));
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/1"], input_content);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), $if_content__setup);
const $input_n__closure = /*@__PURE__*/ _closure($level_content__input_n);
const $input_n = /*@__PURE__*/ _fill_const("__tests__/tags/level.marko_fill0", "input_n", ($scope) => {
	$if_content__input_n($scope);
	$input_n__closure($scope);
	$if($scope, $scope.input_n ? 0 : 1);
}, ($scope) => {
	$if_content__input_n($scope);
	$input_n__closure($scope);
});
const $input_label__closure = /*@__PURE__*/ _closure($level_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/level.marko_fill1", "input_label", ($scope) => {
	$input_label__closure($scope);
	$if_content__input_label($scope);
}, $input_label__closure);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_label($scope, input.label);
	$input_content($scope, input.content);
};
var level_default = /*@__PURE__*/ _template("__tests__/tags/level.marko", $template, $walks, $setup, $input);
