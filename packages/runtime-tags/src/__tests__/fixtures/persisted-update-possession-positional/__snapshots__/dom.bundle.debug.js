// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
const $PanelB_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelB_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<section class=b>B: <!></section>", "Db%l", $PanelB_content__setup);
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
const $PanelA_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<span class=a>A: <!></span>", "Db%l", $PanelA_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $PanelA = /*@__PURE__*/ _const_persisted("PanelA");
const $PanelB = /*@__PURE__*/ _const_persisted("PanelB");
const $for = 0;
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	if (!updating) $for($scope, [$scope.$global.items]);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $PanelB_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $PanelA_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	if ("ConditionalRenderer:#text/0" in _patch || "BranchScopes:#text/0" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("PanelA" in _patch) _live["PanelA"] = _patch["PanelA"];
	if ("PanelB" in _patch) _live["PanelB"] = _patch["PanelB"];
	if ("BranchScopes:#ul/2" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/2"], "#LoopKey"]);
};
_update_content("__tests__/template.marko_3_content", $PanelB_content_holes);
_update_content("__tests__/template.marko_1_content", $PanelA_content_holes);
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2() {
	return patch(_merge);
}

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
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li><!></li>", "D%l", $for_content__setup, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	if (!updating) $for($scope, [$scope.$global.items]);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
