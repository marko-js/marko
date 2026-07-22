// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a8");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Nvalue:c": /*@__PURE__*/ _update_controllable("c", _update_input_value),
	"Nvalue:d": /*@__PURE__*/ _update_controllable("d", _update_select_value)
});
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("l" in $patch) _update_seed($live, $count_seed, $patch["l"]);
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("k" in $patch) $live["k"] = $patch["k"];
	$_holes($patch, $live);
	if ("Ae" in $patch) _update_branch($patch, $live, "e", $try_content__update, "a5", "a3");
};
const $noop_update = () => {};
_update_content("a3", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "loading…", "b");
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
