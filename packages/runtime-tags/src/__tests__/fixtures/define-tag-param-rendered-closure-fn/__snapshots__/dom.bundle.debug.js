// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content, ($_) => ({ on: true }));
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<!>${_w0}${_w1}${_w2}`)($D_content__template, $template$1, $template$2);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `b/${_w0}&/${_w1}&/${_w2}&`)($D_content__walks, "b%c", $walks$2);
const $if_content__f = /*@__PURE__*/ _closure_get("f/9", ($scope) => _text($scope["#text/0"], $scope._._.f()), ($scope) => $scope._._, "__tests__/template.marko_2_f#0:7/subscribe");
const $if_content__setup = $if_content__f;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $D_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", $D_content__template, $D_content__walks, 0, $D_content__$params);
const $f2__closure = /*@__PURE__*/ _closure($if_content__f);
const $f2 = /*@__PURE__*/ _const("f", $f2__closure);
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => $f2($scope, $f($scope)));
const $D = ($scope, D) => $input_content($scope["#childScope/1"], D);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$setup$2($scope["#childScope/2"]);
	$D($scope, { content: $D_content($scope) });
}
const $input_x = ($scope, input_x) => $D_content__on($scope["#childScope/0"], input_x);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
};
const $f = ($scope) => function() {
	return $scope.input_a;
};
_resumed["__tests__/template.marko_0/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup);
