// tags/custom-tag.marko
const $template$1 = "<button class=inc> </button><!><!>";
const $walks$1 = " D l%c";
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2");
const $input_content__OR__input_name__OR__x = /* @__PURE__ */ _or(8, ($scope) => $dynamicTag($scope, $scope.input_content, () => ({
	count: $scope.x,
	name: $scope.input_name
})), 2);
const $x__script = _script("__tests__/tags/custom-tag.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/7", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$input_content__OR__input_name__OR__x($scope);
	$x__script($scope);
});
function $setup$1($scope) {
	$x($scope, 1);
}
const $input_content = /* @__PURE__ */ _const("input_content", $input_content__OR__input_name__OR__x);
const $input_name = /* @__PURE__ */ _const("input_name", $input_content__OR__input_name__OR__x);
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_name($scope, input.name);
};
var custom_tag_default = /* @__PURE__ */ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&b`)($walks$1);
const $customtag_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $customtag_content__count = ($scope, count) => _text($scope["#text/1"], count);
const $customtag_content__$params = ($scope, $params2) => {
	$customtag_content__count($scope, ($params2?.[0]).count);
	$customtag_content__name($scope, ($params2?.[0]).name);
};
const $customtag_content = _content_resume("__tests__/template.marko_1_content", "<div>Count (<!>): <!></div>", "Db%c%l", 0, $customtag_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $customtag_content($scope));
	$input_name($scope["#childScope/0"], "hello");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
