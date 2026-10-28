// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Field_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $Field_content__setup = $Field_content__input_label;
const $Field_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<span> </span>", "D ", $Field_content__setup);
const $for_content__Field = ($scope, Field) => {
	$input_content($scope["#childScope/0"], Field);
	$input_content($scope["#childScope/1"], Field);
};
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$for_content__Field($scope, { content: $Field_content($scope) });
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, $walks$1), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($Field_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
