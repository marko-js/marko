// template.marko
const $inputtag_content__title = /*@__PURE__*/ _closure_get(2, ($scope) => {
	if (!updating) _text($scope.a, $scope._.b);
});
const $inputtag_content__setup = ($scope) => {
	if (!updating) $inputtag_content__title($scope);
};
const $inputtag_content = _content_resume("a6", " ", " b", $inputtag_content__setup);
const $count = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.b, $scope.j));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.j + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.b, $scope.j)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.j + 1);
}));
const $inputtag_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a9");
const $elseif_content__update = (_patch, _live) => {
	if ("b" in _patch) _live["b"] = _patch["b"];
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("j" in _patch) _update_seed(_live, $count_seed, _patch["j"]);
	if ("h" in _patch) _live["h"] = _patch["h"];
	if ("i" in _patch) _live["i"] = _patch["i"];
	if ("Dc" in _patch) _update_if(_patch, _live, "Dc", "Ac", [
		$if_content_holes,
		$elseif_content__update,
		0
	]);
};
_update_content("a6", $inputtag_content_holes);
_update_content("a2", $Panel_content_holes);
const _merge = _resume("a7", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
