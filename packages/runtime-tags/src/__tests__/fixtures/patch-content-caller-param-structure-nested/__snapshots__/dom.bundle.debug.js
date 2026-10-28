// tags/toggle-if.marko
const $template$6 = "<!><!><!>";
const $walks$6 = "b%c";
const $setup$6 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/toggle-if.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/toggle-if.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_open$5 = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input$6 = ($scope, input) => {
	$input_open$5($scope, input.open);
	$input_content$2($scope, input.content);
};
const $input_content$2 = /*@__PURE__*/ _fill_const("__tests__/tags/toggle-if.marko_fill0", "input_content", $if_content__input_content);
var toggle_if_default = /*@__PURE__*/ _template("__tests__/tags/toggle-if.marko", $template$6, "b%c", 0, $input$6);

// tags/toggle-for.marko
const $template$5 = "<!><!><!>";
const $walks$5 = "b%c";
const $setup$5 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/toggle-for.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/toggle-for.marko_fill0", "input_content", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__dynamicTag($scope, $scope._.input_content))));
const $for_content__setup = $for_content__input_content;
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $input_open$4 = ($scope, input_open) => $for($scope, [
	input_open ? 1 : 0,
	0,
	1
]);
const $input$5 = ($scope, input) => {
	$input_open$4($scope, input.open);
	$input_content$1($scope, input.content);
};
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/toggle-for.marko_fill0", "input_content", $for_content__input_content);
var toggle_for_default = /*@__PURE__*/ _template("__tests__/tags/toggle-for.marko", $template$5, "b%c", 0, $input$5);

// tags/toggle-tag.marko
const $template$4 = "<!><!><!>";
const $walks$4 = "b%c";
const $setup$4 = ($_) => {};
const $inputopendivsection_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputopendivsection_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/toggle-tag.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/toggle-tag.marko_fill0", "input_content", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $inputopendivsection_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/toggle-tag.marko_1_input_content#0:4/subscribe"), 0));
const $inputopendivsection_content__setup$1 = $inputopendivsection_content__input_content;
const $inputopendivsection_content$1 = /*@__PURE__*/ _content("__tests__/tags/toggle-tag.marko_1*content", "<!><!><!>", "b%", $inputopendivsection_content__setup$1);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", $inputopendivsection_content$1);
const $input_open$3 = ($scope, input_open) => $dynamicTag$1($scope, input_open ? "div" : "section");
const $input$4 = ($scope, input) => {
	$input_open$3($scope, input.open);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($inputopendivsection_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/toggle-tag.marko_fill0", "input_content", $input_content__closure);
var toggle_tag_default = /*@__PURE__*/ _template("__tests__/tags/toggle-tag.marko", $template$4, "b%c", 0, $input$4);

// tags/param-host.marko
const $template$3 = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$6, $template$5, $template$4);
const $walks$3 = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
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
function $setup$3($scope) {
	$input_content$2($scope["#childScope/0"], $toggleif_content$1($scope));
	$input_content$1($scope["#childScope/1"], $togglefor_content$1($scope));
	$input_content($scope["#childScope/2"], $toggletag_content$1($scope));
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3", $inputopendivsection_content);
const $input_open$2 = ($scope, input_open) => {
	$dynamicTag($scope, input_open ? "div" : "section");
	$input_open$5($scope["#childScope/0"], input_open);
	$input_open$4($scope["#childScope/1"], input_open);
	$input_open$3($scope["#childScope/2"], input_open);
};
const $input$3 = ($scope, input) => {
	$input_open$2($scope, input.open);
	$input_label$3($scope, input.label);
};
const $input_label__closure$1 = /*@__PURE__*/ _closure($toggleif_content__input_label$1, $togglefor_content__input_label$1, $toggletag_content__input_label$1, $inputopendivsection_content__input_label);
const $input_label$3 = /*@__PURE__*/ _fill_const("__tests__/tags/param-host.marko_fill0", "input_label", $input_label__closure$1);
var param_host_default = /*@__PURE__*/ _template("__tests__/tags/param-host.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/outer.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$3);
function $setup$2($scope) {
	$setup$3($scope["#childScope/0"]);
}
const $input_open$1 = ($scope, input_open) => $input_open$2($scope["#childScope/0"], input_open);
const $input_label$2 = ($scope, input_label) => $input_label$3($scope["#childScope/0"], input_label);
const $input$2 = ($scope, input) => {
	$input_open$1($scope, input.open);
	$input_label$2($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/define-host.marko
const $Sel_content__walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&%c`)("b%c", "b%c", "b%c");
const $Sel_content__template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}<!><!>`)($template$6, $template$5, $template$4);
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Sel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Sel_content__walks);
const $opendivsection_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/define-host.marko_5_input_label#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/define-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/define-host.marko_5_input_label#0:3/subscribe"), 3));
const $opendivsection_content__setup = $opendivsection_content__input_label;
const $opendivsection_content = /*@__PURE__*/ _content("__tests__/tags/define-host.marko_5*content", "<p>own <!></p>", "Db%", $opendivsection_content__setup);
const $toggletag_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/define-host.marko_4_input_label#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/define-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/define-host.marko_4_input_label#0:3/subscribe"), 2));
const $toggletag_content__setup = $toggletag_content__input_label;
const $toggletag_content = _content("__tests__/tags/define-host.marko_4*content", "<p>tag <!></p>", "Db%", $toggletag_content__setup);
const $togglefor_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/define-host.marko_3_input_label#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/define-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/define-host.marko_3_input_label#0:3/subscribe"), 1));
const $togglefor_content__setup = $togglefor_content__input_label;
const $togglefor_content = _content("__tests__/tags/define-host.marko_3*content", "<p>for <!></p>", "Db%", $togglefor_content__setup);
const $toggleif_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/define-host.marko_2_input_label#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/define-host.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/define-host.marko_2_input_label#0:3/subscribe"), 0));
const $toggleif_content__setup = $toggleif_content__input_label;
const $toggleif_content = _content("__tests__/tags/define-host.marko_2*content", "<p>if <!></p>", "Db%", $toggleif_content__setup);
const $Sel_content__setup = ($scope) => {
	$input_content$2($scope["#childScope/0"], $toggleif_content($scope));
	$input_content$1($scope["#childScope/1"], $togglefor_content($scope));
	$input_content($scope["#childScope/2"], $toggletag_content($scope));
};
const $Sel_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3", $opendivsection_content);
const $Sel_content__open = ($scope, open) => {
	$Sel_content__dynamicTag($scope, open ? "div" : "section");
	$input_open$5($scope["#childScope/0"], open);
	$input_open$4($scope["#childScope/1"], open);
	$input_open$3($scope["#childScope/2"], open);
};
const $Sel_content__$params = ($scope, $params2) => $Sel_content__$temp($scope, $params2[0]);
const $Sel_content__$temp = ($scope, $temp) => $Sel_content__open($scope, $temp.open);
function $setup$1($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Sel_content__setup($scope["#childScope/0"]);
}
const $input_open = ($scope, input_open) => $Sel_content__open($scope["#childScope/0"], input_open);
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_open($scope, input.open);
};
const $input_label__closure = /*@__PURE__*/ _closure($toggleif_content__input_label, $togglefor_content__input_label, $toggletag_content__input_label, $opendivsection_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/define-host.marko_fill0", "input_label", $input_label__closure);
var define_host_default = /*@__PURE__*/ _template("__tests__/tags/define-host.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button>+</button>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$2, $walks$1);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => {
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
