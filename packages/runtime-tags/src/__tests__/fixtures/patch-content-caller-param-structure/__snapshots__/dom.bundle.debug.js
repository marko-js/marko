// tags/toggle-if.marko
const $template$5 = "<!><!><!>";
const $walks$5 = "b%c";
const $setup$5 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/toggle-if.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/toggle-if.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_open$4 = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input$5 = ($scope, input) => {
	$input_open$4($scope, input.open);
	$input_content$2($scope, input.content);
};
const $input_content$2 = /*@__PURE__*/ _fill_const("__tests__/tags/toggle-if.marko_fill0", "input_content", $if_content__input_content);
var toggle_if_default = /*@__PURE__*/ _template("__tests__/tags/toggle-if.marko", $template$5, "b%c", 0, $input$5);

// tags/toggle-for.marko
const $template$4 = "<!><!><!>";
const $walks$4 = "b%c";
const $setup$4 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/toggle-for.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/toggle-for.marko_fill0", "input_content", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__dynamicTag($scope, $scope._.input_content))));
const $for_content__setup = $for_content__input_content;
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $input_open$3 = ($scope, input_open) => $for($scope, [
	input_open ? 1 : 0,
	0,
	1
]);
const $input$4 = ($scope, input) => {
	$input_open$3($scope, input.open);
	$input_content$1($scope, input.content);
};
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/toggle-for.marko_fill0", "input_content", $for_content__input_content);
var toggle_for_default = /*@__PURE__*/ _template("__tests__/tags/toggle-for.marko", $template$4, "b%c", 0, $input$4);

