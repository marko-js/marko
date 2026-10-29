// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__value_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.value_content));
const $if_content__setup$1 = ($scope) => {
	$if_content__value_content._($scope);
	$if_content__value_n._($scope);
};
const $if_content__value_n = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.value_n));
const $value = /*@__PURE__*/ _let("value/5", ($scope) => {
	$value_content($scope, $scope.value?.content);
	$value_n($scope, $scope.value?.n);
});
const $value_content = /*@__PURE__*/ _const("value_content");
const $value_n = /*@__PURE__*/ _const("value_n");
const $input_data = $value;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<section><!><b> </b></section>", "D%bD ", $if_content__setup$1);
const $input_more$1 = ($scope, input_more) => $if$1($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_data($scope, input.data);
	$input_more$1($scope, input.more);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Body_content = _content("__tests__/template.marko_2*content", "<em>body</em>");
const $if_content__input_n__OR__Body_content = /*@__PURE__*/ _or(1, ($scope) => $input_data($scope["#childScope/0"], {
	content: $scope._.Body_content,
	n: $scope._.input_n
}));
const $if_content__input_n = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_n__OR__Body_content);
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$if_content__input_more._($scope);
	$if_content__Body_content._($scope);
};
const $if_content__input_more = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_more$1($scope["#childScope/0"], $scope._.input_more));
const $if_content__Body_content = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_n__OR__Body_content);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $Body_content2 = /*@__PURE__*/ _const("Body_content");
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_n($scope, input.n);
	$input_more($scope, input.more);
};
const $input_n = /*@__PURE__*/ _const("input_n", $if_content__input_n);
const $input_more = /*@__PURE__*/ _const("input_more", $if_content__input_more);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
