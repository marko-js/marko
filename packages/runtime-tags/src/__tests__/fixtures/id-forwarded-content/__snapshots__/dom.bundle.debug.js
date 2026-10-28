// tags/field.marko
const $template$7 = "<label> </label><input>";
const $walks$7 = " D l b";
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
function $setup$7($scope) {
	$uid($scope, _id($scope));
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$7 = ($scope, input) => $input_label($scope, input.label);
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$7, $walks$7, $setup$7, $input$7);

// tags/forward.marko
const $template$6 = "<section><!></section>";
const $walks$6 = "D%l";
const $setup$6 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$5 = $dynamicTag$1;
const $input$6 = ($scope, input) => $input_content$5($scope, input.content);
var forward_default = /*@__PURE__*/ _template("__tests__/tags/forward.marko", $template$6, "D%l", 0, $input$6);

// tags/forward-body.marko
const $template$5 = $template$6;
const $walks$5 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $forward_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $forward_content__input_content = /*@__PURE__*/ _closure_get("input_content/4", ($scope) => $forward_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/forward-body.marko_1_input_content#0:3/subscribe");
const $forward_content__setup$1 = $forward_content__input_content;
const $forward_content$1 = /*@__PURE__*/ _content("__tests__/tags/forward-body.marko_1*content", "<!><!><!>", "b%", $forward_content__setup$1);
function $setup$5($scope) {
	$input_content_direct($scope["#childScope/0"], $forward_content$1($scope));
}
const $input$5 = ($scope, input) => $input_content$4($scope, input.content);
const $input_content__closure$2 = /*@__PURE__*/ _closure($forward_content__input_content);
const $input_content$4 = /*@__PURE__*/ _const("input_content", $input_content__closure$2);
var forward_body_default = /*@__PURE__*/ _template("__tests__/tags/forward-body.marko", $template$5, $walks$5, $setup$5, $input$5);

// tags/forward-attr.marko
const $template$4 = $template$6;
const $walks$4 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$4 = ($_) => {};
const $input_content$3 = ($scope, input_content) => $input_content$5($scope["#childScope/0"], input_content);
const $input$4 = ($scope, input) => $input_content$3($scope, input.content);
var forward_attr_default = /*@__PURE__*/ _template("__tests__/tags/forward-attr.marko", $template$4, $walks$4, 0, $input$4);

// tags/forward-define.marko
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
const $template$3 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template);
const $walks$3 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content2__walks);
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $Wrap_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Wrap_content2__content = $Wrap_content2__dynamicTag;
const $Wrap_content2__$params = ($scope, $params2) => $Wrap_content2__$temp($scope, $params2[0]);
const $Wrap_content2__$temp = ($scope, $temp) => $Wrap_content2__content($scope, $temp.content);
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Wrap_content__input_content = /*@__PURE__*/ _closure_get("input_content/4", ($scope) => $Wrap_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/forward-define.marko_1_input_content#0:3/subscribe");
const $Wrap_content__setup = $Wrap_content__input_content;
const $Wrap_content = /*@__PURE__*/ _content("__tests__/tags/forward-define.marko_1*content", "<!><!><!>", "b%", $Wrap_content__setup);
function $setup$3($scope) {
	$content_direct($scope["#childScope/0"], $Wrap_content($scope));
}
const $input$3 = ($scope, input) => $input_content$2($scope, input.content);
const $input_content__closure$1 = /*@__PURE__*/ _closure($Wrap_content__input_content);
const $input_content$2 = /*@__PURE__*/ _const("input_content", $input_content__closure$1);
var forward_define_default = /*@__PURE__*/ _template("__tests__/tags/forward-define.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/forward-inner.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $template$2 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $walks$2 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Inner_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Inner_content__input_content = /*@__PURE__*/ _closure_get("input_content/4", ($scope) => $Inner_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/forward-inner.marko_1_input_content#0:3/subscribe");
const $Inner_content__setup = $Inner_content__input_content;
function $setup$2($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Inner_content__setup($scope["#childScope/0"]);
}
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($Inner_content__input_content);
const $input_content$1 = /*@__PURE__*/ _const("input_content", $input_content__closure);
var forward_inner_default = /*@__PURE__*/ _template("__tests__/tags/forward-inner.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/named.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const Named = field_default;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, Named, ($_) => ({
	label: "named",
	content: input_content
}));
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var named_default = /*@__PURE__*/ _template("__tests__/tags/named.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}${_w8}${_w9}${_w10}<!><!>`)($template$6, $template$6, $template$5, $template$5, $template$4, $template$6, $template$3, $template$3, $template$2, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&/${_w8}&/${_w9}&/${_w10}&%c`)("D%l", "D%l", $walks$5, $walks$5, $walks$4, "D%l", $walks$3, $walks$3, $walks$2, $walks$2, "b%c");
const $forwardbody_content3__setup = ($scope) => {
	$setup$7($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "created");
};
const $forwardbody_content3 = /*@__PURE__*/ _content("__tests__/template.marko_13*content", $template$7, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7), $forwardbody_content3__setup);
const $if_content__setup = ($scope) => {
	$setup$5($scope["#childScope/0"]);
	$input_content$4($scope["#childScope/0"], $forwardbody_content3($scope));
};
const $named_content = /*@__PURE__*/ _content("__tests__/template.marko_11*content", "<em>none</em>");
const $forwardinner_content2 = /*@__PURE__*/ _content("__tests__/template.marko_10*content", "<em>none</em>");
const $forwardinner_content__setup = ($scope) => {
	$setup$7($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "inner");
};
const $forwardinner_content = /*@__PURE__*/ _content("__tests__/template.marko_9*content", $template$7, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7), $forwardinner_content__setup);
const $forwarddefine_content2 = /*@__PURE__*/ _content("__tests__/template.marko_8*content", "<em>none</em>");
const $forwarddefine_content__setup = ($scope) => {
	$setup$7($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "define");
};
const $forwarddefine_content = /*@__PURE__*/ _content("__tests__/template.marko_7*content", $template$7, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7), $forwarddefine_content__setup);
const $forwardattr_content__setup = ($scope) => {
	$setup$7($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "attr");
};
const $forwardattr_content = /*@__PURE__*/ _content("__tests__/template.marko_6*content", $template$7, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7), $forwardattr_content__setup);
const $forwardbody_content2 = /*@__PURE__*/ _content("__tests__/template.marko_5*content", "<em>none</em>");
const $forwardbody_content__setup = ($scope) => {
	$setup$7($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "body");
};
const $forwardbody_content = /*@__PURE__*/ _content("__tests__/template.marko_4*content", $template$7, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7), $forwardbody_content__setup);
const $forward_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<em>none</em>");
const $forward_content__setup = ($scope) => {
	$setup$7($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "direct");
};
const $forward_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", $template$7, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7), $forward_content__setup);
const $Labeled_content__setup = ($scope) => {
	$setup$7($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "defined");
};
const $Labeled_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", $template$7, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7), $Labeled_content__setup);
const $Labeled = ($scope, Labeled) => $input_content$5($scope["#childScope/5"], Labeled);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $forward_content($scope));
	$input_content_direct($scope["#childScope/1"], $forward_content2($scope));
	$setup$5($scope["#childScope/2"]);
	$input_content$4($scope["#childScope/2"], $forwardbody_content($scope));
	$setup$5($scope["#childScope/3"]);
	$input_content$4($scope["#childScope/3"], $forwardbody_content2($scope));
	$input_content$3($scope["#childScope/4"], $forwardattr_content($scope));
	$setup$3($scope["#childScope/6"]);
	$input_content$2($scope["#childScope/6"], $forwarddefine_content($scope));
	$setup$3($scope["#childScope/7"]);
	$input_content$2($scope["#childScope/7"], $forwarddefine_content2($scope));
	$setup$2($scope["#childScope/8"]);
	$input_content$1($scope["#childScope/8"], $forwardinner_content($scope));
	$setup$2($scope["#childScope/9"]);
	$input_content$1($scope["#childScope/9"], $forwardinner_content2($scope));
	/* @__PURE__ */ $setup$1($scope["#childScope/10"]);
	$input_content($scope["#childScope/10"], $named_content($scope));
	$Labeled($scope, { content: $Labeled_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/11", $template$5, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$5), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
