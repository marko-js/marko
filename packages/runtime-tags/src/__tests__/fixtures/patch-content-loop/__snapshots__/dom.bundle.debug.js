// tags/widget/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $setup = () => {};
const $widget_content__item_text = /*@__PURE__*/ _closure_get("item_text", ($scope) => _text($scope["#text/0"], $scope._.item_text));
const $widget_content__setup = $widget_content__item_text;
const $widget_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $widget_content__setup);
const $for_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $widget_content($scope));
const $for_content__$params = ($scope, $params2) => $for_content__item_text($scope, $params2[0]?.text);
const $for_content__item_text__closure = /*@__PURE__*/ _closure($widget_content__item_text);
const $for_content__item_text = /*@__PURE__*/ _const("item_text", $for_content__item_text__closure);
const $for = /*@__PURE__*/ _for_of("#ul/0", /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
