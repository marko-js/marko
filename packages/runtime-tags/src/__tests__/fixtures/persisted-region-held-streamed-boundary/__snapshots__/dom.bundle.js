// template.marko.persisted.mjs
const $Item_content__walks = "D l%c", $Item_content__template = "<h2 class=title> </h2><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "Db%l b", $await_content__template = "<p class=updated>updated <!></p><div class=reviews></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $count = _var_resume("a13", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a5": [$await_content__template, $await_content__walks],
	"a11": [$await_content__template, $await_content__walks],
	"a8": [$try_content__template, $try_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a12": [$Item_content__template, $Item_content__walks],
	"a9": [$Item_content__template, $Item_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $Item_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a13");
const $await_content__update = ($patch, $live) => {
	$await_content_holes($patch, $live);
	if ("Db" in $patch) _update_region("b")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a5");
};
const $Item_content__update = ($patch, $live) => {
	$Item_content_holes($patch, $live);
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a8", "a6");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a14", $noop_update);
_update_content("a5", $await_content__update);
_update_content("a6", $noop_update);
_update_content("a8", $try_content__update);
_update_content("a9", $Item_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a6", "loading…");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
