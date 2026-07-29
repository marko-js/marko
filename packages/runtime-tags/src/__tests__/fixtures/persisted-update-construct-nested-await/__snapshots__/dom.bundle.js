// template.marko.persisted.mjs
const $Reports_content__walks = "b%c", $Reports_content__template = "<!><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l%c", $await_content__template = "<p class=summary> </p><!><!>", $try_content2__walks = "b%c", $try_content2__template = "<!><!><!>", $await_content2__walks = "D l", $await_content2__template = "<p class=detail> </p>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $count = _var_resume("a18", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a5": [$await_content2__template, $await_content2__walks],
	"a15": [$await_content2__template, $await_content2__walks],
	"a8": [$try_content2__template, $try_content2__walks],
	"a7": [$try_content2__template, $try_content2__walks],
	"a9": [$await_content__template, $await_content__walks],
	"a16": [$await_content__template, $await_content__walks],
	"a12": [$try_content__template, $try_content__walks],
	"a11": [$try_content__template, $try_content__walks],
	"a17": [$Reports_content__template, $Reports_content__walks],
	"a13": [$Reports_content__template, $Reports_content__walks],
	"a3": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a18");
const $try_content2__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content2_holes, "a5");
};
const $await_content__update = ($patch, $live) => {
	$await_content_holes($patch, $live);
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content2__update, "a8", "a6");
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a9");
};
const $Reports_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a12", "a10");
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
_construct("a3", $construct);
_update_content("a5", $await_content2_holes);
const $noop_update = () => {};
_update_content("a6", $noop_update);
_update_content("a8", $try_content2__update);
_update_content("a9", $await_content__update);
_update_content("a10", $noop_update);
_update_content("a12", $try_content__update);
_update_content("a13", $Reports_content__update);
_update_content("a4", $noop_update);
const $merge = _resume("a3", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content2 = _content_resume("a6", "<p class=sub>detail…</p>");
const $placeholder_content = _content_resume("a10", "<p class=loading>summary…</p>");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a14", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
