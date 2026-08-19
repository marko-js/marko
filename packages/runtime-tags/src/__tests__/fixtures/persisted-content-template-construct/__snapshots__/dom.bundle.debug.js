// tags/banner/index.marko
const $template$2 = "<b>banner</b>";
const $walks$2 = "b";
const $setup$2 = () => {};
var banner_default = /*@__PURE__*/ _template("__tests__/tags/banner/index.marko", $template$2, "b");

// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__setup = ($scope) => $input_content($scope["#childScope/0"], banner_default);
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
