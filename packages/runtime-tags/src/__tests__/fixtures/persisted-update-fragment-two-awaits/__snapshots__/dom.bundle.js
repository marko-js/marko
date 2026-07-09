// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a7", "<p class=loading>loading…</p>", "b");
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", _update_scope);
	if ("Ab" in patch) _update_branch(patch, live, "b", _update_scope);
};
const $Reports_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac", 0);
};
_update_content("a5", $Reports_content__update);
var template_marko_update_default = _resume("a8", $update);
