// tags/card.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D%l", 0, $input$2);

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D%l");
const $o = /*@__PURE__*/ _let("o/5", ($scope) => $o_content($scope, $scope.o?.content));
const $o_content = /*@__PURE__*/ _const("o_content", ($scope) => $input_content$1($scope["#childScope/1"], $scope.o_content));
const $input_content = ($scope, input_content) => $o($scope, { content: input_content });
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, { content: undefined });
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $if_content2__v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.v));
const $if_content2__setup = $if_content2__v;
const $await_content__if = /*@__PURE__*/ _if("#text/0", "<div> </div>", "D ", $if_content2__setup);
const $await_content__input_show = /*@__PURE__*/ _closure_get("input_show/6", ($scope) => $await_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_3_input_show#0:4/subscribe");
const $await_content__setup = $await_content__input_show;
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content__v = /*@__PURE__*/ _const("v", $if_content2__v);
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe");
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show__closure = /*@__PURE__*/ _closure($await_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", ($scope) => {
	$if($scope, $scope.input_show ? 0 : 1);
	$input_show__closure($scope);
});
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $setup = $await_content;
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$await_promise($scope, resolveAfter($scope.input_label, 3));
	$input_label__closure($scope);
});
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
