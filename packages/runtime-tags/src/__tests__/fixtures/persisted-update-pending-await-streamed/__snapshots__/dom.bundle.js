// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a0", "loading…", "b");
const $clicks = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
enableBranches();

// template.marko.update.mjs
const $clicks_seed = _update_signal("a4");
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", _update_scope);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("h" in patch) _update_seed(live, $clicks_seed, patch["h"]);
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("Ac" in patch) _update_branch(patch, live, "c", $try_content__update);
};
var template_marko_update_default = _resume("a5", $update);
