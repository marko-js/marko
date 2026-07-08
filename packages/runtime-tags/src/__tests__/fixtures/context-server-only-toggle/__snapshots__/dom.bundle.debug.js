// tags/info-display.marko
const $template$2 = "<!><span> </span>";
const $walks$2 = "bD l";
const $theme = ($scope, theme) => _text($scope["#text/0"], theme);
function $setup$2($scope) {
	$theme($scope, _context_read($scope, "theme", "__tests__/tags/info-provider.marko", "<info-provider>"));
}
var info_display_default = /*@__PURE__*/ _template("__tests__/tags/info-display.marko", $template$2, $walks$2, $setup$2);

// resolve-info.js
function resolveInfo($global, _marker) {
	return $global.theme;
}

// tags/info-provider.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
function $setup$1($scope) {
	$scope["#ContextValue"] = resolveInfo($scope.$global, "toggle_context_sentinel");
	_context_branch($scope, "__tests__/tags/info-provider.marko");
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var info_provider_default = /*@__PURE__*/ _template("__tests__/tags/info-provider.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $for_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
};
const $if_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
};
const $infoprovider_content__if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$2), $if_content__setup);
const $infoprovider_content__show = /*@__PURE__*/ _let("show/4", ($scope) => $infoprovider_content__if($scope, $scope.show ? 0 : 1));
const $infoprovider_content__for = /*@__PURE__*/ _for_of("#text/3", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$2), $for_content__setup);
const $infoprovider_content__items = /*@__PURE__*/ _let("items/5", ($scope) => $infoprovider_content__for($scope, [$scope.items, (x) => x]));
const $infoprovider_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$infoprovider_content__show($scope, !$scope.show);
	});
	_on($scope["#button/1"], "click", function() {
		$infoprovider_content__items($scope, [...$scope.items, $scope.items?.length]);
	});
});
const $infoprovider_content__setup = ($scope) => {
	$infoprovider_content__show($scope, false);
	$infoprovider_content__items($scope, []);
	$infoprovider_content__setup__script($scope);
};
const $infoprovider_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<button class=show>show</button><button class=add>add</button><!><!><!>", " b b%b%c", $infoprovider_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $infoprovider_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
