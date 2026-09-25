// tags/wrapper.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
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
function $setup$2($scope) {
	$try$1($scope, { placeholder: attrTag({ content: $placeholder_content$1($scope) }) });
}
const $input$1 = ($scope, input) => {
	(({ show, ...rest }) => $rest($scope, rest))(input);
	$show$1($scope, input.show);
};
const $rest__closure = /*@__PURE__*/ _closure($if_content__rest);
const $rest = /*@__PURE__*/ _const("rest", $rest__closure);
const $show__closure$1 = /*@__PURE__*/ _closure($try_content__input_show);
const $show$1 = /*@__PURE__*/ _const("show", $show__closure$1);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$2, "b%c", $setup$2, $input$1);

// tags/layout.marko
const $template$1 = "<div class=layout><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>show</button><!>${_w0}<!><!>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => ` b%b/${_w0}&%c`)("b%c");
const $await_content3__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content3__$params = ($scope, $params4) => $await_content3__v($scope, $params4[0]);
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $layout_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $layout_content__setup = ($scope) => {
	$await_content3($scope);
	$layout_content__await_promise($scope, resolveAfter("laid out"));
};
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_10*content", "<!><!><!>", "b%", $layout_content__setup);
const $placeholder_content2 = /*@__PURE__*/ _content("__tests__/template.marko_9*content", "layout loading");
const $try_content2__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $layout_content($scope));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $wrapper_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $wrapper_content__setup = ($scope) => {
	$await_content2($scope);
	$wrapper_content__await_promise($scope, resolveAfter("wrapped"));
};
const $wrapper_content = _content("__tests__/template.marko_6*content", "<!><!><!>", "b%", $wrapper_content__setup);
const $placeholder_content = _content("__tests__/template.marko_5*content", "define loading");
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $if_content__Content = /*@__PURE__*/ _closure_get("Content", ($scope) => _attr_content($scope, "#div/0", $scope._._.Content), ($scope) => $scope._._);
const $if_content__setup = $if_content__Content;
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $Content_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Content_content__setup = ($scope) => {
	$await_content($scope);
	$Content_content__await_promise($scope, resolveAfter("defined"));
};
const $Content_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $Content_content__setup);
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#4/subscribe");
const $try_content__setup = $try_content__show;
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let("show/4", ($scope) => {
	$show$1($scope["#childScope/2"], $scope.show);
	$show__closure($scope);
});
const $Content = /*@__PURE__*/ _const("Content");
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $try2 = /*@__PURE__*/ _try("#text/3", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $try_content2__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$setup$2($scope["#childScope/2"]);
	$rest($scope["#childScope/2"], { content: $wrapper_content($scope) });
	$show($scope, false);
	$Content($scope, { content: $Content_content($scope) });
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$try2($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
