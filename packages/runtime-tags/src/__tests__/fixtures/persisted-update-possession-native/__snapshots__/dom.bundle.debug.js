// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("ConditionalRenderer:#text/2" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_update_content("__tests__/template.marko_2_content", _update_scope);
_update_content("__tests__/template.marko_1_content", _update_scope);
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} notes` : undefined;

// template.marko
const $template = "<button class=count>clicked <!></button><section class=shell><!></section>";
const $walks = " Db%lD%l";
const $globalviewplainblockquoteWidget_content__setup = ($scope) => _text($scope["#text/0"], getNote?.($scope.$global.topic));
const $globalviewplainblockquoteWidget_content = _content_resume("__tests__/template.marko_2_content", "plain: <!>", "b%b", $globalviewplainblockquoteWidget_content__setup);
const $Widget_content__setup = ($scope) => _text($scope["#text/0"], getNote?.($scope.$global.topic));
const $Widget_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=widget>widget: <!></p>", "Db%l", $Widget_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $globalviewplainblockquoteWidget_content);
const $Widget = ($scope, Widget) => $dynamicTag($scope, $scope.$global.view === "plain" ? "blockquote" : Widget, () => ({ class: "hop" }));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Widget($scope, { content: $Widget_content($scope) });
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
