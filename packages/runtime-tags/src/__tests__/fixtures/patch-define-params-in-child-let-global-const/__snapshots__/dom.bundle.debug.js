// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_0_c#5/fill", "c/5", ($scope) => $dynamicTag($scope, $scope.c, ($_) => ({ n: 2 })));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks$1);
const $Row_content__mark = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_mark#0:2/subscribe", "mark/4", ($scope) => _text($scope["#text/0"], $scope._.mark), 0, "__tests__/template.marko_0_mark#2/subscribers", 0);
const $Row_content__setup = $Row_content__mark;
const $Row_content__n = ($scope, n) => _text($scope["#text/1"], n);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content("__tests__/template.marko_1*content", $Row_content__template, $Row_content__walks, $Row_content__setup, $Row_content__$params);
const $mark__closure = /*@__PURE__*/ _closure($Row_content__mark);
const $mark = /*@__PURE__*/ _const("mark", $mark__closure);
const $setup__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_label#4", ($scope) => $mark($scope, $scope.$global.label + "!"), "label");
const $Row = ($scope, Row) => $input_content($scope["#childScope/1"], Row);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$Row_content__n($scope["#childScope/0"], 1);
	$setup$1($scope["#childScope/1"]);
	$Row($scope, { content: $Row_content($scope) });
	$setup__$global_label($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
