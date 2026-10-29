// tags/card.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $wrap2 = ($scope, wrap) => $input_fmt($scope["#childScope/0"], wrap);
function $setup($scope) {
	$input_n($scope["#childScope/0"], 1);
	$input_tag($scope["#childScope/0"], card_default);
	$wrap2($scope, $wrap);
}
const $input_label = ($scope, input_label) => $input_label$2($scope["#childScope/0"], input_label);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
function $wrap(v) {
	return "w-" + v;
}
_resumed["__tests__/template.marko_0/wrap"] = $wrap;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/outer.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $if_content__input_label__OR__T = /*@__PURE__*/ _fill_join_if("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:7_T#0:9/init", 3, ($scope) => "T" in $scope._ && $if_content__dynamicTag($scope, $scope._.T, ($_) => ({ label: $scope._.input_label }))), "#text/0", 0);
const $if_content__input_label__OR__f = /*@__PURE__*/ _fill_join_if("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:7_f#0:10/init", 4, ($scope) => "f" in $scope._ && _text($scope["#text/2"], $scope._.f($scope._.input_label))), "#text/0", 0);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__input_label__OR__T($scope);
	$if_content__input_label__OR__f($scope);
});
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__n._($scope);
	$if_content__T._($scope);
	$if_content__f._($scope);
};
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/tags/outer.marko_1_n#0:8/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.n)));
const $if_content__T = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__T);
const $if_content__f = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__f);
const $n = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("n/8", $if_content__n));
const $input_n = $n;
const $T = /*@__PURE__*/ _let("T/9", $if_content__T);
const $input_tag = $T;
const $f = /*@__PURE__*/ _let("f/10", $if_content__f);
const $input_fmt = $f;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p><!><i> </i>", "D l%bD ", $if_content__setup);
const $input_more = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_fmt($scope, input.fmt);
	$input_label($scope, input.label);
	$input_n($scope, input.n);
	$input_more($scope, input.more);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "b%c", 0, $input);
