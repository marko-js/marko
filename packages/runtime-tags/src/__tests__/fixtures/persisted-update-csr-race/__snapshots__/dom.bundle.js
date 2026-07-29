// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "Db%c%l", $await_content__template = "<p>clicked <!> times -- <!></p>";
const $template = "<h1> </h1><button>clicked <!></button><section><!></section>";
const $walks = "D l Db%lD%l";
_enable_catch();
const $await_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a2");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
_static_shells({
	"a3": [$await_content__template, $await_content__walks],
	"a8": [$await_content__template, $await_content__walks],
	"a6": [$try_content__template, $try_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $count_seed = _update_signal("a9");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content__construct = ($scope) => {
	_text($scope.a, $scope._._.i);
	_construct_closure($scope, $scope._._, $await_content__count);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a3");
};
const $construct = ($scope) => {
	_text($scope.c, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	$_holes($patch, $live);
	if ("Ad" in $patch) _update_branch($patch, $live, "d", $try_content__update, "a6", "a4");
};
_construct("a3", $await_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a3", $await_content_holes);
_update_content("a6", $try_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "loading…");
const $await_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a2");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script_update("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
