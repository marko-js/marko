// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $outer_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
	$input_promise($scope["#childScope/0"], 0);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D%l", 0, $input$1);

// tags/outer.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
const $await_content__c = /*@__PURE__*/ _init_resume("__tests__/tags/outer.marko_1_c#0:6/init", /*@__PURE__*/ _closure_get("c/7", ($scope) => $input_content$1($scope["#childScope/0"], $scope._.c), 0, "__tests__/tags/outer.marko_1_c#0:6/subscribe"));
const $await_content__setup = $await_content__c;
const $c__closure = /*@__PURE__*/ _closure($await_content__c);
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill0", "c/6", $c__closure);
const $input_content = $c;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
function $setup($scope) {
	$await_content($scope);
	$setup__script($scope);
}
const $await_content = /*@__PURE__*/ _await_content("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
const $input_promise = $await_promise;
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_promise($scope, input.promise);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
