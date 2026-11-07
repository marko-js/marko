// tags/frame.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_x = /*@__PURE__*/ _or_patch("__tests__/tags/frame.marko_0_input_content#3_input_x#4/setup", 5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => [$scope.input_x]));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_x);
const $input_x$1 = /*@__PURE__*/ _const("input_x", $input_content__OR__input_x);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_x$1($scope, input.x);
};
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/&b/${_w0}&b`)("b%c");
const $frame_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_n#0:4/subscribe", "input_n/6", ($scope) => _text($scope["#text/1"], $scope._.input_n), 0, "__tests__/template.marko_0_input_n#4/subscribers", 1);
const $frame_content__setup = $frame_content__input_n;
const $frame_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $frame_content = _content("__tests__/template.marko_2*content", "<p><!> <!></p>", "D%c%", $frame_content__setup, $frame_content__$params);
const $Effect_content__input_n__OR__twice__script = _script("__tests__/template.marko_1_input_n#0:4_twice#0", ($scope) => console.log("effect", $scope._.input_n, $scope.twice));
const $Effect_content__input_n__OR__twice = /*@__PURE__*/ _or(1, $Effect_content__input_n__OR__twice__script);
const $Effect_content__twice = /*@__PURE__*/ _const("twice", $Effect_content__input_n__OR__twice);
const $Effect_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_n#0:4/subscribe", "input_n/6", ($scope) => {
	$Effect_content__twice($scope, $scope._.input_n * 2);
	$Effect_content__input_n__OR__twice($scope);
}, 0, "__tests__/template.marko_0_input_n#4/subscribers", 0);
const $Effect_content__setup = $Effect_content__input_n;
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Effect_content__setup($scope["#childScope/0"]);
	$input_content($scope["#childScope/1"], $frame_content($scope));
}
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/1"], input_x);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_x($scope, input.x);
};
const $input_n__closure = /*@__PURE__*/ _closure($Effect_content__input_n, $frame_content__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
