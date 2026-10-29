// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_w__OR__y = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.y + $scope._.input_w));
const $if_content__y = /*@__PURE__*/ _let("y/3", $if_content__input_w__OR__y);
const $if_content__x__OR__g = /*@__PURE__*/ _or(4, ($scope) => $if_content__y($scope, $scope.f($scope.x)));
const $if_content__x = /*@__PURE__*/ _let("x/1", $if_content__x__OR__g);
const $if_content__input_v = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__x($scope, $scope._.input_v));
const $if_content__f = /*@__PURE__*/ _const("f", $if_content__x__OR__g);
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$if_content__input_w._($scope);
	$if_content__f($scope, $f);
};
const $if_content__input_w = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_w__OR__y);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_v$1($scope, input.v);
	$input_w$1($scope, input.w);
};
const $input_v$1 = /*@__PURE__*/ _const("input_v", $if_content__input_v);
const $input_w$1 = /*@__PURE__*/ _const("input_w", $if_content__input_w);
function $f(v) {
	return v;
}
_resumed["__tests__/tags/child.marko_1/f"] = $f;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=set>set</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $v = /*@__PURE__*/ _let("v/7", ($scope) => $input_v$1($scope["#childScope/1"], $scope.v));
const $input_v = $v;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$v($scope, $scope.v + "!");
}));
const $setup = $setup__script;
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input_w = ($scope, input_w) => $input_w$1($scope["#childScope/1"], input_w);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_show($scope, input.show);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
