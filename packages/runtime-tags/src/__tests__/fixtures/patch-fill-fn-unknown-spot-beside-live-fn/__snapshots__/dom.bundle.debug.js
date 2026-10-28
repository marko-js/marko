// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input.fn("x"));
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__key__OR__o = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill3", "o", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill2", "key", /*@__PURE__*/ _or(4, ($scope) => $input$1($scope["#childScope/0"], { fn: $scope._.o[$scope._.key] })), "#text/0", 0), "#text/0", 0);
const $if_content__key = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__key__OR__o);
const $if_content__setup = ($scope) => {
	$if_content__key._($scope);
	$if_content__o._($scope);
	$if_content__o_key._($scope);
	$if_content__first._($scope);
	$if_content__tag._($scope);
};
const $if_content__o = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__key__OR__o);
const $if_content__o_key = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill4", "o_key", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/3"], $scope._.o_key)));
const $if_content__first = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill5", "first", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/1"], { fn: $scope._.first })));
const $if_content__tag = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill6", "tag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/2"], { fn: $scope._.tag })));
const $o_key = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill4", "o_key", $if_content__o_key);
const $o2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "o", ($scope) => {
	$if_content__o($scope);
	$o_key($scope, $scope.o.key);
}, $if_content__o);
const $input_title__OR__key = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "key", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _or(9, ($scope) => $o2($scope, {
	[$scope.key]: $o($scope),
	key: $scope.input_title
}))));
const $key = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "key", ($scope) => {
	$if_content__key($scope);
	$input_title__OR__key($scope);
}, $if_content__key);
const $input_key = $key;
const $tag2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill6", "tag", $if_content__tag);
const $pattern2 = ($scope, $pattern) => $first2($scope, $pattern[0]);
const $input_title__OR__input_pre = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_pre", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _or(7, ($scope) => $pattern2($scope, [...$scope.input_pre, $first($scope)]))));
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$tag2($scope, $tag($scope));
	$input_title__OR__key($scope);
	$input_title__OR__input_pre($scope);
});
const $first2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill5", "first", $if_content__first);
const $input_pre = /*@__PURE__*/ _const("input_pre", $input_title__OR__input_pre);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<p> </p>`)($template$1, $template$1, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&D l`)("D l", "D l", "D l"), $if_content__setup);
const $show = _let("show/15", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_key($scope, input.key);
	$input_title($scope, input.title);
	$input_pre($scope, input.pre);
};
const $o = ($scope) => (s) => s + ":" + $scope.input_title;
const $tag = ($scope) => (s) => s + "#" + $scope.input_title;
const $first = ($scope) => (s) => s + "=" + $scope.input_title;
_bind_resume("__tests__/template.marko_0/o input_title", $o);
_bind_resume("__tests__/template.marko_0/tag input_title", $tag);
_bind_resume("__tests__/template.marko_0/first input_title", $first);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
