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
const $template = /*@__PURE__*/ ((_w0) => `<button class=outer> </button><p> </p>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D lD l/${_w0}&`)("D%l");
const $wrap_content3__x = /*@__PURE__*/ _closure_get("x/6", ($scope) => _text($scope["#text/0"], $scope._.x), 0, "__tests__/template.marko_3_x#4/subscribe");
const $wrap_content3__setup = $wrap_content3__x;
const $wrap_content3 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<s> </s>", "D ", $wrap_content3__setup);
const $wrap_content2__x = /*@__PURE__*/ _closure_get("x/5", ($scope) => _text($scope["#text/0"], $scope._._.x), ($scope) => $scope._._, "__tests__/template.marko_2_x#4/subscribe");
const $wrap_content2__setup = ($scope) => {
	$wrap_content2__x($scope);
	$wrap_content2__x2($scope);
};
const $wrap_content2__x2 = /*@__PURE__*/ _closure_get("x/6", ($scope) => _text($scope["#text/1"], $scope._.x), 0, "__tests__/template.marko_2_x#4/subscribe");
const $wrap_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<i> </i><b> </b>", "D lD ", $wrap_content2__setup);
const $wrap_content__x = /*@__PURE__*/ _closure_get("x/5", ($scope) => _text($scope["#text/1"], $scope._.x), 0, "__tests__/template.marko_1_x#4/subscribe");
const $wrap_content__x2__closure = /*@__PURE__*/ _closure($wrap_content2__x2, $wrap_content3__x);
const $wrap_content__x2 = /*@__PURE__*/ _let("x/4", $wrap_content__x2__closure);
const $wrap_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$wrap_content__x2($scope, +$scope.x + 1);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__x($scope);
	$input_content_direct($scope["#childScope/2"], $wrap_content2($scope));
	$input_content_direct($scope["#childScope/3"], $wrap_content3($scope));
	$wrap_content__x2($scope, 1);
	$wrap_content__setup__script($scope);
};
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0, _w1) => `<button class=inner></button><em> </em>${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => ` bD l/${_w0}&/${_w1}&`)("D%l", "D%l"), $wrap_content__setup);
const $x__closure = /*@__PURE__*/ _closure($wrap_content__x, $wrap_content2__x);
const $x = /*@__PURE__*/ _let("x/4", ($scope) => {
	$z($scope, $scope.x);
	$x__closure($scope);
});
const $z = ($scope) => {
	_text($scope["#text/1"], $scope.x);
	_text($scope["#text/2"], $scope.x);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/3"], $wrap_content($scope));
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
