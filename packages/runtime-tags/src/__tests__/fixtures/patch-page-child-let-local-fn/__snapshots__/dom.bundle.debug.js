// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/outer.marko
const $template = "<button>swap</button><!><!>";
const $walks = " b%c";
const $if_content__input_label__OR__f = /*@__PURE__*/ _fill_join_if("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:5_f#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.f($scope._.input_label))), "#text/1", 0);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_label__OR__f);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__f._($scope);
};
const $if_content__f = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_label__OR__f);
const $f2 = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "f/6", $if_content__f);
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f2($scope, (v) => "[" + v + "]");
}));
function $setup($scope) {
	$f2($scope, $f);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $input_more = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input = ($scope, input) => {
	$input_more($scope, input.more);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_label", $if_content__input_label);
function $f(v) {
	return "<" + v + ">";
}
_resumed["__tests__/tags/outer.marko_0/f"] = $f;
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
