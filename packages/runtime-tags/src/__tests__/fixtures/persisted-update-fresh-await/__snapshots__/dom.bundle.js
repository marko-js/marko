// template.marko.persisted.mjs
const $if_content__walks = "Db%l%c", $if_content__template = "<h2>Product <!></h2><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $else_content__walks = "b", $else_content__template = "<p>pick a product</p>", $await_content__walks = " b", $await_content__template = "<ul></ul>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $count = _var_resume("a15", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a4": [$await_content__template, $await_content__walks],
	"a12": [$await_content__template, $await_content__walks],
	"a8": [$else_content__template, $else_content__walks],
	"a13": [$else_content__template, $else_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a6": [$try_content__template, $try_content__walks],
	"a9": [$if_content__template, $if_content__walks],
	"a14": [$if_content__template, $if_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a15");
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a4");
};
const $if_content__construct = ($scope) => {
	_text($scope.a, $scope._.f);
};
const $if_content__update = ($patch, $live) => {
	$if_content_holes($patch, $live);
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a7", "a5");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update, 0], ["a9", "a8"]);
};
_construct("a9", $if_content__construct);
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a16", $noop_update);
_update_content("a4", $await_content__update);
_update_content("a5", $noop_update);
_update_content("a8", $noop_update);
_update_content("a7", $try_content__update);
_update_content("a9", $if_content__update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "loading reviews…");
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a11", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
