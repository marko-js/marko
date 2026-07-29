// template.marko.persisted.mjs
const $for_content__walks = "D b Db%m", $for_content__template = "<li class=item> <button class=tap>tap <!></button></li>";
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
const $for_content__n = _var_resume("a5", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $for_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content__n($scope, $scope.g + 1);
}));
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a2": [$for_content__template, $for_content__walks],
	"a4": [$for_content__template, $for_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $n_seed = _update_signal("a5");
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a6");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a2");
const $for_content__construct = ($scope) => {
	_text($scope.c, $scope.g);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $n_seed, $patch["g"]);
	$for_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
_construct("a2", $for_content__construct);
_construct("a0", $construct);
_update_content("a2", $for_content__update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content__n = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $for_content__setup__script = _script_update("a1", ($scope) => _on($scope.b, "click", function() {
	$for_content__n($scope, $scope.g + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
