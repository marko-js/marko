// tags/wrapper.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $placeholder_content$1 = _content("__tests__/tags/wrapper.marko_3*content", "wrapper loading");
const $if_content__rest__script = _script("__tests__/tags/wrapper.marko_2_rest#4", ($scope) => _attrs_script($scope, "#section/0"));
const $if_content__rest = /*@__PURE__*/ _closure_get("rest", ($scope) => {
	_attrs_content($scope, "#section/0", $scope._._.rest);
	$if_content__rest__script($scope);
}, ($scope) => $scope._._, "__tests__/tags/wrapper.marko_2_rest#4/subscribe");
const $if_content__setup$1 = $if_content__rest;
const $try_content__if$1 = /*@__PURE__*/ _if("#text/0", "<section></section>", " ", $if_content__setup$1);
const $try_content__input_show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content__if$1($scope, $scope._.show ? 0 : 1), 0, "__tests__/tags/wrapper.marko_1_show#3/subscribe");
const $try_content__setup$1 = $try_content__input_show;
const $try$1 = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup$1);
function $setup$3($scope) {
	$try$1($scope, { placeholder: attrTag({ content: $placeholder_content$1($scope) }) });
}
const $input$2 = ($scope, input) => {
	(({ show, ...rest }) => $rest($scope, rest))(input);
	$show$1($scope, input.show);
};
const $rest__closure = /*@__PURE__*/ _closure($if_content__rest);
const $rest = /*@__PURE__*/ _const("rest", $rest__closure);
const $show__closure$1 = /*@__PURE__*/ _closure($try_content__input_show);
const $show$1 = /*@__PURE__*/ _const("show", $show__closure$1);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$3, "b%c", $setup$3, $input$2);

// tags/layout.marko
const $template$2 = "<div class=layout><!></div>";
const $walks$2 = "D%l";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$2, "D%l", 0, $input$1);

// tags/base-button.marko
const $template$1 = "<button></button>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/base-button.marko_0_input#2", ($scope) => _attrs_script($scope, "#button/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#button/0", $scope.input);
	$input__script($scope);
});
var base_button_default = /*@__PURE__*/ _template("__tests__/tags/base-button.marko", $template$1, " b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>show</button><!>${_w0}<!><!><!><!>`)($template$3);
const $walks = /*@__PURE__*/ ((_w0) => ` b%b/${_w0}&%b%b%c`)("b%c");
const $basebutton_content__v = /*@__PURE__*/ _closure_get("v", ($scope) => _text($scope["#text/0"], $scope._.v));
const $basebutton_content__setup = $basebutton_content__v;
const $basebutton_content = /*@__PURE__*/ _content("__tests__/template.marko_18*content", " ", " ", $basebutton_content__setup);
const $await_content4__setup = ($scope) => $input($scope["#childScope/0"], { content: $basebutton_content($scope) });
const $await_content4__$params = ($scope, $params5) => $await_content4__v($scope, $params5[0]);
const $await_content4__v = /*@__PURE__*/ _const("v");
const $placeholder_content4 = _content("__tests__/template.marko_16*content", "button loading");
const $await_content4 = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $await_content4__setup);
const $try_content4__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content4__$params);
const $try_content4__setup = ($scope) => {
	$await_content4($scope);
	$try_content4__await_promise($scope, resolveAfter("pressed"));
};
const $placeholder_content3 = _content("__tests__/template.marko_14*content", "layout attr loading");
const $await_content3__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content3__$params = ($scope, $params4) => $await_content3__v($scope, $params4[0]);
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $layout_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $layout_content__setup = ($scope) => {
	$await_content3($scope);
	$layout_content__await_promise($scope, resolveAfter("laid out"));
};
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_12*content", "<!><!><!>", "b%", $layout_content__setup);
const $placeholder_content2 = _content("__tests__/template.marko_11*content", "layout loading");
const $try_content3__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $layout_content($scope));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $wrapper_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $wrapper_content__setup = ($scope) => {
	$await_content2($scope);
	$wrapper_content__await_promise($scope, resolveAfter("wrapped"));
};
const $wrapper_content = _content("__tests__/template.marko_8*content", "<!><!><!>", "b%", $wrapper_content__setup);
const $placeholder_content = _content("__tests__/template.marko_7*content", "define loading");
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content2__Content = /*@__PURE__*/ _closure_get("Content", ($scope) => $input_content($scope["#childScope/0"], $scope._._.Content), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__Content;
const $if_content__Content = /*@__PURE__*/ _closure_get("Content", ($scope) => _attr_content($scope, "#div/0", $scope._._.Content), ($scope) => $scope._._);
const $if_content__setup = $if_content__Content;
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $Content_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Content_content__setup = ($scope) => {
	$await_content($scope);
	$Content_content__await_promise($scope, resolveAfter("defined"));
};
const $Content_content = _content("__tests__/template.marko_3*content", "<!><!><!>", "b%", $Content_content__setup);
const $try_content2__if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content2__setup);
const $try_content2__show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content2__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_2_show#6/subscribe");
const $try_content2__setup = $try_content2__show;
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#6/subscribe");
const $try_content__setup = $try_content__show;
const $show__closure = /*@__PURE__*/ _closure($try_content__show, $try_content2__show);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => {
	$show$1($scope["#childScope/2"], $scope.show);
	$show__closure($scope);
});
const $Content = /*@__PURE__*/ _const("Content");
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $try2 = /*@__PURE__*/ _try("#text/3", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $try_content3__setup);
const $try3 = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%", $try_content2__setup);
const $try4 = /*@__PURE__*/ _try("#text/5", "<!><!><!>", "b%", $try_content4__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$setup$3($scope["#childScope/2"]);
	$rest($scope["#childScope/2"], { content: $wrapper_content($scope) });
	$show($scope, false);
	$Content($scope, { content: $Content_content($scope) });
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
	$try3($scope, { placeholder: attrTag({ content: $placeholder_content3($scope) }) });
	$try4($scope, { placeholder: attrTag({ content: $placeholder_content4($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
