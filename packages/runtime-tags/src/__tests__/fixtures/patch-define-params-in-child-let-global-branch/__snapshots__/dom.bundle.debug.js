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
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($Row_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($Row_content__walks, $walks$1);
const $if_content__n = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_n#1:3/setup", "#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.n));
const $if_content__setup__$global_label = /*@__PURE__*/ _fill_global("__tests__/template.marko_2_$global_label#0:9", ($scope) => _text($scope["#text/0"], $scope.$global.label), "label");
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$if_content__setup__$global_label($scope);
};
const $Row_content__if = /*@__PURE__*/ _if("#text/0", "<em><!> <!></em>", "D%c%", $if_content__setup);
const $Row_content__n = /*@__PURE__*/ _const("n", ($scope) => {
	$Row_content__if($scope, $scope.n ? 0 : 1);
	$if_content__n($scope);
});
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content_resume("__tests__/template.marko_1*content", $Row_content__template, $Row_content__walks, 0, $Row_content__$params);
const $Row = ($scope, Row) => $input_content($scope["#childScope/1"], Row);
function $setup($scope) {
	$Row_content__n($scope["#childScope/0"], 1);
	$setup$1($scope["#childScope/1"]);
	$Row($scope, { content: $Row_content($scope) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
