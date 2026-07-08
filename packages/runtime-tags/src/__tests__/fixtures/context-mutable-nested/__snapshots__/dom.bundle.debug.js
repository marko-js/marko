// tags/theme-display.marko
const $template$2 = "<!><span class=display> </span>";
const $walks$2 = "bD l";
const $context_theme = _context_closure("__tests__/tags/theme-provider.marko", ($scope2, $provider) => $theme$1($scope2, $provider["#ContextValue"]), "__tests__/tags/theme-display.marko_0_theme/context", "<theme-provider>");
const $theme$1 = /*@__PURE__*/ _const("theme", ($scope) => _text($scope["#text/0"], $scope.theme));
const $setup$2 = $context_theme;
var theme_display_default = /*@__PURE__*/ _template("__tests__/tags/theme-display.marko", $template$2, $walks$2, $setup$2);

// tags/theme-provider.marko
const $template$1 = "<!><!><button>change</button>";
const $walks$1 = "b%b b";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $theme = /*@__PURE__*/ _let("theme/6", ($scope) => _context_value($scope, $scope.theme, "__tests__/tags/theme-provider.marko"));
const $input_id__script = _script("__tests__/tags/theme-provider.marko_0_input_id", ($scope) => _on($scope["#button/1"], "click", function() {
	$theme($scope, `dark-${$scope.input_id}`);
}));
const $input_id = /*@__PURE__*/ _const("input_id", ($scope) => {
	_attr_class($scope["#button/1"], `change-${$scope.input_id}`);
	$theme($scope, `light-${$scope.input_id}`);
	$input_id__script($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
function $setup$1($scope) {
	_context_branch($scope, "__tests__/tags/theme-provider.marko");
}
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_content($scope, input.content);
};
var theme_provider_default = /*@__PURE__*/ _template("__tests__/tags/theme-provider.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
};
const $themeprovider_content__id = /*@__PURE__*/ _closure_get("id", ($scope) => _attr_class($scope["#button/0"], `show-${$scope._.id}`));
const $themeprovider_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$2), $if_content__setup);
const $themeprovider_content__show = /*@__PURE__*/ _let("show/2", ($scope) => $themeprovider_content__if($scope, $scope.show ? 0 : 1));
const $themeprovider_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$themeprovider_content__show($scope, true);
}));
const $themeprovider_content__setup = ($scope) => {
	$themeprovider_content__id($scope);
	$themeprovider_content__show($scope, false);
	$themeprovider_content__setup__script($scope);
};
const $themeprovider_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<button>show</button><!><!>", " b%c", $themeprovider_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $themeprovider_content($scope));
};
const $for_content__id = /*@__PURE__*/ _const("id", ($scope) => $input_id($scope["#childScope/0"], $scope.id));
const $for_content__$params = ($scope, $params2) => $for_content__id($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
function $setup($scope) {
	$for($scope, [[0, 1], (id) => id]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
