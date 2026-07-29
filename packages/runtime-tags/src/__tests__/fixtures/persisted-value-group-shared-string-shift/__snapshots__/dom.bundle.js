// template.marko.persisted.mjs
const $for_content__walks = "E l%bD l D m", $for_content__template = "<li class=post><span class=tag> </span><!><span class=body> </span><button class=fave> </button></li>";
const $template = "<ul class=posts></ul>";
const $walks = " b";
const $for_content__faved = _var_resume("a6", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.e, $scope.k ? "faved" : "fave")));
const $for_content__setup__script = _script_shared(($scope) => _on($scope.d, "click", function() {
	$for_content__faved($scope, !$scope.k);
}));
_static_shells({
	"a4": [$for_content__template, $for_content__walks],
	"a5": [$for_content__template, $for_content__walks],
	"a1": [$template, " b"],
	"a": [$template, " b"]
});
const $faved_seed = _update_signal("a6");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_text("c"),
	"Qe": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("e"))
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content__update($p, $l), "a4");
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $faved_seed, $patch["k"]);
	if ("i" in $patch) $live["i"] = $patch["i"];
	$for_content_holes($patch, $live);
	if ("Db" in $patch) _update_region("b")($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
_construct("a4", $for_content__construct);
const $noop_update = () => {};
_update_content("a7", $noop_update);
_update_content("a4", $for_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content__faved = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.e, $scope.k ? "faved" : "fave"));
const $for_content__setup__script = _script_update("a3", ($scope) => _on($scope.d, "click", function() {
	$for_content__faved($scope, !$scope.k);
}));
