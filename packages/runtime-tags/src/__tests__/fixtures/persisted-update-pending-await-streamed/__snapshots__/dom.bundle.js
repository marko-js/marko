// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p> </p>";
const $template = "<button class=clicks>clicked <!></button><section><!></section>";
const $walks = " Db%lD%l";
_enable_catch();
const $clicks = _var_resume("a8", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
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
const $clicks_seed = _update_signal("a8");
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.h);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $clicks_seed, $patch["h"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("g" in $patch) $live["g"] = $patch["g"];
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
const $placeholder_content = _content_resume("a3", "loading…");
const $clicks = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.h + 1);
}));
