// template.marko.persisted.mjs
const $else_content__walks = "b%bD%l", $else_content__template = "<!><!><section><!></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "Db%l", $await_content__template = "<p>extras for <!></p>", $if_content2__walks = "b", $if_content2__template = "<p>gone</p>";
const $template = "<h1> </h1><button>clicked <!></button><!><!>";
const $walks = "D l Db%l%c";
_enable_catch();
const $await_content__input_title = /*@__PURE__*/ _closure_get(10, ($scope) => {
	if (!updating) _text($scope.a, $scope._._._.g);
}, ($scope) => $scope._._._, "a5");
const $count = _var_resume("a17", /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.j + 1);
}));
_static_shells({
	"a11": [$if_content2__template, $if_content2__walks],
	"a14": [$if_content2__template, $if_content2__walks],
	"a6": [$await_content__template, $await_content__walks],
	"a15": [$await_content__template, $await_content__walks],
	"a9": [$try_content__template, $try_content__walks],
	"a8": [$try_content__template, $try_content__walks],
	"a10": [$else_content__template, $else_content__walks],
	"a16": [$else_content__template, $else_content__walks],
	"a3": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a17");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content__construct = ($scope) => {
	_text($scope.a, $scope._._._.g);
	_construct_closure($scope, $scope._._._, $await_content__input_title);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a6");
};
const $else_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a9", "a7");
};
const $construct = ($scope) => {
	_text($scope.a, $scope.g);
	_text($scope.c, $scope.j);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $count_seed, $patch["j"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	$_holes($patch, $live);
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [0, $else_content__update], ["a11", "a10"]);
};
_construct("a6", $await_content__construct);
_construct("a3", $construct);
const $noop_update = () => {};
_update_content("a7", $noop_update);
_update_content("a11", $noop_update);
_update_content("a6", $await_content_holes);
_update_content("a9", $try_content__update);
_update_content("a18", $noop_update);
_update_content("a19", $noop_update);
_update_content("a10", $else_content__update);
const $merge = _resume("a3", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a7", "loading extras…");
const $count = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script_update("a13", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.j + 1);
}));
