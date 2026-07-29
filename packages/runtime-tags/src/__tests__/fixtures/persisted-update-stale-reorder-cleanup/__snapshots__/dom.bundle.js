// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<b> </b>";
const $template = "<h1> </h1><main><!></main>";
const $walks = " D lD%l";
_enable_catch();
const $n = _var_resume("a8", /*@__PURE__*/ _let_persisted(8));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.i + 1);
}));
_static_shells({
	"a2": [$await_content__template, $await_content__walks],
	"a7": [$await_content__template, $await_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a4": [$try_content__template, $try_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $n_seed = _update_signal("a8");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $n_seed, $patch["i"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("h" in $patch) $live["h"] = $patch["h"];
	$_holes($patch, $live);
	if ("Ac" in $patch) _update_branch($patch, $live, "c", $try_content__update, "a5", "a3");
};
_construct("a1", $construct);
_update_content("a2", $await_content_holes);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a5", $try_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "fetching…");
const $n = /*@__PURE__*/ _let_persisted(8);
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.i + 1);
}));
