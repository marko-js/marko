// tags/widget/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_renderer_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_renderer = $dynamicTag;
const $input$1 = ($scope, input) => $input_renderer($scope, input.renderer);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__item_tag = ($scope, item_tag) => $input_renderer($scope["#childScope/0"], item_tag);
const $for_content__$params = ($scope, $params2) => $for_content__item_tag($scope, $params2[0]?.tag);
const $for = /*@__PURE__*/ _for_of("#ul/0", /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
