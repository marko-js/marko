// template.marko
const $PanelB_content__setup = ($scope) => _text($scope.a, getLabel?.($scope.$.topic));
const $PanelB_content = _content_resume("a5", "<section class=b>B: <!></section>", "Db%l", $PanelB_content__setup);
const $PanelA_content__setup = ($scope) => _text($scope.a, getLabel?.($scope.$.topic));
const $PanelA_content = _content_resume("a3", "<span class=a>A: <!></span>", "Db%l", $PanelA_content__setup);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $for_update = _update_for_keyed(2, (p, l) => $for_content__update(p, l));
const $for_content__update = (patch, live) => {
	if ("Db" in patch || "Ab" in patch) _update_dynamic(patch, live, "Db", "Ab");
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
_update_content("a5", _update_scope);
_update_content("a3", _update_scope);
const _merge = _resume("a6", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : void 0;
