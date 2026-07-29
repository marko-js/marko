// template.marko.persisted.mjs
const $Ratings_content__walks = "b%c", $Ratings_content__template = "<!><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = " b", $await_content__template = "<div class=ratings></div>";
const $template = "<button class=clicks>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $clicks = _var_resume("a13", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.d + 1);
}));
_static_shells({
	"a5": [$await_content__template, $await_content__walks],
	"a11": [$await_content__template, $await_content__walks],
	"a8": [$try_content__template, $try_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a12": [$Ratings_content__template, $Ratings_content__walks],
	"a9": [$Ratings_content__template, $Ratings_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $clicks_seed = _update_signal("a13");
const $await_content__update = ($patch, $live) => {
	if ("c" in $patch) $live["c"] = $patch["c"];
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a5");
};
const $Ratings_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a8", "a6");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $clicks_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a14", $noop_update);
_update_content("a5", $await_content__update);
_update_content("a6", $noop_update);
_update_content("a8", $try_content__update);
_update_content("a9", $Ratings_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a6", "loading ratings…");
const $clicks = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.d + 1);
}));
