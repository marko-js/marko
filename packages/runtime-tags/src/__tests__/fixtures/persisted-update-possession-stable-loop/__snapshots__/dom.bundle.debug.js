// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#text/2", (p, l) => $for_content__update(p, l));
const $for_content2__update = (patch, live) => {
	_update_scope(patch, live);
	if ("ConditionalRenderer:#text/1" in patch || "BranchScopes:#text/1" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1");
};
const $for_content__update = (patch, live) => {
	if ("BranchScopes:#ul/0" in patch) _update_for(patch["BranchScopes:#ul/0"], live["BranchScopes:#ul/0"], $for_content2__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("PanelA" in patch) live["PanelA"] = patch["PanelA"];
	if ("PanelB" in patch) live["PanelB"] = patch["PanelB"];
	if ("BranchScopes:#text/2" in patch) $for_update(live, [patch["BranchScopes:#text/2"], "#LoopKey"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
const ITEMS = [{ id: "one" }, { id: "two" }];

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $PanelB_content = _content_resume("__tests__/template.marko_4_content", "<strong>B</strong>", "b");
const $for_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $for_content2__PanelA__OR__PanelB__OR__group_views__OR__item_id = /*@__PURE__*/ _or(5, ($scope) => $for_content2__dynamicTag($scope, $scope._.group_views[$scope.item_id] === "b" ? $scope._._.PanelB : $scope._._.PanelA), 3);
const $for_content2__PanelA = /*@__PURE__*/ _closure_get("PanelA", ($scope) => {
	if (!updating) $for_content2__PanelA__OR__PanelB__OR__group_views__OR__item_id($scope);
}, ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__PanelA($scope);
	if (!updating) $for_content2__PanelB($scope);
	if (!updating) $for_content2__group_views._($scope);
};
const $for_content2__PanelB = /*@__PURE__*/ _closure_get("PanelB", ($scope) => {
	if (!updating) $for_content2__PanelA__OR__PanelB__OR__group_views__OR__item_id($scope);
}, ($scope) => $scope._._);
const $for_content2__group_views = /*@__PURE__*/ _for_closure("#ul/0", ($scope) => {
	if (!updating) $for_content2__PanelA__OR__PanelB__OR__group_views__OR__item_id($scope);
});
const $for_content2__item_id = /*@__PURE__*/ _const_persisted("item_id", ($scope) => {
	_text($scope["#text/0"], $scope.item_id);
	$for_content2__PanelA__OR__PanelB__OR__group_views__OR__item_id($scope);
});
const $for_content2__$params = ($scope, $params3) => $for_content2__item_id($scope, $params3[0]?.id);
const $for_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>: <!></li>", "D%c%l", $for_content2__setup, $for_content2__$params);
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__for($scope, [ITEMS, "id"]);
};
const $for_content__$params = ($scope, $params2) => $for_content__group_views($scope, $params2[0]?.views);
const $for_content__group_views = /*@__PURE__*/ _const_persisted("group_views", $for_content2__group_views);
const $PanelA_content = _content_resume("__tests__/template.marko_1_content", "<strong>A</strong>", "b");
const $PanelA = /*@__PURE__*/ _const_persisted("PanelA");
const $PanelB = /*@__PURE__*/ _const_persisted("PanelB");
const $count = /*@__PURE__*/ _let_persisted("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#text/2", "<ul></ul>", " b", $for_content__setup, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.groups, "id"]);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
