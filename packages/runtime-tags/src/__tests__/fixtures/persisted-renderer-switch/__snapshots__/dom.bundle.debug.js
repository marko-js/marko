// tags/banner/index.marko
const $template$2 = "<b>banner</b>";
const $walks$2 = "b";
const $setup$2 = () => {};
var banner_default = /*@__PURE__*/ _template("__tests__/tags/banner/index.marko", $template$2, "b");

// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_renderer_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_renderer = $dynamicTag;
const $input$1 = ($scope, input) => $input_renderer($scope, input.renderer);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)("D%l");
const $if_content__input_kind = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_kind", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_renderer($scope["#childScope/0"], $scope._.input_kind === "banner" ? banner_default : $scope._.input_kind)));
const $if_content__setup = $if_content__input_kind;
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input_kind = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_kind", ($scope) => {
	$input_renderer($scope["#childScope/0"], $scope.input_kind === "banner" ? banner_default : $scope.input_kind);
	$if_content__input_kind($scope);
});
const $input = ($scope, input) => $input_kind($scope, input.kind);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
