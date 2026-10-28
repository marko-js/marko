// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_items", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items))));
const $if_content__setup = ($scope) => {
	$if_content__input_items._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
const $input_items = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/box.marko
const $template$3 = "";
const $walks$3 = "";
const $value = /*@__PURE__*/ _fill_let("__tests__/tags/box.marko_fill0", "value/0", ($scope) => _return($scope, $scope.value));
function $setup$3($scope) {
	_return_change($scope, $valueChange($scope));
	$value($scope, null);
}
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resumed["__tests__/tags/box.marko_0/valueChange"] = $valueChange;
var box_default = /*@__PURE__*/ _template("__tests__/tags/box.marko", "", "", /*@__PURE__*/ _return_setup($setup$3));

// tags/counter.marko
const $template$2 = "<button class=tick> </button>";
const $walks$2 = " D l";
const $input_base__OR__tick = /*@__PURE__*/ _fill_join("__tests__/tags/counter.marko_fill0", "input_base", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.input_base + $scope.tick)));
const $tick = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill1", "tick/5", $input_base__OR__tick);
const $setup__script$1 = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$tick($scope, +$scope.tick + 1);
}));
function $setup$2($scope) {
	$tick($scope, 0);
	$setup__script$1($scope);
}
const $input_base = /*@__PURE__*/ _const("input_base", $input_base__OR__tick);
const $input$2 = ($scope, input) => $input_base($scope, input.base);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$1 = "DbD%m";
const $setup$1 = ($_) => {};
const $input_aside_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_aside = $dynamicTag;
const $input$1 = ($scope, input) => $input_aside($scope, input.aside);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, 0, $input$1);

// page.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)("");
const $aside_content__bonus__OR__p_base__OR__item_n = /*@__PURE__*/ _fill_join_subscribers("__tests__/page.marko_fill1", "item_n", /*@__PURE__*/ _fill_join_subscribers("__tests__/page.marko_fill0", "p_base", /*@__PURE__*/ _or_resume("__tests__/page.marko_2_bonus#0:7_p_base#0:9_item_n#1:3/init", 1, ($scope) => $input_base($scope["#childScope/0"], ($scope._._.bonus ?? $scope._._.p_base) + $scope._.item_n), 2), "p_base/11", 0), "item_n/12", 0);
const $aside_content__bonus = /*@__PURE__*/ _init_resume("__tests__/page.marko_2_bonus#0:7/init", /*@__PURE__*/ _closure_get("bonus/10", $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._));
const $aside_content__setup = ($scope) => {
	$aside_content__bonus($scope);
	$aside_content__p_base($scope);
	$aside_content__item_n($scope);
	$setup$2($scope["#childScope/0"]);
};
const $aside_content__p_base = /*@__PURE__*/ _closure_get("p_base/11", $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._);
const $aside_content__item_n = _closure_resume("__tests__/page.marko_2_item_n#1:3/subscribe", /*@__PURE__*/ _closure_get("item_n/12", $aside_content__bonus__OR__p_base__OR__item_n));
const $aside_content = /*@__PURE__*/ _content("__tests__/page.marko_2*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $aside_content__setup);
const $for_content__setup = ($scope) => $input_aside($scope["#childScope/0"], attrTag({ content: $aside_content($scope) }));
const $for_content__$params = ($scope, $params2) => $for_content__item_n($scope, $params2[0]?.n);
const $for_content__item_n__closure = /*@__PURE__*/ _closure($aside_content__item_n);
const $for_content__item_n = /*@__PURE__*/ _fill_const("__tests__/page.marko_fill1", "item_n", $for_content__item_n__closure);
const $bonus__closure = /*@__PURE__*/ _closure($aside_content__bonus);
const $bonus = _var_resume("__tests__/page.marko_0_bonus#7/var", /*@__PURE__*/ _const("bonus", $bonus__closure));
const $p = ($scope, p) => $p_base($scope, p?.base);
const $setup__$global_data = /*@__PURE__*/ _fill_global_join("__tests__/page.marko_0_$global_data#8", ($scope) => $p($scope, $scope.$global.data), "data");
const $setup__script = _script("__tests__/page.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], 5, "bonus");
}));
function $setup($scope) {
	$setup$3($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $bonus);
	$setup__script($scope);
	$setup__$global_data($scope);
}
const $p_base__closure = /*@__PURE__*/ _closure($aside_content__p_base);
const $p_base = /*@__PURE__*/ _fill_const("__tests__/page.marko_fill0", "p_base", $p_base__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/3", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template, $walks, $setup, $input);
