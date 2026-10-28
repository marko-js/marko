// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $wrap_content__input_a__OR__n = /*@__PURE__*/ _fill_subscribers("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/1"], $scope._.input_a + $scope.n)), "input_a/4", 0);
const $wrap_content__input_a__script = _script("__tests__/template.marko_1_input_a#0:3", ($scope) => {
	_el_read($scope["#div/2"]).textContent = String($scope._.input_a);
	_el_read($scope["#div/2"]).dataset.runs = String(+(_el_read($scope["#div/2"]).dataset.runs || 0) + 1);
});
const $wrap_content__input_a = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _closure_get("input_a/4", ($scope) => {
	$wrap_content__input_a__OR__n($scope);
	$wrap_content__input_a__script($scope);
}, 0, "__tests__/template.marko_1_input_a#0:3/subscribe"), 0);
const $wrap_content__n = _let("n/3", $wrap_content__input_a__OR__n);
const $wrap_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$wrap_content__n($scope, +$scope.n + 1);
}));
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_a($scope);
	$wrap_content__n($scope, 0);
	$wrap_content__setup__script($scope);
};
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<div><button class=n>n</button><p class=j> </p><div class=e></div></div>", "D bD l ", $wrap_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
}
const $input = ($scope, input) => $input_a($scope, input.a);
const $input_a__closure = /*@__PURE__*/ _closure($wrap_content__input_a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $input_a__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
