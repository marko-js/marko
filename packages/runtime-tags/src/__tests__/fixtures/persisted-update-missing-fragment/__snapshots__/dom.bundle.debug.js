// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/4", ($p, $l) => _update_scope($p, $l));
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("ConditionalRenderer:#text/2" in _patch || "BranchScopes:#text/2" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
	if ("ConditionalRenderer:#text/3" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
	if ("BranchScopes:#ul/4" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/4"], "#LoopKey"]);
};
_update_content("__tests__/template.marko_2_content", _update_scope);
_update_content("__tests__/template.marko_1_content", _update_scope);
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// data.js
const getNote = typeof window === "undefined" ? (panel, topic) => `panel ${panel} covers ${topic}` : undefined;
const getItems = typeof window === "undefined" ? (range) => [
	{
		id: 1,
		name: "alpha"
	},
	{
		id: 2,
		name: "beta"
	},
	range === "wide" && {
		id: 3,
		name: "gamma"
	}
].filter(Boolean) : undefined;

// template.marko
const $template = "<button class=count>clicked <!></button><!><!><ul class=items></ul>";
const $walks = " Db%l%b%b b";
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $PanelB_content__setup = ($scope) => _text($scope["#text/0"], getNote?.("b", $scope.$global.topic));
const $PanelB_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=b> </p>", "D l", $PanelB_content__setup);
const $PanelA_content__setup = ($scope) => _text($scope["#text/0"], getNote?.("a", $scope.$global.topic));
const $PanelA_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=a> </p>", "D l", $PanelA_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $PanelA__OR__PanelB = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.$global.view === "b" ? $scope.PanelB : $scope.PanelA));
const $PanelA = /*@__PURE__*/ _const_persisted("PanelA", $PanelA__OR__PanelB);
const $PanelB = /*@__PURE__*/ _const_persisted("PanelB", $PanelA__OR__PanelB);
const $if = /*@__PURE__*/ _if("#text/3", "<p class=alert>attention needed</p>", "b", 0, "<p class=calm>all clear</p>", "b");
const $for = /*@__PURE__*/ _for_of("#ul/4", "<li> </li>", "D l", 0, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	if (!updating) $if($scope, $scope.$global.alert ? 0 : 1);
	if (!updating) $for($scope, [getItems?.($scope.$global.range), function(item) {
		return item.id;
	}]);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
