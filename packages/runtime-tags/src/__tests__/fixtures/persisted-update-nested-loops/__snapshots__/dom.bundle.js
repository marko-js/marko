// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));

// template.marko.persisted.mjs
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $for_content3_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(1, ($p, $l) => $for_content2_holes($p, $l));
const $count_seed = _update_signal("a7");
const $if_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_for(_patch["Aa"], _live["Aa"], $for_content3_holes);
};
const $for_content__update = (_patch, _live) => {
	$for_content_holes(_patch, _live);
	if ("Ab" in _patch) $for_update(_live, [_patch["Ab"], "M"]);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("Ac" in _patch) _update_for(_patch["Ac"], _live["Ac"], $for_content__update);
	if ("Dd" in _patch) _update_if(_patch, _live, "Dd", "Ad", [$if_content__update]);
};
const _merge = _resume("a5", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
