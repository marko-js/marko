// tags/box.marko
const $template$4 = "";
const $walks$4 = "";
const $value = /*@__PURE__*/ _fill_let("__tests__/tags/box.marko0", "value/0", ($scope) => _return($scope, $scope.value));
function $setup$4($scope) {
	_return_change($scope, $valueChange($scope));
	$value($scope, null);
}
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resume("__tests__/tags/box.marko_0/valueChange", $valueChange);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box.marko", "", "", $setup$4);

// tags/counter.marko
const $template$3 = "<button class=tick> </button>";
const $walks$3 = " D l";
const $input_base__OR__tick = /*@__PURE__*/ _fill_join("__tests__/tags/counter.marko1", "tick", /*@__PURE__*/ _fill_join("__tests__/tags/counter.marko0", "input_base", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.input_base + $scope.tick))));
const $tick = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko1", "tick/5", $input_base__OR__tick);
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$tick($scope, +$scope.tick + 1);
}));
function $setup$3($scope) {
	$tick($scope, 0);
	$setup__script$1($scope);
}
const $input_base = /*@__PURE__*/ _fill_const("__tests__/tags/counter.marko0", "input_base", $input_base__OR__tick);
const $input$3 = ($scope, input) => $input_base($scope, input.base);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$3, $walks$3, $setup$3, $input$3);

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
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)("");
const $aside_content__bonus__OR__p_base__OR__item_n = /*@__PURE__*/ _fill_join_subscribers("__tests__/page.marko2", "item_n", /*@__PURE__*/ _fill_join_subscribers("__tests__/page.marko1", "p_base", /*@__PURE__*/ _or(1, ($scope) => $input_base($scope["#childScope/0"], ($scope._._.bonus ?? $scope._._.p_base) + $scope._.item_n), 2), () => $aside_content__p_base, 0), () => $aside_content__item_n, 0);
const $aside_content__bonus = /*@__PURE__*/ _init_closure_get("__tests__/page.marko_2_bonus#7/init", "bonus", $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._);
const $aside_content__setup = ($scope) => {
	$aside_content__bonus($scope);
	$aside_content__p_base($scope);
	$aside_content__item_n($scope);
	$setup$3($scope["#childScope/0"]);
};
const $aside_content__p_base = /*@__PURE__*/ _fill_join_closure("__tests__/page.marko1", "p_base", /*@__PURE__*/ _init_closure_get("__tests__/page.marko_2_p_base#9/init", "p_base", $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._), 0);
const $aside_content__item_n = /*@__PURE__*/ _fill_join_closure("__tests__/page.marko2", "item_n", /*@__PURE__*/ _init_closure_get("__tests__/page.marko_2_item_n#3/init", "item_n", $aside_content__bonus__OR__p_base__OR__item_n), 0);
const $aside_content = /*@__PURE__*/ _content("__tests__/page.marko_2*content", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3), $aside_content__setup);
const $for_content__setup = ($scope) => $input_aside($scope["#childScope/0"], attrTag({ content: $aside_content($scope) }));
const $for_content__$params = ($scope, $params2) => $for_content__item_n($scope, $params2[0]?.n);
const $for_content__item_n__closure = /*@__PURE__*/ _closure($aside_content__item_n);
const $for_content__item_n = /*@__PURE__*/ _fill_const("__tests__/page.marko2", "item_n", $for_content__item_n__closure);
const $bonus__closure = /*@__PURE__*/ _closure($aside_content__bonus);
const $bonus = _var_resume("__tests__/page.marko_0_bonus#7/var", /*@__PURE__*/ _const("bonus", $bonus__closure));
const $p = ($scope, p) => $p_base($scope, p?.base);
const $global_data = /*@__PURE__*/ _global_join("data", "__tests__/page.marko_0_$global_data#10/global", ($scope, $global_data) => $p($scope, $scope.$global.data));
const $setup__script = _script("__tests__/page.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], 5, "bonus");
}));
function $setup$1($scope) {
	_var($scope, "#childScope/0", $bonus);
	$setup$4($scope["#childScope/0"]);
	$global_data($scope, $scope.$global.data);
	$setup__script($scope);
}
const $p_base__closure = /*@__PURE__*/ _closure($aside_content__p_base);
const $p_base = /*@__PURE__*/ _fill_const("__tests__/page.marko1", "p_base", $p_base__closure);
const $for = /*@__PURE__*/ _for_of("#text/3", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $for_content__setup, $for_content__$params);
const $input_items$1 = _fill_const("__tests__/page.marko0", "input_items", ($scope) => $for($scope, [$scope.input_items]));
const $input$1 = ($scope, input) => $input_items$1($scope, input.items);
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<p>A lead long enough that the document outweighs a flush revealing the page below it.</p><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_items = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items));
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
const $input_items = /*@__PURE__*/ _const("input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
