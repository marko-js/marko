// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for("#ul/2", "__tests__/template.marko_2_content/update", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("PanelA" in patch) live["PanelA"] = patch["PanelA"];
	if ("PanelB" in patch) live["PanelB"] = patch["PanelB"];
	if ("BranchScopes:#ul/2" in patch) $for_update(live, [patch["BranchScopes:#ul/2"], "#LoopKey"]);
};
_update_content("__tests__/template.marko_3_content", _update_scope);
_update_content("__tests__/template.marko_1_content", _update_scope);
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : undefined;

// template.marko
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
const $PanelB_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelB_content = _content_resume("__tests__/template.marko_3_content", "<section class=b>B: <!></section>", "Db%l", $PanelB_content__setup);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__PanelA__OR__PanelB__OR__item_view = /*@__PURE__*/ _or(4, ($scope) => $for_content__dynamicTag($scope, $scope.item_view === "b" ? $scope._.PanelB : $scope._.PanelA), 2);
const $for_content__PanelA = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__item_view($scope);
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__PanelA._($scope);
	if (!updating) $for_content__PanelB._($scope);
};
const $for_content__PanelB = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__item_view($scope);
});
const $for_content__item_view = /*@__PURE__*/ _const_persisted("item_view", $for_content__PanelA__OR__PanelB__OR__item_view);
const $for_content__$params = ($scope, $params2) => $for_content__item_view($scope, $params2[0]?.view);
const $PanelA_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelA_content = _content_resume("__tests__/template.marko_1_content", "<span class=a>A: <!></span>", "Db%l", $PanelA_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $PanelA = /*@__PURE__*/ _const_persisted("PanelA");
const $PanelB = /*@__PURE__*/ _const_persisted("PanelB");
const $for = /*@__PURE__*/ _for_of("#ul/2", "<!><!><!>", "b%c", $for_content__setup, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	if (!updating) $for($scope, [$scope.$global.items, function(item) {
		return item.id;
	}]);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
