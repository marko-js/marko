// template.marko
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a11", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $count = _var_resume("a12", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $else_content_holes = /*@__PURE__*/ _update_scopes({ "Nhref:a": /*@__PURE__*/ _update_named_attr("a", "href") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content2_holes($p, $l));
const $for_update2 = _update_for_keyed(1, ($p2, $l2) => $for_content__update($p2, $l2));
const $count_seed = _update_signal("a12");
const $for_content__update = (_patch, _live) => {
	if ("Da" in _patch) _update_if(_patch, _live, "Da", "Aa", [0, $else_content_holes]);
};
const $if_content__update = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
	if ("Ab" in _patch) $for_update2(_live, [_patch["Ab"], "M"]);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("l" in _patch) _update_seed(_live, $count_seed, _patch["l"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("j" in _patch) _live["j"] = _patch["j"];
	if ("k" in _patch) _live["k"] = _patch["k"];
	if ("Dc" in _patch) _update_if(_patch, _live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a8", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
