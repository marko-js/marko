// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a1", "<p class=loading>loading…</p>", "b");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a4", "<p class=failed>failed: <!></p>", "Db%l", 0, $catch_content__$params);
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a9");
const $try_content2__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", _update_scope);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $try_content2__update);
};
const $Reports_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac", 0);
};
_update_content("a4", _update_scope);
_update_content("a6", $Reports_content__update);
var template_marko_update_default = _resume("a10", $update);
