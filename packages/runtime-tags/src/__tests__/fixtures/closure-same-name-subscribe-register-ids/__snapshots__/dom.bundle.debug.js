// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=x> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
const $placeholder_content = _content("__tests__/template.marko_5*content", "loading");
const $wrap_content2__x = /*@__PURE__*/ _closure_get("x/5", ($scope) => _text($scope["#text/0"], $scope._.x), 0, "__tests__/template.marko_4_x#1:3/subscribe");
const $wrap_content2__setup = $wrap_content2__x;
const $wrap_content2 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<s> </s>", "D ", $wrap_content2__setup);
const $await_content__x = /*@__PURE__*/ _closure_get("x/4", ($scope) => _text($scope["#text/0"], $scope._._._.x), ($scope) => $scope._._._, "__tests__/template.marko_3_x#0:3/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__x($scope);
	$await_content__x2($scope);
};
const $await_content__x2 = /*@__PURE__*/ _closure_get("x/5", ($scope) => _text($scope["#text/1"], $scope._._.x), ($scope) => $scope._._, "__tests__/template.marko_3_x#1:3/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<i> </i><b> </b>", "D lD ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $wrap_content__x__closure = /*@__PURE__*/ _closure($await_content__x2, $wrap_content2__x);
const $wrap_content__x = /*@__PURE__*/ _let("x/3", $wrap_content__x__closure);
const $wrap_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $wrap_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$wrap_content__x($scope, +$scope.x + 1);
}));
const $wrap_content__setup = ($scope) => {
	$input_content_direct($scope["#childScope/2"], $wrap_content2($scope));
	$wrap_content__x($scope, 10);
	$wrap_content__try($scope);
	$wrap_content__setup__script($scope);
};
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `<button class=y></button><!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => ` b%b/${_w0}&`)("D%l"), $wrap_content__setup);
const $x__closure = /*@__PURE__*/ _closure($await_content__x);
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/2"], $wrap_content($scope));
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