// tags/toggle-tag.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $setup$3 = ($_) => {};
const $inputopendivsection_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputopendivsection_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/toggle-tag.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/toggle-tag.marko_fill0", "input_content", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $inputopendivsection_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/toggle-tag.marko_1_input_content#0:4/subscribe"), 0));
const $inputopendivsection_content__setup$1 = $inputopendivsection_content__input_content;
const $inputopendivsection_content$1 = /*@__PURE__*/ _content("__tests__/tags/toggle-tag.marko_1*content", "<!><!><!>", "b%", $inputopendivsection_content__setup$1);
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/0", $inputopendivsection_content$1);
const $input_open$2 = ($scope, input_open) => $dynamicTag$2($scope, input_open ? "div" : "section");
const $input$3 = ($scope, input) => {
	$input_open$2($scope, input.open);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($inputopendivsection_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/toggle-tag.marko_fill0", "input_content", $input_content__closure);
var toggle_tag_default = /*@__PURE__*/ _template("__tests__/tags/toggle-tag.marko", $template$3, "b%c", 0, $input$3);

// tags/param-host.marko
const $template$2 = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$5, $template$4, $template$3);
const $walks$2 = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
const $inputopendivsection_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/param-host.marko_4_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/param-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/param-host.marko_4_input_label#0:7/subscribe"), 3));
const $inputopendivsection_content__setup = $inputopendivsection_content__input_label;
const $inputopendivsection_content = /*@__PURE__*/ _content("__tests__/tags/param-host.marko_4*content", "<p>own <!></p>", "Db%", $inputopendivsection_content__setup);
const $toggletag_content__input_label$1 = /*@__PURE__*/ _init_resume("__tests__/tags/param-host.marko_3_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/param-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/param-host.marko_3_input_label#0:7/subscribe"), 2));
const $toggletag_content__setup$1 = $toggletag_content__input_label$1;
const $toggletag_content$1 = _content("__tests__/tags/param-host.marko_3*content", "<p>tag <!></p>", "Db%", $toggletag_content__setup$1);
const $togglefor_content__input_label$1 = /*@__PURE__*/ _init_resume("__tests__/tags/param-host.marko_2_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/param-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/param-host.marko_2_input_label#0:7/subscribe"), 1));
const $togglefor_content__setup$1 = $togglefor_content__input_label$1;
const $togglefor_content$1 = _content("__tests__/tags/param-host.marko_2*content", "<p>for <!></p>", "Db%", $togglefor_content__setup$1);
const $toggleif_content__input_label$1 = /*@__PURE__*/ _init_resume("__tests__/tags/param-host.marko_1_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/param-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/param-host.marko_1_input_label#0:7/subscribe"), 0));
const $toggleif_content__setup$1 = $toggleif_content__input_label$1;
const $toggleif_content$1 = _content("__tests__/tags/param-host.marko_1*content", "<p>if <!></p>", "Db%", $toggleif_content__setup$1);
function $setup$2($scope) {
	$input_content$2($scope["#childScope/0"], $toggleif_content$1($scope));
	$input_content$1($scope["#childScope/1"], $togglefor_content$1($scope));
	$input_content($scope["#childScope/2"], $toggletag_content$1($scope));
}
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/3", $inputopendivsection_content);
const $input_open$1 = ($scope, input_open) => {
	$dynamicTag$1($scope, input_open ? "div" : "section");
	$input_open$4($scope["#childScope/0"], input_open);
	$input_open$3($scope["#childScope/1"], input_open);
	$input_open$2($scope["#childScope/2"], input_open);
};
const $input$2 = ($scope, input) => {
	$input_open$1($scope, input.open);
	$input_label$2($scope, input.label);
};
const $input_label__closure$1 = /*@__PURE__*/ _closure($toggleif_content__input_label$1, $togglefor_content__input_label$1, $toggletag_content__input_label$1, $inputopendivsection_content__input_label);
const $input_label$2 = /*@__PURE__*/ _fill_const("__tests__/tags/param-host.marko_fill0", "input_label", $input_label__closure$1);
var param_host_default = /*@__PURE__*/ _template("__tests__/tags/param-host.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/const-host.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$5, $template$4, $template$3);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
const $showdivsection_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/const-host.marko_4_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/const-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/const-host.marko_4_input_label#0:7/subscribe"), 3));
const $showdivsection_content__setup = $showdivsection_content__input_label;
const $showdivsection_content = /*@__PURE__*/ _content("__tests__/tags/const-host.marko_4*content", "<p>own <!></p>", "Db%", $showdivsection_content__setup);
const $toggletag_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/const-host.marko_3_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/const-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/const-host.marko_3_input_label#0:7/subscribe"), 2));
const $toggletag_content__setup = $toggletag_content__input_label;
const $toggletag_content = _content("__tests__/tags/const-host.marko_3*content", "<p>tag <!></p>", "Db%", $toggletag_content__setup);
const $togglefor_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/const-host.marko_2_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/const-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/const-host.marko_2_input_label#0:7/subscribe"), 1));
const $togglefor_content__setup = $togglefor_content__input_label;
const $togglefor_content = _content("__tests__/tags/const-host.marko_2*content", "<p>for <!></p>", "Db%", $togglefor_content__setup);
const $toggleif_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/const-host.marko_1_input_label#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/const-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/const-host.marko_1_input_label#0:7/subscribe"), 0));
const $toggleif_content__setup = $toggleif_content__input_label;
const $toggleif_content = _content("__tests__/tags/const-host.marko_1*content", "<p>if <!></p>", "Db%", $toggleif_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3", $showdivsection_content);
const $show = ($scope, show) => {
	$dynamicTag($scope, show ? "div" : "section");
	$input_open$4($scope["#childScope/0"], show);
	$input_open$3($scope["#childScope/1"], show);
	$input_open$2($scope["#childScope/2"], show);
};
const $input_open = $show;
function $setup$1($scope) {
	$input_content$2($scope["#childScope/0"], $toggleif_content($scope));
	$input_content$1($scope["#childScope/1"], $togglefor_content($scope));
	$input_content($scope["#childScope/2"], $toggletag_content($scope));
}
const $input$1 = ($scope, input) => {
	$input_open($scope, input.open);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($toggleif_content__input_label, $togglefor_content__input_label, $toggletag_content__input_label, $showdivsection_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/const-host.marko_fill0", "input_label", $input_label__closure);
var const_host_default = /*@__PURE__*/ _template("__tests__/tags/const-host.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$2, $walks$1);
const $open = _let("open/6", ($scope) => {
	$input_open$1($scope["#childScope/0"], $scope.open);
	$input_open($scope["#childScope/1"], $scope.open);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$open($scope, true);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => {
	$input_label$2($scope["#childScope/0"], input_label);
	$input_label$1($scope["#childScope/1"], input_label);
};
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
