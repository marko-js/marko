// tags/card.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function hash(s) {
	let h = 0;
	for (const c of s) h = h * 31 + c.charCodeAt(0) | 0;
	return h.toString(36);
}
const $card_content__h = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_h#0:1/subscribe", "h/2", ($scope) => _text($scope["#text/0"], $scope._.h), 0, "__tests__/template.marko_0_h#1/subscribers", 0);
const $card_content__setup = $card_content__h;
const $card_content = _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $card_content__setup);
const $h__closure = /*@__PURE__*/ _closure($card_content__h);
const $h = /*@__PURE__*/ _const("h", $h__closure);
const $setup__$global_token = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_token#4", ($scope) => $h($scope, hash($scope.$global.token)), "token");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
	$setup__$global_token($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
