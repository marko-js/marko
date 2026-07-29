// template.marko.persisted.mjs
const $for_content2__walks = "D b Db%m", $for_content2__template = "<li class=item> <button class=tap>tap <!></button></li>";
const $template = "<button class=count>clicked <!></button><ul class=alerts></ul><ul class=items></ul>";
const $walks = " Db%l b b";
const $for_content2__n = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $for_content2__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content2__n($scope, $scope.g + 1);
}));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
_static_shells({
	"a3": [$for_content2__template, $for_content2__walks],
	"a5": [$for_content2__template, $for_content2__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $n_seed = _update_signal("a6");
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a7");
const $for_update = _update_for_keyed(3, ($p, $l) => $for_content2__update($p, $l), "a3");
const $for_content2__construct = ($scope) => {
	_text($scope.c, $scope.g);
	_construct_effect($scope, $for_content2__setup__script);
};
const $for_content2__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $n_seed, $patch["g"]);
	$for_content2_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
	if ("Ad" in $patch) $for_update($live, [$patch["Ad"], "M"]);
};
_construct("a3", $for_content2__construct);
_construct("a0", $construct);
_update_content("a3", $for_content2__update);
const $noop_update = () => {};
_update_content("a8", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content2__n = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $for_content2__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$for_content2__n($scope, $scope.g + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.i + 1);
}));
