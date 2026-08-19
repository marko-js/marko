// tags/card/index.marko
const $template$1 = "<section><header><!></header><h2> </h2><!></section>";
const $walks$1 = "E%lD l%l";
const $setup$1 = () => {};
const $input_header_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_header = $dynamicTag;
const $input_title$1 = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag2;
const $input$1 = ($scope, input) => {
	$input_header($scope, input.header);
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $header_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<b>static header</b>");
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "body");
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$input_header($scope["#childScope/0"], attrTag({ content: $header_content($scope) }));
	$input_content_direct($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
