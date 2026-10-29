// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__value_content = /*@__PURE__*/ _init_resume("__tests__/tags/outer.marko_1_value_content#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => "value" in $scope._ && $if_content__dynamicTag($scope, $scope._.value_content)));
const $if_content__setup = ($scope) => {
	$if_content__value_content._($scope);
	$if_content__value_n._($scope);
};
const $if_content__value_n = _resumed["__tests__/tags/outer.marko_1_value_n#0:7/init"] = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.value_n));
const $value = /*@__PURE__*/ _let("value/5", ($scope) => {
	$value_content($scope, $scope.value?.content);
	$value_n($scope, $scope.value?.n);
});
const $value_content = /*@__PURE__*/ _const("value_content", $if_content__value_content);
const $value_n = /*@__PURE__*/ _const("value_n", $if_content__value_n);
const $input_data = $value;
const $if = /*@__PURE__*/ _if("#text/0", "<section><!><b> </b></section>", "D%bD ", $if_content__setup);
const $input_more$1 = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_data($scope, input.data);
	$input_more$1($scope, input.more);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $Body_content = _content("__tests__/template.marko_1*content", "<em>body</em>");
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $input_n__OR__Body_content = /*@__PURE__*/ _or(7, ($scope) => $input_data($scope["#childScope/0"], {
	content: $scope.Body_content,
	n: $scope.input_n
}));
const $Body_content2 = /*@__PURE__*/ _const("Body_content", $input_n__OR__Body_content);
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__OR__Body_content);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_more($scope, input.more);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
