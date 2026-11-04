// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $if_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/6", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $if_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__uid($scope, _id($scope));
};
const $outer_content__if = /*@__PURE__*/ _if("#text/0", "<input><label> </label>", " b D ", $if_content__setup);
const $outer_content__input_show = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_show#0:3/subscribe", "input_show/5", ($scope) => $outer_content__if($scope, $scope._.input_show ? 0 : 1));
const $outer_content__setup = $outer_content__input_show;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $outer_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_show__closure = /*@__PURE__*/ _closure($outer_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

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
const $if_content__c = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_content$1($scope["#childScope/0"], $scope._.c));
const $if_content__setup = $if_content__c;
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup, "<p>none</p>");
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_0_c#5/fill", "c/5", ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$if_content__c($scope);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
