// template.marko.persisted.mjs
const $for_content__walks = "D Db%lD m", $for_content__template = "<li class=row><button class=pick>+<!></button><span class=text> </span></li>";
const $template = "<ul class=rows></ul>";
const $walks = " b";
const $for_content__picks = _var_resume("a4", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $for_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$for_content__picks($scope, $scope.g + 1);
}));
_static_shells({
	"a2": [$for_content__template, $for_content__walks],
	"a3": [$for_content__template, $for_content__walks],
	"a0": [$template, " b"],
	"a": [$template, " b"]
});
const $picks_seed = _update_signal("a4");
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content__update($p, $l), "a2");
const $for_content__construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $picks_seed, $patch["g"]);
	$for_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
_construct("a2", $for_content__construct);
_update_content("a2", $for_content__update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content__picks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $for_content__setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$for_content__picks($scope, $scope.g + 1);
}));
