// template.marko.persisted.mjs
const $for_content__walks = "E l%l", $for_content__template = "<section><h3> </h3><!></section>", $for_content2__walks = " D%c%l", $for_content2__template = "<button><!>:<!></button>";
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $for_content2__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope._._, $scope._._.c + 1);
}));
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.a, $scope.c)));
_static_shells({
	"a2": [$for_content2__template, $for_content2__walks],
	"a4": [$for_content2__template, $for_content2__walks],
	"a3": [$for_content__template, $for_content__walks],
	"a5": [$for_content__template, $for_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(1, ($p, $l) => $for_content2__update($p, $l), "a2");
const $count_seed = _update_signal("a6");
const $for_update2 = _update_for_keyed(1, ($p2, $l2) => $for_content__update($p2, $l2), "a3");
const $for_content2__construct = ($scope) => {
	_text($scope.b, $scope._.e);
	_construct_effect($scope, $for_content2__setup__script);
};
const $for_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$for_content2_holes($patch, $live);
};
const $for_content__construct = ($scope) => {
	_text($scope.a, $scope.e);
};
const $for_content__update = ($patch, $live) => {
	if ("e" in $patch) $live["e"] = $patch["e"];
	$for_content_holes($patch, $live);
	if ("Ab" in $patch) $for_update($live, [$patch["Ab"], "M"]);
};
const $construct = ($scope) => {
	_text($scope.a, $scope.c);
};
const $update2 = ($patch, $live) => {
	if ("c" in $patch) _update_seed($live, $count_seed, $patch["c"]);
	if ("Ab" in $patch) $for_update2($live, [$patch["Ab"], "M"]);
};
_construct("a2", $for_content2__construct);
_construct("a3", $for_content__construct);
_construct("a0", $construct);
_update_content("a2", $for_content2__update);
_update_content("a3", $for_content__update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content2__setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._._, $scope._._.c + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.a, $scope.c));
