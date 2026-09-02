// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_title$1 = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
const $card_content2__$global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_3_$global_brand#6/global", /*@__PURE__*/ _closure_get("$global_brand", ($scope) => _text($scope["#text/0"], $scope.$global.brand), ($scope) => $scope._._));
const $card_content2__setup = $card_content2__$global_brand;
const $card_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<i> </i>", "D ", $card_content2__setup);
const $if_content__setup = ($scope) => {
	$input_content_direct($scope["#childScope/0"], $card_content2($scope));
	$input_title$1($scope["#childScope/0"], "x");
};
const $card_content__$global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_1_$global_brand#6/global", /*@__PURE__*/ _closure_get("$global_brand", ($scope) => _text($scope["#text/0"], $scope.$global.brand)));
const $card_content__setup = $card_content__$global_brand;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $card_content($scope));
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
