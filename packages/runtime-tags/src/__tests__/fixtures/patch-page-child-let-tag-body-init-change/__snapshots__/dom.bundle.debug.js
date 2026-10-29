// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_alt = ($scope, input_alt) => $input_tag($scope["#childScope/0"], input_alt ? "b" : "em");
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_alt($scope, input.alt);
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/outer.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $tag_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/outer.marko_2_input_label#0:5/subscribe"), 0);
const $tag_content__setup = $tag_content__input_label;
const $tag_content = _content("__tests__/tags/outer.marko_2*content", " ", " ", $tag_content__setup);
_content_resume($tag_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tag_content);
const $if_content__tag = /*@__PURE__*/ _init_resume("__tests__/tags/outer.marko_1_tag#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.tag)));
const $if_content__setup = $if_content__tag;
const $tag = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("tag/6", $if_content__tag));
const $input_tag = $tag;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_more = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_more($scope, input.more);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($tag_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_label", $input_label__closure);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "b%c", 0, $input);
