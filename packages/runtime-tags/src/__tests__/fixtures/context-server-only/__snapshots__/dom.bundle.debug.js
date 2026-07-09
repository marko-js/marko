// resolve-theme.js
function resolveTheme($global, _marker) {
	return $global.theme;
}

// provider.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
function $setup$1($scope) {
	$scope["#ContextValue"] = resolveTheme($scope.$global, "context_value_sentinel");
	_context_branch($scope, "__tests__/provider.marko");
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var provider_default = /*@__PURE__*/ _template("__tests__/provider.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $Provider_content__theme = ($scope, theme) => _text($scope["#text/0"], theme);
const $Provider_content__loggedTheme = /*@__PURE__*/ _const("loggedTheme");
const $Provider_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	console.log($scope.loggedTheme);
}));
const $Provider_content__setup = ($scope) => {
	$Provider_content__theme($scope, _context_read($scope, "theme", "__tests__/provider.marko", "./provider.marko"));
	$Provider_content__loggedTheme($scope, _context_read($scope, "loggedTheme", "__tests__/provider.marko", "./provider.marko"));
	$Provider_content__setup__script($scope);
};
const $Provider_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<!><div> </div><button>log theme</button>", "bD l b", $Provider_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $Provider_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
