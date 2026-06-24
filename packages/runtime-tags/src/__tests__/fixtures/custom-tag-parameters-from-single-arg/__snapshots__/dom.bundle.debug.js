// tags/custom-tag.marko
const $template$1 = "<button class=inc> </button><!><!>";
const $walks$1 = " D l%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", 0, 0, 1);
const $input_content__OR__x = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_content, () => [$scope.x]));
const $x__script = _script("__tests__/tags/custom-tag.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /*@__PURE__*/ _let("x/6", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$input_content__OR__x($scope);
	$x__script($scope);
});
function $setup$1($scope) {
	$x($scope, 1);
}
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__x);
const $input = ($scope, input) => $input_content($scope, input.content);
var custom_tag_default = /*@__PURE__*/ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $customtag_content__count = ($scope, count) => _text($scope["#text/0"], count);
const $customtag_content__$params = ($scope, $params2) => $customtag_content__count($scope, $params2[0]);
const $customtag_content = _content_resume("__tests__/template.marko_1_content", "<div>Count: <!></div>", "Db%l", 0, $customtag_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $customtag_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
