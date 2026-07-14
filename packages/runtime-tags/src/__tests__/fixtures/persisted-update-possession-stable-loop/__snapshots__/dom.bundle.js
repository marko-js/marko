// template.marko
const $PanelB_content = _content_resume("a5", "<strong>B</strong>", "b");
const $PanelA_content = _content_resume("a3", "<strong>A</strong>", "b");
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $for_update = _update_for_keyed(2, (p, l) => $for_content__update(p, l));
const $for_content2__update = (patch, live) => {
	_update_scope(patch, live);
	if ("Db" in patch || "Ab" in patch) _update_dynamic(patch, live, "Db", "Ab");
};
const $for_content__update = (patch, live) => {
	if ("Aa" in patch) _update_for(patch["Aa"], live["Aa"], $for_content2__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) _update_seed(live, $count_seed, patch["f"]);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
const _merge = _resume("a6", $update);
function createPatch() {
	return createPatch$1(_merge);
}
