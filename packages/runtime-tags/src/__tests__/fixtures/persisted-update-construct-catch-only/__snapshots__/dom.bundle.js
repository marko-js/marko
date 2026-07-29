// template.marko.persisted.mjs
const $Reports_content__walks = "b%c", $Reports_content__template = "<!><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $try_content2__walks = "b%c", $try_content2__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=report> </p>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $count = _var_resume("a15", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a4": [$await_content__template, $await_content__walks],
	"a13": [$await_content__template, $await_content__walks],
	"a7": [$try_content2__template, $try_content2__walks],
	"a6": [$try_content2__template, $try_content2__walks],
	"a10": [$try_content__template, $try_content__walks],
	"a9": [$try_content__template, $try_content__walks],
	"a14": [$Reports_content__template, $Reports_content__walks],
	"a11": [$Reports_content__template, $Reports_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a15");
const $try_content2__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a4");
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content2__update, "a7", "a5");
};
const $Reports_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a10");
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
_update_content("a4", $await_content_holes);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a7", $try_content2__update);
_update_content("a8", $noop_update);
_update_content("a10", $try_content__update);
_update_content("a11", $Reports_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "<p class=loading>loading…</p>");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a8", "<p class=failed>failed: <!></p>", "Db%", 0, $catch_content__$params);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a12", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
