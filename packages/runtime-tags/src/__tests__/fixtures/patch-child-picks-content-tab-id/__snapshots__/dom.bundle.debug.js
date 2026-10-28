// tags/tabs.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tab__OR__input_selected = /*@__PURE__*/ _fill_signal("input_tab __tests__/tags/tabs.marko_fill0,input_selected __tests__/tags/tabs.marko_fill1", /*@__PURE__*/ _or_resume("__tests__/tags/tabs.marko_0_input_tab#3_input_selected#4/init", 5, ($scope) => $dynamicTag($scope, [...$scope.input_tab].find((t) => t.id === $scope.input_selected)?.content)));
const $input_tab = /*@__PURE__*/ _const("input_tab", $input_tab__OR__input_selected);
const $input_selected = /*@__PURE__*/ _const("input_selected", $input_tab__OR__input_selected);
const $input$1 = ($scope, input) => {
	$input_tab($scope, input.tab);
	$input_selected($scope, input.selected);
};
var tabs_default = /*@__PURE__*/ _template("__tests__/tags/tabs.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $tab_content2__s = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_s#0:6/init", /*@__PURE__*/ _closure_get("s/8", ($scope) => _text($scope["#text/0"], $scope._.s)));
const $tab_content2__setup = $tab_content2__s;
const $tab_content2 = _content("__tests__/template.marko_2*content", "B<!>", "b%", $tab_content2__setup);
const $tab_content__input_y = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_y#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_y", /*@__PURE__*/ _closure_get("input_y/7", ($scope) => _text($scope["#text/0"], $scope._.input_y), 0, "__tests__/template.marko_1_input_y#0:5/subscribe"), 0));
const $tab_content__setup = $tab_content__input_y;
const $tab_content = _content("__tests__/template.marko_1*content", "A<!>", "b%", $tab_content__setup);
const $s__closure = /*@__PURE__*/ _closure($tab_content2__s);
const $s = /*@__PURE__*/ _let("s/6", $s__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$input_tab($scope["#childScope/1"], attrTags(attrTag({
		id: 1,
		content: $tab_content($scope)
	}), {
		id: 2,
		content: $tab_content2($scope)
	}));
	$s($scope, 0);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $input_selected($scope["#childScope/1"], input_x);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
const $input_y__closure = /*@__PURE__*/ _closure($tab_content__input_y);
const $input_y = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_y", $input_y__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
