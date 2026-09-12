// tags/panel.marko
const $template$2 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$2 = "DbD%m";
const $setup$2 = () => {};
const $input_aside_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_aside = $dynamicTag;
const $input$2 = ($scope, input) => $input_aside($scope, input.aside);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$2, $walks$2, 0, $input$2);

// page.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const ITEMS = ["a", "b"];
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p>down</p>", 0, 0, "<p>up</p>");
const $if_content__input_down$1 = /*@__PURE__*/ _closure_get("input_down", ($scope) => $if_content__if($scope, $scope._._._.input_down ? 0 : 1), ($scope) => $scope._._._);
const $if_content__setup$1 = $if_content__input_down$1;
const $aside_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $aside_content__m = /*@__PURE__*/ _closure_get("m", ($scope) => {
	$aside_content__if($scope, $scope._.m === "b" ? 0 : 1);
	_text($scope["#text/0"], $scope._.m);
});
const $aside_content__setup = $aside_content__m;
const $aside_content = /*@__PURE__*/ _content("__tests__/page.marko_2*content", "<span> </span><!><!>", "D l%", $aside_content__setup);
const $for_content__setup = ($scope) => $input_aside($scope["#childScope/0"], attrTag({ content: $aside_content($scope) }));
const $for_content__$params = ($scope, $params2) => $for_content__m($scope, $params2[0]);
const $for_content__m = /*@__PURE__*/ _const("m");
const $for = /*@__PURE__*/ _for_of("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $for_content__setup, $for_content__$params);
function $setup$1($scope) {
	$for($scope, [ITEMS]);
}
const $input$1 = ($scope, input) => $input_down$1($scope, input.down);
const $input_down__closure = /*@__PURE__*/ _closure($if_content__input_down$1);
const $input_down$1 = /*@__PURE__*/ _const("input_down", $input_down__closure);
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_down = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_down$1($scope["#childScope/0"], $scope._.input_down));
const $if_content__setup = ($scope) => {
	$if_content__input_down._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_down($scope, input.down);
};
const $input_down = /*@__PURE__*/ _const("input_down", $if_content__input_down);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
