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
const $template$1 = "<button>x</button><!><!>";
const $walks$1 = " b%c";
const $await_content__c = /*@__PURE__*/ _closure_get("c/8", ($scope) => $input_content$1($scope["#childScope/0"], $scope._._.c), ($scope) => $scope._._, "__tests__/tags/outer.marko_2_c#0:6/subscribe");
const $await_content__setup = $await_content__c;
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $if_content__input_promise = /*@__PURE__*/ _if_closure_patch("__tests__/tags/outer.marko_1_input_promise#0:5/setup", "#text/1", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_promise));
const $if_content__setup$1 = ($scope) => {
	$if_content__input_promise._($scope);
	$await_content($scope);
};
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $c__closure = /*@__PURE__*/ _closure($await_content__c);
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_0_c#6/fill", "c/6", ($scope) => {
	$if$1($scope, $scope.c ? 0 : 1);
	$c__closure($scope);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_promise($scope, input.promise);
};
const $input_promise = /*@__PURE__*/ _const("input_promise", $if_content__input_promise);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<h1>A branch that waits on a settled promise</h1><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/5", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $outer_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
	$input_promise($scope["#childScope/0"], Promise.resolve(0));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
