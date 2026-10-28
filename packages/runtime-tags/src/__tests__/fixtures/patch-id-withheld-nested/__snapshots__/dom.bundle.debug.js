// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $for_content__rid = ($scope, rid) => {
	_attr($scope["#input/0"], "id", rid);
	_attr($scope["#label/1"], "for", rid);
};
const $for_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope["#LoopKey"]);
	$for_content__rid($scope, _id($scope));
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe"), 0));
const $if_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__uid($scope, _id($scope));
};
const $card_content__if = /*@__PURE__*/ _if("#text/0", "<input><label> </label>", " b D ", $if_content__setup);
const $card_content__input_show = /*@__PURE__*/ _closure_get("input_show/6", ($scope) => $card_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_1_input_show#0:3/subscribe");
const $card_content__setup = ($scope) => {
	$card_content__input_show($scope);
	$card_content__input_items($scope);
};
const $card_content__for = /*@__PURE__*/ _for_of("#text/1", "<input><label> </label>", " b D ", $for_content__setup);
const $card_content__input_items = /*@__PURE__*/ _closure_get("input_items/8", ($scope) => $card_content__for($scope, [$scope._.input_items, "id"]), 0, "__tests__/template.marko_1_input_items#0:5/subscribe");
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!><!>", "b%b%", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_items($scope, input.items);
};
const $input_show__closure = /*@__PURE__*/ _closure($card_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_items__closure = /*@__PURE__*/ _closure($card_content__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = /*@__PURE__*/ _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
