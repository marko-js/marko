// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=eta> </p>";
const $template = "<button class=count>clicked <!></button><input class=sku><select class=ship><option value=ground>ground</option><option value=air>air</option><option value=sea>sea</option></select><!><!>";
const $walks = " Db%l b b%c";
_enable_catch();
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
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
const $count_seed = _update_signal("a8");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Nvalue:c": /*@__PURE__*/ _update_controllable("c", _update_input_value),
	"Nvalue:d": /*@__PURE__*/ _update_controllable("d", _update_select_value)
});
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.l);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("l" in $patch) _update_seed($live, $count_seed, $patch["l"]);
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("k" in $patch) $live["k"] = $patch["k"];
	$_holes($patch, $live);
	if ("Ae" in $patch) _update_branch($patch, $live, "e", $try_content__update, "a5", "a3");
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
const $placeholder_content = _content_resume("a3", "loading…");
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
