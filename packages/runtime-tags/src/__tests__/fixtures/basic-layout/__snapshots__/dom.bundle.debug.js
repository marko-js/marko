// tags/layout.marko
const $template$1 = "<body><!></body>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $content = $dynamicTag;
const $input$1 = ($scope, input) => $content($scope, input.content);
var layout_default = /* @__PURE__ */ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)("D%l");
const $layout_content__input_name = /* @__PURE__ */ _closure_get("name", ($scope) => _text($scope["#text/0"], $scope._.name));
const $layout_content__setup = $layout_content__input_name;
const $layout_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<h1>Hello <!></h1>", "Db%l", $layout_content__setup);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$content_direct($scope["#childScope/0"], $layout_content($scope));
}
const $input = ($scope, input) => $name($scope, input.name);
const $name__closure = /* @__PURE__ */ _closure($layout_content__input_name);
const $name = /* @__PURE__ */ _const("name", $name__closure);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
