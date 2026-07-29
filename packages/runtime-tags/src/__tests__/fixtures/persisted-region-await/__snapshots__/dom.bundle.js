// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = " b", $await_content__template = "<div class=reviews></div>";
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a3": [$await_content__template, $await_content__walks],
	"a8": [$await_content__template, $await_content__walks],
	"a6": [$try_content__template, $try_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a9");
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a3");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Ac" in $patch) _update_branch($patch, $live, "c", $try_content__update, "a6", "a4");
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a10", $noop_update);
_update_content("a3", $await_content__update);
_update_content("a4", $noop_update);
_update_content("a6", $try_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "loading…");
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
