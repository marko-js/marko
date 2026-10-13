// tags/tabs.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__tab_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.tab_content));
const $if_content__setup = $if_content__tab_content;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $for_content__input_selected = /*@__PURE__*/ _fill_join("__tests__/tags/tabs.marko_fill0", "input_selected", /*@__PURE__*/ _for_selector("#text/0", "input_selected", "#LoopKey", ($scope) => $for_content__if($scope, $scope["#LoopKey"] === $scope._.input_selected ? 0 : 1)));
const $for_content__setup = $for_content__input_selected;
const $for_content__$params = ($scope, $params2) => $for_content__tab_content($scope, $params2[0]?.content);
const $for_content__tab_content = /*@__PURE__*/ _const("tab_content", $if_content__tab_content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_tab = ($scope, input_tab) => $for($scope, [input_tab]);
const $input$1 = ($scope, input) => {
	$input_tab($scope, input.tab);
	$input_selected$1($scope, input.selected);
};
const $input_selected$1 = /*@__PURE__*/ _fill_const("__tests__/tags/tabs.marko_fill0", "input_selected", $for_content__input_selected);
var tabs_default = /*@__PURE__*/ _template("__tests__/tags/tabs.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = () => {};
const $tab_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<b> </b>", "D "), { t($scope) {
	_text($scope["#text/0"], $scope.t);
} });
_resumed["__tests__/template.marko_1*content"] = $tab_content;
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $tab;
	forOf($scope.input_items, (t) => {
		$tab = attrTags($tab, { content: $tab_content($scope, { t }) });
	});
	$input_tab($scope["#childScope/0"], $tab);
});
const $input_selected = ($scope, input_selected) => $input_selected$1($scope["#childScope/0"], input_selected);
const $input = ($scope, input) => {
	$input_selected($scope, input.selected);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
