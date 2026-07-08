// tags/theme-display.marko
const $template$2 = "<!><span class=display> </span>";
const $walks$2 = "bD l";
const $context_theme = _context_closure("__tests__/tags/theme-provider.marko", ($scope2, $provider) => $theme$1($scope2, $provider["#ContextValue"]), "__tests__/tags/theme-display.marko_0_theme/context", "<theme-provider>");
const $theme$1 = /*@__PURE__*/ _const("theme", ($scope) => _text($scope["#text/0"], $scope.theme));
const $setup$2 = $context_theme;
var theme_display_default = /*@__PURE__*/ _template("__tests__/tags/theme-display.marko", $template$2, $walks$2, $setup$2);

// tags/theme-provider.marko
const $template$1 = "<!><!><button class=change>change</button>";
const $walks$1 = "b%b b";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $theme = /*@__PURE__*/ _let("theme/5", ($scope) => _context_value($scope, $scope.theme, "__tests__/tags/theme-provider.marko"));
const $setup__script = _script("__tests__/tags/theme-provider.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$theme($scope, "dark");
}));
function $setup$1($scope) {
	_context_branch($scope, "__tests__/tags/theme-provider.marko");
	$theme($scope, "light");
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var theme_provider_default = /*@__PURE__*/ _template("__tests__/tags/theme-provider.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $if_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
};
const $themeprovider_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$2), $if_content__setup);
const $themeprovider_content__show = /*@__PURE__*/ _let("show/2", ($scope) => $themeprovider_content__if($scope, $scope.show ? 0 : 1));
const $themeprovider_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$themeprovider_content__show($scope, true);
}));
const $themeprovider_content__setup = ($scope) => {
	$themeprovider_content__show($scope, false);
	$themeprovider_content__setup__script($scope);
};
const $themeprovider_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<button class=show>show</button><!><!>", " b%c", $themeprovider_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $themeprovider_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
