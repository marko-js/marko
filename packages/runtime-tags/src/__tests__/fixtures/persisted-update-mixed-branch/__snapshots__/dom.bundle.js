// template.marko.persisted.mjs
const $else_content__walks = "D l D l", $else_content__template = "<h1> </h1><button> </button>", $if_content__walks = "b", $if_content__template = "<h2>Something went wrong</h2>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $else_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(5, $else_content__count));
_static_shells({
	"a4": [$if_content__template, $if_content__walks],
	"a6": [$if_content__template, $if_content__walks],
	"a3": [$else_content__template, $else_content__walks],
	"a7": [$else_content__template, $else_content__walks],
	"a1": [$template, "b%c"],
	"a": [$template, "b%c"]
});
const $else_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a8");
const $else_content__construct = ($scope) => {
	_text($scope.a, $scope._.e);
	_text($scope.c, $scope._.f);
	_construct_effect($scope, $else_content__setup__script);
};
const $else_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$else_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [0, $else_content__update], ["a4", "a3"]);
};
_construct("a3", $else_content__construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a3", $else_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $else_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = /*@__PURE__*/ _let_persisted(5, $else_content__count);
