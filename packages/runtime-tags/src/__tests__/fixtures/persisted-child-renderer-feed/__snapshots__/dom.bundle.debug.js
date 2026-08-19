// tags/widget/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_renderer_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_renderer$1 = $dynamicTag;
const $input$1 = ($scope, input) => $input_renderer$1($scope, input.renderer);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_renderer = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_renderer", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_renderer$1($scope["#childScope/0"], $scope._.input_renderer)));
const $if_content__setup = $if_content__input_renderer;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_renderer($scope, input.renderer);
const $input_renderer = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_renderer", $if_content__input_renderer);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
