// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button class=outer></button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $wrap_content__x_n = /*@__PURE__*/ _closure_get("x_n/4", ($scope) => _text($scope["#text/0"], $scope._.x_n), 0, "__tests__/template.marko_1_x_n#0:3/subscribe");
const $wrap_content__x = /*@__PURE__*/ _let("x/3", ($scope) => _text($scope["#text/1"], $scope.x));
const $wrap_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$wrap_content__x($scope, +$scope.x + 1);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__x_n($scope);
	$wrap_content__x($scope, 10);
	$wrap_content__setup__script($scope);
};
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span><!>-<!></span><button></button>", "D%c%l ", $wrap_content__setup);
const $x = /*@__PURE__*/ _let("x/2", ($scope) => $x_n($scope, $scope.x.n));
const $x_n__closure = /*@__PURE__*/ _closure($wrap_content__x_n);
const $x_n__script = _script("__tests__/template.marko_0_x_n#3", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, { n: $scope.x_n + 1 });
}));
const $x_n = /*@__PURE__*/ _const("x_n", ($scope) => {
	$x_n__closure($scope);
	$x_n__script($scope);
});
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
	$x($scope, { n: 1 });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
