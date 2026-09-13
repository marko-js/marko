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
	$setup__script$1($scope);
	$tick($scope, 0);
}
const $input_base$2 = /*@__PURE__*/ _fill_const("__tests__/tags/counter.marko0", "input_base", $input_base__OR__tick);
const $input$3 = ($scope, input) => $input_base$2($scope, input.base);
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
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<button class=bonus>bonus</button>${_w1}`)("", $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}& b/${_w1}&`)("", $walks$2);
const $aside_content__live = /*@__PURE__*/ _init_closure_get("__tests__/page.marko_1_live#9/init", "live", ($scope) => $input_base$2($scope["#childScope/0"], $scope._.live));
const $aside_content__setup = ($scope) => {
	$aside_content__live($scope);
	$setup$3($scope["#childScope/0"]);
};
const $aside_content = /*@__PURE__*/ _content("__tests__/page.marko_1*content", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3), $aside_content__setup);
const $live__closure = /*@__PURE__*/ _closure($aside_content__live);
const $live = /*@__PURE__*/ _const("live", $live__closure);
const $input_base__OR__bonus = /*@__PURE__*/ _fill_join("__tests__/page.marko0", "input_base", /*@__PURE__*/ _or(8, ($scope) => $live($scope, $scope.bonus ?? $scope.input_base), 1, "#scopeOffset/1"));
const $bonus = _var_resume("__tests__/page.marko_0_bonus#7/var", /*@__PURE__*/ _const("bonus", $input_base__OR__bonus));
const $setup__script = _script("__tests__/page.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], 5, "bonus");
}));
function $setup$1($scope) {
	_var($scope, "#childScope/0", $bonus);
	$setup$4($scope["#childScope/0"]);
	$input_aside($scope["#childScope/3"], attrTag({ content: $aside_content($scope) }));
	$setup__script($scope);
}
const $input_base$1 = _fill_const("__tests__/page.marko0", "input_base", $input_base__OR__bonus);
const $input$1 = ($scope, input) => $input_base$1($scope, input.base);
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_base = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_base$1($scope["#childScope/0"], $scope._.input_base));
const $if_content__setup = ($scope) => {
	$if_content__input_base._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_base($scope, input.base);
	$input_show($scope, input.show);
};
const $input_base = /*@__PURE__*/ _const("input_base", $if_content__input_base);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
