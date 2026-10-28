// tags/card.marko
const $template$3 = "<section><button>clear</button><!></section>";
const $walks$3 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content$1 = $c;
const $setup__script$2 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$3 = $setup__script$2;
const $input$3 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/outer.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$3);
const $o = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill0", "o/5", ($scope) => $input_content$1($scope["#childScope/1"], $scope.o));
const $input_content = $o;
const $setup__script$1 = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, undefined);
}));
function $setup$2($scope) {
	$setup$3($scope["#childScope/1"]);
	$setup__script$1($scope);
}
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/host.marko
const $template$1 = "<button class=flag>f</button><!><!><!>";
const $walks$1 = " b%b%c";
const $inputnativesectioninputwrap_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/host.marko_3_input_label#0:8/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/host.marko_fill2", "input_label", /*@__PURE__*/ _closure_get("input_label/12", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/host.marko_3_input_label#0:8/subscribe"), 0));
const $inputnativesectioninputwrap_content__setup = $inputnativesectioninputwrap_content__input_label;
const $inputnativesectioninputwrap_content = _content("__tests__/tags/host.marko_3*content", "<i> </i>", "D ", $inputnativesectioninputwrap_content__setup);
_content_resume($inputnativesectioninputwrap_content);
const $if_content2__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", $inputnativesectioninputwrap_content);
const $if_content2__input_wrap__OR__input_native = /*@__PURE__*/ _fill_join_if("__tests__/tags/host.marko_fill1/unpatched", "input_native", /*@__PURE__*/ _fill_join_if("__tests__/tags/host.marko_fill0/unpatched | __tests__/tags/host.marko_fill0", "input_wrap", /*@__PURE__*/ _or_resume("__tests__/tags/host.marko_2_input_wrap#0:5_input_native#0:7/init", 1, ($scope) => $if_content2__dynamicTag$1($scope, $scope._.input_native ? "section" : $scope._.input_wrap)), "#text/2", 0), "#text/2", 0);
const $if_content2__input_wrap = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content2__input_wrap__OR__input_native);
const $if_content2__setup$1 = ($scope) => {
	$if_content2__input_wrap._($scope);
	$if_content2__input_native._($scope);
};
const $if_content2__input_native = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content2__input_wrap__OR__input_native);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_wrap = /*@__PURE__*/ _fill_join("__tests__/tags/host.marko_fill0 __tests__/tags/host.marko_fill0/unpatched", "input_wrap", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_wrap)));
const $if_content__setup$1 = $if_content__input_wrap;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $flag = /*@__PURE__*/ _fill_let("__tests__/tags/host.marko_fill3", "flag/9", ($scope) => $if$1($scope, $scope.flag ? 0 : 1));
const $setup__script = _script("__tests__/tags/host.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$flag($scope, !$scope.flag);
}));
function $setup$1($scope) {
	$flag($scope, false);
	$setup__script($scope);
}
const $if2 = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content2__setup$1);
const $input_show$1 = ($scope, input_show) => $if2($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_wrap($scope, input.wrap);
	$input_show$1($scope, input.show);
	$input_native$1($scope, input.native);
	$input_label$1($scope, input.label);
};
const $input_wrap = /*@__PURE__*/ _fill_const("__tests__/tags/host.marko_fill0", "input_wrap", ($scope) => {
	$if_content__input_wrap($scope);
	$if_content2__input_wrap($scope);
}, /*@__PURE__*/ _fill_mark("input_wrap", $if_content__input_wrap));
const $input_native$1 = /*@__PURE__*/ _const("input_native", $if_content2__input_native);
const $input_label__closure$1 = /*@__PURE__*/ _closure($inputnativesectioninputwrap_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/host.marko_fill2", "input_label", $input_label__closure$1);
var host_default = /*@__PURE__*/ _template("__tests__/tags/host.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!><main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%bD/${_w0}&l`)($walks$1);
const $if_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content2__content = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content2__dynamicTag($scope, $scope._.content)));
const $if_content2__setup = $if_content2__content;
const $wrap_content__if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content2__setup);
const $wrap_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "open/5", ($scope) => $wrap_content__if($scope, $scope.open ? 0 : 1));
const $wrap_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$wrap_content__open($scope, !$scope.open);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__open($scope, true);
	$wrap_content__setup__script($scope);
};
const $wrap_content__$params = ($scope, $params2) => $wrap_content__content($scope, $params2[0].content);
const $wrap_content__content = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "content", $if_content2__content);
const $wrap_content = _content("__tests__/template.marko_3*content", "<button class=toggle>t</button><!><!>", " b%", $wrap_content__setup, $wrap_content__$params);
const $outer_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $if_content__setup);
const $input_show = ($scope, input_show) => {
	$input_show$1($scope["#childScope/1"], input_show);
	$if($scope, input_show ? 0 : 1);
};
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_wrap($scope["#childScope/1"], attrTag({ content: $wrap_content($scope) }));
}
const $input_native = ($scope, input_native) => $input_native$1($scope["#childScope/1"], input_native);
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$input_label__closure($scope);
	$input_label$1($scope["#childScope/1"], $scope.input_label);
}, $input_label__closure);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_native($scope, input.native);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
