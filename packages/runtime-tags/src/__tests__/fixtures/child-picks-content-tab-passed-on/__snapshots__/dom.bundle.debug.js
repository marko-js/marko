// tags/view.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var view_default = /*@__PURE__*/ _template("__tests__/tags/view.marko", $template$2, "b%c", 0, $input$2);

// tags/tabs.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = ($_) => {};
const $input_tab = ($scope, input_tab) => $input_content($scope["#childScope/0"], [...input_tab].find((t) => t.active)?.content);
const $input$1 = ($scope, input) => $input_tab($scope, input.tab);
var tabs_default = /*@__PURE__*/ _template("__tests__/tags/tabs.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=s>s</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $tab_content2__s = /*@__PURE__*/ _closure_get("s/8", ($scope) => _text($scope["#text/0"], $scope._.s), 0, "__tests__/template.marko_2_s#0:6/subscribe");
const $tab_content2__setup = $tab_content2__s;
const $tab_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "B<!>", "b%", $tab_content2__setup);
const $tab_content__input_y = /*@__PURE__*/ _closure_get("input_y/7", ($scope) => _text($scope["#text/0"], $scope._.input_y), 0, "__tests__/template.marko_1_input_y#0:5/subscribe");
const $tab_content__setup = $tab_content__input_y;
const $tab_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "A<!>", "b%", $tab_content__setup);
const $s__closure = /*@__PURE__*/ _closure($tab_content2__s);
const $s = /*@__PURE__*/ _let("s/6", $s__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$s($scope, 0);
	$setup__script($scope);
}
const $input_x = ($scope, input_x) => $input_tab($scope["#childScope/1"], attrTags(attrTag({
	active: input_x === 1,
	content: $tab_content($scope)
}), {
	active: input_x === 2,
	content: $tab_content2($scope)
}));
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
const $input_y__closure = /*@__PURE__*/ _closure($tab_content__input_y);
const $input_y = /*@__PURE__*/ _const("input_y", $input_y__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
