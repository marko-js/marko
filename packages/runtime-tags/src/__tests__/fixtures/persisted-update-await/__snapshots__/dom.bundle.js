// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "loading related…", "b");
const $count = /* @__PURE__ */ _let(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
enableBranches();

// template.marko.update.mjs
const $for_update = _update_for(0, "a0", (branch, args) => $for_content__update(args[0], branch));
const $count_seed = _update_signal("a1");
const $await_content2__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $await_content__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("k" in patch) _update_seed(live, $count_seed, patch["k"]);
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("Ad" in patch) _update_branch(patch, live, "d", $try_content__update);
	if ("Ae" in patch) _update_branch(patch, live, "e", $await_content2__update);
};
var template_marko_update_default = _resume("a2", $update);
