// template.marko
_enable_catch();
const $await_content__data = ($scope, data) => _text($scope.a, data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("a9", "<p class=loading>loading…</p>", "b");
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=report> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getReport($scope.$.topic));
};
const $PanelAsync_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%c", $try_content__setup);
const $PanelAsync_content__setup = ($scope) => $PanelAsync_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $PanelAsync_content = _content_resume("a7", "<!><!><!>", "b%c", $PanelAsync_content__setup);
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
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", _update_scope);
};
const $PanelAsync_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $try_content__update);
};
const $for_content__update = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
_update_content("a7", $PanelAsync_content__update);
_update_content("a5", _update_scope);
_update_content("a3", _update_scope);
const _merge = _resume("a10", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : void 0;
function getReport(topic) {
	if (typeof window !== "undefined") throw new Error("getReport is server-only");
	return resolveAfter(`report for ${topic}`, 1);
}
