// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#text/2", ($p, $l) => _update_scope($p, $l));
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("BranchScopes:#text/2" in _patch) $for_update(_live, [_patch["BranchScopes:#text/2"], "#LoopKey"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul><!><li class=trailing>end</li></ul>";
const $walks = " Db%lD%l";
const $for_content__item_id = ($scope, item_id) => _text($scope["#text/0"], item_id);
const $for_content__item_label = ($scope, item_label) => _text($scope["#text/1"], item_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_label($scope, $params2[0]?.label);
};
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#text/2", "<li><!>:<!></li>", "D%c%l", 0, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $for($scope, [$scope.$global.items, "id"]);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
