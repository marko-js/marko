// tags/custom-tag.marko
const $template$1 = "<button class=inc><!>,<!></button><!><!>";
const $walks$1 = " D%c%l%c";
const $x__OR__y__script = _script("__tests__/tags/custom-tag.marko_0_x_y", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
	$y($scope, $scope.y + 1);
}));
const $x__OR__y = /*@__PURE__*/ _or(9, $x__OR__y__script);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3", 0, 0, 1);
const $input_content__OR__x__OR__y = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_content, () => [$scope.x, $scope.y]), 2);
const $x = /*@__PURE__*/ _let("x/7", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
const $y = /*@__PURE__*/ _let("y/8", ($scope) => {
	_text($scope["#text/2"], $scope.y);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
function $setup$1($scope) {
	$x($scope, 1);
	$y($scope, 10);
}
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__x__OR__y);
const $input = ($scope, input) => $input_content($scope, input.content);
var custom_tag_default = /*@__PURE__*/ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $customtag_content__count = ($scope, count) => _text($scope["#text/0"], count);
const $customtag_content__count2 = ($scope, count2) => _text($scope["#text/1"], count2);
const $customtag_content__$params = ($scope, $params2) => {
	$customtag_content__count($scope, $params2[0]);
	$customtag_content__count2($scope, $params2[1]);
};
const $customtag_content = _content_resume("__tests__/template.marko_1_content", "<div>Counts: <!>,<!></div>", "Db%c%l", 0, $customtag_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $customtag_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
