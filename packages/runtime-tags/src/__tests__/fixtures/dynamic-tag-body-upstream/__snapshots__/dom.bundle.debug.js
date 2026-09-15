// tags/child/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_foo$1 = ($scope, input_foo) => _text($scope["#text/0"], input_foo);
const $input$1 = ($scope, input) => $input_foo$1($scope, input.foo);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $tag_content__input_foo = /*@__PURE__*/ _closure_get("input_foo", ($scope) => $input_foo$1($scope["#childScope/0"], $scope._.input_foo));
const $tag_content__setup = $tag_content__input_foo;
const $tag_content = _content_resume("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $tag_content__setup);
const $inputtag_content__input_foo = /*@__PURE__*/ _closure_get("input_foo", ($scope) => $input_foo$1($scope["#childScope/0"], $scope._.input_foo));
const $inputtag_content__setup = $inputtag_content__input_foo;
const $inputtag_content = _content_resume("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $inputtag_content__setup);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", $tag_content);
const $tag = /*@__PURE__*/ _let("tag/7", ($scope) => $dynamicTag2($scope, $scope.tag));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$tag($scope, $scope.tag === "div" ? "section" : "div");
}));
function $setup($scope) {
	$tag($scope, "div");
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag = $dynamicTag;
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_foo($scope, input.foo);
};
const $input_foo__closure = /*@__PURE__*/ _closure($inputtag_content__input_foo, $tag_content__input_foo);
const $input_foo = /*@__PURE__*/ _const("input_foo", $input_foo__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
