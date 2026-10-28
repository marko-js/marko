// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_a = ($scope, input_a) => $input_x($scope["#childScope/0"], input_a);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input_flag = ($scope, input_flag) => $input_flag$1($scope["#childScope/0"], input_flag);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_show($scope, input.show);
	$input_flag($scope, input.flag);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/probe.marko
const $template$1 = "<output></output>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $get__script = _script("__tests__/tags/probe.marko_0_get#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $get$1 = /*@__PURE__*/ _const("get", $get__script);
const $input$1 = ($scope, input) => $get$1($scope, input.get);
var probe_default = /*@__PURE__*/ _template("__tests__/tags/probe.marko", $template$1, " b", 0, $input$1);

// tags/w.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)(" b");
const $if_content2__setup__script = _script("__tests__/tags/w.marko_4", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log($scope._.x);
}));
const $if_content2__setup = $if_content2__setup__script;
const $if_content__setup__script = _script("__tests__/tags/w.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log($scope._.x);
}));
const $if_content__setup = $if_content__setup__script;
const $B_content__if = /*@__PURE__*/ _if("#text/0", "<button>b</button>", " ", $if_content2__setup);
const $B_content__input_show = /*@__PURE__*/ _init_resume("__tests__/tags/w.marko_2_input_show#0:4/init", _closure_resume("__tests__/tags/w.marko_2_input_show#0:4/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/tags/w.marko_fill0", "input_show", /*@__PURE__*/ _closure_get("input_show/10", ($scope) => $B_content__if($scope, $scope._.input_show ? 0 : 1)), 1)));
const $B_content__setup = $B_content__input_show;
const $B_content__$params = ($scope, $params3) => $B_content__x($scope, $params3[0].x);
const $B_content__x = /*@__PURE__*/ _const("x");
const $B_content = _content("__tests__/tags/w.marko_2*content", "<u>B</u><!><!>", "b%", $B_content__setup, $B_content__$params);
const $A_content__if = /*@__PURE__*/ _if("#text/0", "<button>a</button>", " ", $if_content__setup);
const $A_content__input_show = /*@__PURE__*/ _init_resume("__tests__/tags/w.marko_1_input_show#0:4/init", _closure_resume("__tests__/tags/w.marko_1_input_show#0:4/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/tags/w.marko_fill0", "input_show", /*@__PURE__*/ _closure_get("input_show/10", ($scope) => $A_content__if($scope, $scope._.input_show ? 0 : 1)), 0)));
const $A_content__setup = $A_content__input_show;
const $A_content__$params = ($scope, $params2) => $A_content__x($scope, $params2[0].x);
const $A_content__x = /*@__PURE__*/ _const("x");
const $A_content = _content("__tests__/tags/w.marko_1*content", "<u>A</u><!><!>", "b%", $A_content__setup, $A_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_flag__OR__input_x__OR__A__OR__B = /*@__PURE__*/ _fill_join("__tests__/tags/w.marko_fill2", "input_x", /*@__PURE__*/ _fill_join("__tests__/tags/w.marko_fill1", "input_flag", /*@__PURE__*/ _or_resume("__tests__/tags/w.marko_0_input_flag#5_input_x#6_A#7_B#8/init", 9, ($scope) => $dynamicTag($scope, $scope.input_flag ? $scope.A : $scope.B, ($_) => ({ x: $scope.input_x })), 3)));
const $A = /*@__PURE__*/ _const("A", $input_flag__OR__input_x__OR__A__OR__B);
const $B = /*@__PURE__*/ _const("B", $input_flag__OR__input_x__OR__A__OR__B);
function $setup($scope) {
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
}
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_x__OR__A__OR__B);
const $input_x = /*@__PURE__*/ _const("input_x", $input_flag__OR__input_x__OR__A__OR__B);
const $input_show__closure = /*@__PURE__*/ _closure($A_content__input_show, $B_content__input_show);
const $input_show = /*@__PURE__*/ _fill_const("__tests__/tags/w.marko_fill0", "input_show", ($scope) => {
	$input_show__closure($scope);
	$get$1($scope["#childScope/1"], $get($scope));
}, /*@__PURE__*/ _fill_mark("input_show", $input_show__closure));
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_flag($scope, input.flag);
	$input_x($scope, input.x);
};
const $get = ($scope) => function() {
	return "s:" + $scope.input_show;
};
_bind_resume("__tests__/tags/w.marko_0/get input_show", $get);
var w_default = /*@__PURE__*/ _template("__tests__/tags/w.marko", $template, $walks, $setup, $input);
