// template.marko
const $inputtag_content__title = /*@__PURE__*/ _closure_get(2, ($scope) => {
	if (!updating) _text($scope.a, $scope._.b);
});
const $inputtag_content__setup = ($scope) => {
	if (!updating) $inputtag_content__title($scope);
};
const $inputtag_content = _content_resume("a5", " ", " b", $inputtag_content__setup);
const $count = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.b, $scope.j));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.j + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $elseif_content__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("Da" in patch || "Aa" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("j" in patch) _update_seed(live, $count_seed, patch["j"]);
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("Dc" in patch) _update_if(patch, live, "Dc", "Ac", [
		_update_scope,
		$elseif_content__update,
		0
	]);
};
_update_content("a5", _update_scope);
_update_content("a3", _update_scope);
const _merge = _resume("a6", $update);
function createPatch() {
	return createPatch$1(_merge);
}
