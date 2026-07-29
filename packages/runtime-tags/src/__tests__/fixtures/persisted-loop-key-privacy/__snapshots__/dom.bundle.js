// template.marko.persisted.mjs
const $for_content__walks = "E l D m", $for_content__template = "<li class=user><span class=name> </span><button class=toggle> </button></li>", $for_content2__walks = "D b D m", $for_content2__template = "<li class=tag> <button class=star> </button></li>";
const $template = "<button class=count>clicked <!></button><ul class=users></ul><ul class=tags></ul>";
const $walks = " Db%l b b";
const $for_content2__starred = _var_resume("a8", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f ? "★" : "☆")));
const $for_content2__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content2__starred($scope, !$scope.f);
}));
const $for_content__open = _var_resume("a9", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g ? "less" : "more")));
const $for_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content__open($scope, !$scope.g);
}));
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
_static_shells({
	"a4": [$for_content2__template, $for_content2__walks],
	"a6": [$for_content2__template, $for_content2__walks],
	"a2": [$for_content__template, $for_content__walks],
	"a7": [$for_content__template, $for_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $starred_seed = _update_signal("a8");
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c"))
});
const $open_seed = _update_signal("a9");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c"))
});
const $count_seed = _update_signal("a10");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a2");
const $for_update2 = _update_for_keyed(3, ($p2, $l2) => $for_content2__update($p2, $l2), "a4");
const $for_content2__construct = ($scope) => {
	_construct_effect($scope, $for_content2__setup__script);
};
const $for_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $starred_seed, $patch["f"]);
	$for_content2_holes($patch, $live);
};
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	$for_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
	if ("Ad" in $patch) $for_update2($live, [$patch["Ad"], "M"]);
};
_construct("a4", $for_content2__construct);
_construct("a2", $for_content__construct);
_construct("a0", $construct);
_update_content("a4", $for_content2__update);
_update_content("a2", $for_content__update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content2__starred = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.c, $scope.f ? "★" : "☆"));
const $for_content2__setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$for_content2__starred($scope, !$scope.f);
}));
const $for_content__open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g ? "less" : "more"));
const $for_content__setup__script = _script_update("a1", ($scope) => _on($scope.b, "click", function() {
	$for_content__open($scope, !$scope.g);
}));
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
