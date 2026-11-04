// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_kind($scope["#childScope/0"], "p");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/plain.marko
const $template$1 = "<i>plain</i>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "b");

// tags/card.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const registry = { p: plain_default };
const $placeholder_content = _content_resume("__tests__/tags/card.marko_2*content", "<em>loading</em>");
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $try_content__input_kind = /*@__PURE__*/ _closure_get_patch("__tests__/tags/card.marko_1_input_kind#0:3/subscribe", "input_kind/4", ($scope) => $try_content__dynamicTag($scope, registry[$scope._.input_kind]));
const $try_content__setup = $try_content__input_kind;
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup = $try;
const $input = ($scope, input) => $input_kind($scope, input.kind);
const $input_kind__closure = /*@__PURE__*/ _closure($try_content__input_kind);
const $input_kind = /*@__PURE__*/ _const("input_kind", $input_kind__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, "b%c", $setup, $input);
