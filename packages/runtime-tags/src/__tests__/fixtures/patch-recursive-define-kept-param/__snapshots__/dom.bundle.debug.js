// tags/keeper.marko
const $template$1 = "<button class=toggle>t</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/keeper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup$1 = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/keeper.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/keeper.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/keeper.marko_fill0", "input_content", $if_content__input_content);
var keeper_default = /*@__PURE__*/ _template("__tests__/tags/keeper.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Level_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Level_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($Level_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Level_content__walks);
const $Level_content2__n = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "n", /*@__PURE__*/ _closure_get("n/7", ($scope) => _text($scope["#text/0"], $scope._._.n), ($scope) => $scope._._, "__tests__/template.marko_3_n#1:4/subscribe"), 0);
const $Level_content2__setup = ($scope) => {
	$Level_content2__n($scope);
	$Level_content2__label($scope);
};
const $Level_content2__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_label#1:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "label", /*@__PURE__*/ _closure_get("label/8", ($scope) => _text($scope["#text/1"], $scope._._.label), ($scope) => $scope._._, "__tests__/template.marko_3_label#1:5/subscribe"), 0));
const $Level_content2 = _content("__tests__/template.marko_3*content", "<em><!>:<!></em>", "D%c%", $Level_content2__setup);
const $if_content__n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Level_content__tag_input_n($scope["#childScope/0"], $scope._.n - 1)));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$if_content__label._($scope);
	$Level_content__setup($scope["#childScope/0"]);
	$Level_content__tag_input_content($scope["#childScope/0"], $Level_content2($scope));
};
const $if_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_label#1:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Level_content__tag_input_label($scope["#childScope/0"], $scope._.label))));
const $Level_content__setup = ($scope) => $setup$1($scope["#childScope/1"]);
const $Level_content__tag_input_content = ($scope, content) => $input_content($scope["#childScope/1"], content);
const $Level_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Level_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Level_content__walks), $if_content__setup);
const $Level_content__tag_input_n__closure = /*@__PURE__*/ _closure($Level_content2__n);
const $Level_content__tag_input_n = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "n", ($scope) => {
	$if_content__n($scope);
	$Level_content__tag_input_n__closure($scope);
	$Level_content__if($scope, $scope.n ? 0 : 1);
}, ($scope) => {
	$if_content__n($scope);
	$Level_content__tag_input_n__closure($scope);
});
const $Level_content__tag_input_label__closure = /*@__PURE__*/ _closure($Level_content2__label);
const $Level_content__tag_input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "label", ($scope) => {
	$if_content__label($scope);
	$Level_content__tag_input_label__closure($scope);
});
const $Level_content__$params = ($scope, $params2) => $Level_content__$temp($scope, $params2[0]);
const $Level_content__$temp = ($scope, $temp) => {
	$Level_content__tag_input_n($scope, $temp.n);
	$Level_content__tag_input_label($scope, $temp.label);
	$Level_content__tag_input_content($scope, $temp.content);
};
function $setup($scope) {
	$Level_content__setup($scope["#childScope/0"]);
	$Level_content__tag_input_n($scope["#childScope/0"], 2);
	$Level_content__tag_input_content($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $Level_content__tag_input_label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
