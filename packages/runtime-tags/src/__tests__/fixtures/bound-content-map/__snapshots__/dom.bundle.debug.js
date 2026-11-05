// tags/card.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D%l", 0, $input$2);

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>copy</button>${_w0}<small> </small>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&D l`)("D%l");
const $value = /*@__PURE__*/ _let("value/6", ($scope) => {
	$input_content($scope["#childScope/1"], $scope.value.get("value"));
	_text($scope["#text/2"], $scope.value.has($scope.value.get("value")));
});
const $input_data = $value;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, new Map($scope.value));
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_data($scope, input.data);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__Body_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_data($scope["#childScope/0"], new Map([["value", $scope._.Body_content], [$scope._.Body_content, "key"]])));
const $if_content__setup = ($scope) => {
	$if_content__Body_content._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $Body_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $Body_content__setup = $Body_content__input_label;
const $Body_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Body_content__setup);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $Body_content2 = /*@__PURE__*/ _const("Body_content");
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
