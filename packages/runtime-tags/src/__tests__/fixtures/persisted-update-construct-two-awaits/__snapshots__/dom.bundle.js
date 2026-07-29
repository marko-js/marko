// template.marko.persisted.mjs
const $Reports_content__walks = "b%c", $Reports_content__template = "<!><!><!>", $try_content__walks = "b%b%c", $try_content__template = "<!><!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=report> </p>", $await_content2__walks = "D l", $await_content2__template = "<p class=summary> </p>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $count = _var_resume("a14", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a5": [$await_content2__template, $await_content2__walks],
	"a11": [$await_content2__template, $await_content2__walks],
	"a4": [$await_content__template, $await_content__walks],
	"a12": [$await_content__template, $await_content__walks],
	"a8": [$try_content__template, $try_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a13": [$Reports_content__template, $Reports_content__walks],
	"a9": [$Reports_content__template, $Reports_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a14");
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a4");
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $await_content2_holes, "a5");
};
const $Reports_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a8", "a6");
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
_update_content("a5", $await_content2_holes);
_update_content("a4", $await_content_holes);
const $noop_update = () => {};
_update_content("a6", $noop_update);
_update_content("a8", $try_content__update);
_update_content("a9", $Reports_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a6", "<p class=loading>loading…</p>");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
