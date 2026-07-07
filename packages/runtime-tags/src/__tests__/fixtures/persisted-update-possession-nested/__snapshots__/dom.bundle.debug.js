// tags/shell.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", 0);
};
var shell_marko_update_default = _resume("__tests__/tags/shell.marko_0_update", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Page_content__update = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", 0);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("#childScope/2" in patch) shell_marko_update_default(patch["#childScope/2"], live["#childScope/2"]);
};
_update_content("__tests__/template.marko_3_content", _update_scope);
_update_content("__tests__/template.marko_2_content", $Page_content__update);
_update_content("__tests__/template.marko_1_content", _update_scope);
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic} report` : undefined;

// tags/shell.marko
const $template$1 = "<div class=shell><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
enableBranches();
var shell_default = /*@__PURE__*/ _template("__tests__/tags/shell.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)("D%l");
const $PanelB_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelB_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<section class=b>Panel B: <!></section>", "Db%l", $PanelB_content__setup);
const $Page_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Page_content__PanelA__OR__PanelB = /*@__PURE__*/ _or(1, ($scope) => $Page_content__dynamicTag($scope, $scope.$global.view === "b" ? $scope._.PanelB : $scope._.PanelA));
const $Page_content__PanelA = /*@__PURE__*/ _closure_get("PanelA", ($scope) => {
	if (!updating) $Page_content__PanelA__OR__PanelB($scope);
});
const $Page_content__setup = ($scope) => {
	if (!updating) $Page_content__PanelA($scope);
	if (!updating) $Page_content__PanelB($scope);
};
const $Page_content__PanelB = /*@__PURE__*/ _closure_get("PanelB", ($scope) => {
	if (!updating) $Page_content__PanelA__OR__PanelB($scope);
});
const $Page_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<h3 class=page-heading>Page</h3><!><!>", "b%c", $Page_content__setup);
const $PanelA_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelA_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=a>Panel A: <!></p>", "Db%l", $PanelA_content__setup);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $PanelA = /*@__PURE__*/ _const("PanelA");
const $PanelB = /*@__PURE__*/ _const("PanelB");
const $Page = ($scope, Page) => $input_content($scope["#childScope/2"], Page);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	if (!updating) $Page($scope, { content: $Page_content($scope) });
	$setup__script($scope);
}
enableBranches();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
