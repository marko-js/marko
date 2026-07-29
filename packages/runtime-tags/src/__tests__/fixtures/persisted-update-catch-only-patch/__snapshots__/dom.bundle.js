// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=feed> </p>";
const $template = "<button class=count>clicked <!></button><section><!></section>";
const $walks = " Db%lD%l";
_enable_catch();
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a1": [$await_content__template, $await_content__walks],
	"a6": [$await_content__template, $await_content__walks],
	"a4": [$try_content__template, $try_content__walks],
	"a3": [$try_content__template, $try_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a7");
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a1");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Ac" in $patch) _update_branch($patch, $live, "c", $try_content__update, "a4");
};
_construct("a0", $construct);
_update_content("a1", $await_content_holes);
const $noop_update = () => {};
_update_content("a2", $noop_update);
_update_content("a4", $try_content__update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a2", "<p class=failed>failed: <!></p>", "Db%", 0, $catch_content__$params);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
