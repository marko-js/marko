// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $option_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "A");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_option($scope["#childScope/0"], attrTag({
		value: "a",
		content: $option_content($scope)
	}));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/ui-field.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_description = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_content, () => [{ d: $scope.input_description }]));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_description);
const $input_description = /*@__PURE__*/ _const("input_description", $input_content__OR__input_description);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_description($scope, input.description);
};
var ui_field_default = /*@__PURE__*/ _template("__tests__/tags/ui-field.marko", $template$1, "b%c", 0, $input$1);

// tags/ui-select.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $for_content__c__script = _script("__tests__/tags/ui-select.marko_2_c#2", ($scope) => _attrs_script($scope, "#span/0"));
const $for_content__c = /*@__PURE__*/ _for_closure("#text/0", ($scope) => {
	_attrs($scope, "#span/0", $scope._.c);
	$for_content__c__script($scope);
});
const $for_content__setup = $for_content__c;
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content__o_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params3) => $for_content__o_content($scope, $params3[0]?.content);
const $uifield_content__for = /*@__PURE__*/ _for_of("#text/0", "<span><!></span>", " D%", $for_content__setup, $for_content__$params);
const $uifield_content__input_option = /*@__PURE__*/ _closure_get("input_option", ($scope) => $uifield_content__for($scope, [$scope._.input_option]));
const $uifield_content__setup = $uifield_content__input_option;
const $uifield_content__$params = ($scope, $params2) => $uifield_content__c($scope, $params2[0]);
const $uifield_content__c = /*@__PURE__*/ _const("c", $for_content__c);
const $uifield_content = /*@__PURE__*/ _content("__tests__/tags/ui-select.marko_1*content", "<!><!><!>", "b%", $uifield_content__setup, $uifield_content__$params);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $uifield_content($scope));
	$input_description($scope["#childScope/0"], "d");
}
const $input = ($scope, input) => $input_option($scope, input.option);
const $input_option__closure = /*@__PURE__*/ _closure($uifield_content__input_option);
const $input_option = /*@__PURE__*/ _const("input_option", $input_option__closure);
var ui_select_default = /*@__PURE__*/ _template("__tests__/tags/ui-select.marko", $template, $walks, $setup, $input);
