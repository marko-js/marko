// tags/tabs.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__tab_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/tabs.marko_2_tab_content#1:3/setup", "#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.tab_content));
const $if_content__setup = $if_content__tab_content;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $for_content__input_selected = /*@__PURE__*/ _for_selector_patch("__tests__/tags/tabs.marko_1_input_selected#0:4/setup", "#text/0", "input_selected", ($scope) => $for_content__if($scope, $scope["#LoopKey"] === $scope._.input_selected ? 0 : 1), 5);
const $for_content__setup = $for_content__input_selected;
const $for_content__$params = ($scope, $params2) => $for_content__tab_content($scope, $params2[0]?.content);
const $for_content__tab_content = /*@__PURE__*/ _const("tab_content", $if_content__tab_content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_tab = ($scope, input_tab) => $for($scope, [input_tab]);
const $input$1 = ($scope, input) => {
	$input_tab($scope, input.tab);
	$input_selected$1($scope, input.selected);
};
const $input_selected$1 = /*@__PURE__*/ _const("input_selected", $for_content__input_selected);
var tabs_default = /*@__PURE__*/ _template("__tests__/tags/tabs.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $inputwrap_content__t = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_t#1:2/subscribe", "t/7", ($scope) => _text($scope["#text/0"], $scope._.t), 0, "__tests__/template.marko_1_t#2/subscribers", 0);
const $inputwrap_content__setup = $inputwrap_content__t;
const $inputwrap_content = _content("__tests__/template.marko_2*content", " ", " ", $inputwrap_content__setup);
_content_resume($inputwrap_content);
const $tab_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputwrap_content);
const $tab_content__input_wrap = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_wrap#0:5/subscribe", "input_wrap/6", ($scope) => $tab_content__dynamicTag($scope, $scope._.input_wrap), 0, "__tests__/template.marko_0_input_wrap#5/subscribers", 0);
const $tab_content__setup = $tab_content__input_wrap;
const $tab_content__t__closure = /*@__PURE__*/ _closure($inputwrap_content__t);
const $tab_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<b> </b><!><!>", "D l%", $tab_content__setup), { t($scope) {
	$tab_content__t__closure($scope);
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
	$input_wrap($scope, input.wrap);
};
const $input_wrap__closure = /*@__PURE__*/ _closure($tab_content__input_wrap);
const $input_wrap = /*@__PURE__*/ _const("input_wrap", $input_wrap__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
