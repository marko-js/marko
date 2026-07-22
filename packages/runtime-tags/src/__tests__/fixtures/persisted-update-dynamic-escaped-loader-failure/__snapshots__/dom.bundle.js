// tags/board.marko.persisted.mjs
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2$1 = ($patch, $live) => {
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("g" in $patch) $live["g"] = $patch["g"];
	$_holes($patch, $live);
	if ("Db" in $patch || "Ab" in $patch) _update_dynamic($patch, $live, "Db", "Ab");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count_seed = _update_signal("a2");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_update_loader("c", () => import("./roster.marko.persisted.mjs"));
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));

// tags/roster.marko.persisted.mjs
const $template = "<button class=pin>pin <!></button><ul class=crew></ul>";
const $walks = " Db%l b";
const $pinned = _var_resume("c2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$pinned($scope, $scope.g + 1);
}));
function $setup($scope) {
	$pinned($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_crew = ($scope, input_crew) => {
	if (!updating) $for($scope, [input_crew, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_crew($scope, input.crew);
var roster_marko_persisted_default = /*@__PURE__*/ _template("c", $template, $walks, $setup, $input);
const $pinned_seed = _update_signal("c2");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $pinned_seed, $patch["g"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
const $merge = _resume("c0", $update2);
_update_content("c", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/roster.marko
const $pinned = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("c1", ($scope) => _on($scope.a, "click", function() {
	$pinned($scope, $scope.g + 1);
}));
