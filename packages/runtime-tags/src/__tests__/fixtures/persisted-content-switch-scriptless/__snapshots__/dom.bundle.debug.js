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
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D%l");
const $elseif_content__input_kind = /*@__PURE__*/ _closure_get("input_kind", ($scope) => _text($scope["#text/0"], $scope._._.input_kind), ($scope) => $scope._._);
const $elseif_content__setup = $elseif_content__input_kind;
const $widget_content__if = /*@__PURE__*/ _if("#text/0", "<b>A</b>", 0, 0, "<i>B:<!></i>", "Db%", $elseif_content__setup);
const $widget_content__input_kind = /*@__PURE__*/ _closure_get("input_kind", ($scope) => $widget_content__if($scope, $scope._.input_kind === "a" ? 0 : $scope._.input_kind === "b" ? 1 : 2));
const $widget_content__setup = $widget_content__input_kind;
const $widget_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $widget_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $widget_content($scope));
}
const $input = ($scope, input) => $input_kind($scope, input.kind);
const $input_kind__closure = /*@__PURE__*/ _closure($widget_content__input_kind, $elseif_content__input_kind);
const $input_kind = /*@__PURE__*/ _const("input_kind", $input_kind__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
