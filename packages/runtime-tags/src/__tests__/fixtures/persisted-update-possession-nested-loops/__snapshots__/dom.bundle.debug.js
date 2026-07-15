// template.marko.update.mjs
const $for_update = _update_for_keyed("#text/1", ($p, $l) => $for_content2__update($p, $l));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update2 = _update_for_keyed("#text/1", ($p2, $l2) => $for_content__update($p2, $l2));
const $for_content2__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	_update_scope(_patch, _live);
};
const $for_content__update = (_patch, _live) => {
	if ("group_id" in _patch) _live["group_id"] = _patch["group_id"];
	_update_scope(_patch, _live);
	if ("BranchScopes:#text/1" in _patch) $for_update(_live, [_patch["BranchScopes:#text/1"], "#LoopKey"]);
};
const $update = (_patch, _live) => {
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("BranchScopes:#text/1" in _patch) $for_update2(_live, [_patch["BranchScopes:#text/1"], "#LoopKey"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $for_content2__group_id = /*@__PURE__*/ _for_closure("#text/1", ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], $scope._.group_id);
	}
});
const $for_content2__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, $scope._._.count + 1);
}));
const $for_content2__setup = ($scope) => {
	if (!updating) $for_content2__group_id._($scope);
	$for_content2__setup__script($scope);
};
const $for_content2__item_id = ($scope, item_id) => _text($scope["#text/2"], item_id);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_id($scope, $params3[0]?.id);
const $for_content__group_id = /*@__PURE__*/ _const_persisted("group_id", ($scope) => {
	_text($scope["#text/0"], $scope.group_id);
	$for_content2__group_id($scope);
});
const $for_content__for = /*@__PURE__*/ _for_of("#text/1", "<button><!>:<!></button>", " D%c%l", $for_content2__setup, $for_content2__$params);
const $for_content__group_items = ($scope, group_items) => {
	if (!updating) $for_content__for($scope, [group_items, "id"]);
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__group_id($scope, $params2[0]?.id);
	$for_content__group_items($scope, $params2[0]?.items);
};
const $count = /*@__PURE__*/ _let_persisted("count/2", ($scope) => _text($scope["#text/0"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#text/1", "<section><h3> </h3><!></section>", "E l%l", 0, $for_content__$params);
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.groups, "id"]);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
