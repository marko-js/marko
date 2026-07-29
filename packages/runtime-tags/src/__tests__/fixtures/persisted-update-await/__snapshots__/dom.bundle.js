// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = " b", $await_content__template = "<ul></ul>", $await_content2__walks = "D l", $await_content2__template = "<em> </em>";
const $template = "<h1> </h1><button>clicked <!></button><section><!></section><footer><!></footer>";
const $walks = "D l Db%lD%lD%l";
_enable_catch();
const $count = _var_resume("a11", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
_static_shells({
	"a7": [$await_content2__template, $await_content2__walks],
	"a9": [$await_content2__template, $await_content2__walks],
	"a3": [$await_content__template, $await_content__walks],
	"a10": [$await_content__template, $await_content__walks],
	"a6": [$try_content__template, $try_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a11");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a3");
};
const $construct = ($scope) => {
	_text($scope.c, $scope.k);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $count_seed, $patch["k"]);
	$_holes($patch, $live);
	if ("Ad" in $patch) _update_branch($patch, $live, "d", $try_content__update, "a6", "a4");
	if ("Ae" in $patch) _update_branch($patch, $live, "e", $await_content2_holes, "a7");
};
_construct("a1", $construct);
_update_content("a7", $await_content2_holes);
const $noop_update = () => {};
_update_content("a12", $noop_update);
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
const $placeholder_content = _content_resume("a4", "loading related…");
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a8", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
