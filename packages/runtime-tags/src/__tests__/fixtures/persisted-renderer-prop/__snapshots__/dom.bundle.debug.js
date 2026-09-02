// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_body = /*@__PURE__*/ _fill_join("__tests__/tags/panel/index.marko0", "input_body", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_body)));
const $if_content__setup = $if_content__input_body;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_open($scope, input.open);
	$input_body($scope, input.body);
};
const $input_body = /*@__PURE__*/ _fill_const("__tests__/tags/panel/index.marko0", "input_body", $if_content__input_body);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $extra_content__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], $scope._.input_title)), 0);
const $extra_content__setup = $extra_content__input_title;
const $extra_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $extra_content__setup);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_open($scope["#childScope/0"], $scope.count % 2 === 0));
const $extra = ($scope, extra) => $input_body($scope["#childScope/0"], extra);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$extra($scope, { content: $extra_content($scope) });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($extra_content__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
