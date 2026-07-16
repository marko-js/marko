// template.marko
const $for_content2__watched = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "watching" : "watch"));
const $for_content2__setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$for_content2__watched($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $for_content2__watched = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "watching" : "watch")));
_script_shared(($scope) => _on($scope.a, "click", function() {
	$for_content2__watched($scope, !$scope.g);
}));
const $watched_seed = _update_signal("a6");
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "Ndata-key:a": /*@__PURE__*/ _update_named_attr("a", "data-key") });
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(1, ($p, $l) => $for_content2__update($p, $l));
const $for_update2 = _update_for_keyed(0, ($p2, $l2) => $for_content__update($p2, $l2));
const $for_content2__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $watched_seed, _patch["g"]);
	$for_content2_holes(_patch, _live);
};
const $for_content__update = (_patch, _live) => {
	if ("e" in _patch) _live["e"] = _patch["e"];
	$for_content_holes(_patch, _live);
	if ("Ab" in _patch) $for_update(_live, [_patch["Ab"], "M"]);
};
const $update2 = (_patch, _live) => {
	if ("Aa" in _patch) $for_update2(_live, [_patch["Aa"], "M"]);
};
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
