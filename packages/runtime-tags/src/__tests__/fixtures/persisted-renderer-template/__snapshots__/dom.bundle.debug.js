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
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button> </button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& D m`)("D%l");
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_kind = ($scope, input_kind) => $input_renderer($scope["#childScope/0"], input_kind === "banner" ? banner_default : input_kind);
const $input = ($scope, input) => $input_kind($scope, input.kind);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
