// tags/panel.marko
const $template$1 = "<div class=panel><h4> </h4><div class=body><!></div></div>";
const $walks$1 = "E lD%m";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_label($scope, input.label);
};
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $panel_content__p_text = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_2_p_text#1:4/init", "p_text/5", ($scope) => _text($scope["#text/0"], $scope._.p_text), 0, "__tests__/template.marko_2_p_text#1:4/subscribe");
const $panel_content__setup = $panel_content__p_text;
const $panel_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $panel_content__setup);
const $for_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $panel_content($scope));
const $for_content__p_label = ($scope, p_label) => $input_label($scope["#childScope/0"], p_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__p_label($scope, $params2[0]?.label);
	$for_content__p_text($scope, $params2[0]?.text);
};
const $for_content__p_text__closure = /*@__PURE__*/ _closure($panel_content__p_text);
const $for_content__p_text = /*@__PURE__*/ _const("p_text", $for_content__p_text__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_panels = ($scope, input_panels) => $for($scope, [input_panels, "id"]);
const $input = ($scope, input) => $input_panels($scope, input.panels);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
