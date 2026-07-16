// template.marko.persisted.mjs
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content2__group_id__OR__item_id = /*@__PURE__*/ _or(5, ($scope) => _attr($scope["#button/0"], "data-key", $scope._.group_id + ":" + $scope.item_id));
const $for_content2__group_id = /*@__PURE__*/ _for_closure("#text/1", ($scope) => {
	if (!updating) $for_content2__group_id__OR__item_id($scope);
});
const $for_content2__watched = _var_resume("__tests__/template.marko_2_watched/var", /*@__PURE__*/ _let_persisted("watched/6", ($scope) => _text($scope["#text/1"], $scope.watched ? "watching" : "watch")));
const $for_content2__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$for_content2__watched($scope, !$scope.watched);
}));
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__group_id._($scope);
	$for_content2__watched($scope, false);
	$for_content2__setup__script($scope);
};
const $for_content2__item_id = /*@__PURE__*/ _const_persisted("item_id", $for_content2__group_id__OR__item_id);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_id($scope, $params3[0]?.id);
const $for_content__group_id = /*@__PURE__*/ _const_persisted("group_id", ($scope) => {
	_text($scope["#text/0"], $scope.group_id);
	$for_content2__group_id($scope);
});
const $for_content__for = 0;
const $for_content__group_items = ($scope, group_items) => {
	if (!updating) $for_content__for($scope, [group_items, "id"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__group_id($scope, $params2[0]?.id);
	$for_content__group_items($scope, $params2[0]?.items);
};
const $for = 0;
function $setup($scope) {
	if (!updating) $for($scope, [getGroups?.($scope.$global.filter), "id"]);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
const $watched_seed = _update_signal("__tests__/template.marko_2_watched/var");
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "PatchAttr:data-key:#button/0": /*@__PURE__*/ _update_named_attr("#button/0", "data-key") });
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_update = _update_for_keyed("#text/1", ($p, $l) => $for_content2__update($p, $l));
const $for_update2 = _update_for_keyed("#text/0", ($p2, $l2) => $for_content__update($p2, $l2));
const $for_content2__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("watched" in _patch) _update_seed(_live, $watched_seed, _patch["watched"]);
	$for_content2_holes(_patch, _live);
};
const $for_content__update = (_patch, _live) => {
	if ("group_id" in _patch) _live["group_id"] = _patch["group_id"];
	$for_content_holes(_patch, _live);
	if ("BranchScopes:#text/1" in _patch) $for_update(_live, [_patch["BranchScopes:#text/1"], "#LoopKey"]);
};
const $update2 = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) $for_update2(_live, [_patch["BranchScopes:#text/0"], "#LoopKey"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// data.js
const groups = [{
	id: "parent-alpha-marker",
	items: [{ id: "shared-item" }, { id: "alpha-item" }]
}, {
	id: "parent-beta-marker",
	items: [{ id: "shared-item" }, { id: "beta-item" }]
}];
const getGroups = typeof window === "undefined" ? (filter) => filter === "Beta" ? [{
	...groups[1],
	items: [groups[1].items[0]]
}] : groups : undefined;

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content2__group_id__OR__item_id = /*@__PURE__*/ _or(5, ($scope) => _attr($scope["#button/0"], "data-key", $scope._.group_id + ":" + $scope.item_id));
const $for_content2__group_id = /*@__PURE__*/ _for_closure("#text/1", ($scope) => {
	if (!updating) $for_content2__group_id__OR__item_id($scope);
});
const $for_content2__watched = /*@__PURE__*/ _let_persisted("watched/6", ($scope) => _text($scope["#text/1"], $scope.watched ? "watching" : "watch"));
const $for_content2__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content2__watched($scope, !$scope.watched);
}));
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__group_id._($scope);
	$for_content2__watched($scope, false);
	$for_content2__setup__script($scope);
};
const $for_content2__item_id = /*@__PURE__*/ _const_persisted("item_id", $for_content2__group_id__OR__item_id);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_id($scope, $params3[0]?.id);
const $for_content__group_id = /*@__PURE__*/ _const_persisted("group_id", ($scope) => {
	_text($scope["#text/0"], $scope.group_id);
	$for_content2__group_id($scope);
});
const $for_content__for = /*@__PURE__*/ _for_of("#text/1", "<button> </button>", " D l", $for_content2__setup, $for_content2__$params);
const $for_content__group_items = ($scope, group_items) => {
	if (!updating) $for_content__for($scope, [group_items, "id"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__group_id($scope, $params2[0]?.id);
	$for_content__group_items($scope, $params2[0]?.items);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<section><h2> </h2><!></section>", "E l%l", 0, $for_content__$params);
function $setup($scope) {
	if (!updating) $for($scope, [getGroups?.($scope.$global.filter), "id"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
