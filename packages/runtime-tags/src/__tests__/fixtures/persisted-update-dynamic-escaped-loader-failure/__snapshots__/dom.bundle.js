// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));

// tags/board.marko.persisted.mjs
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2$1 = (_patch, _live) => {
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	$_holes(_patch, _live);
	if ("Db" in _patch || "Ab" in _patch) _update_dynamic(_patch, _live, "Db", "Ab");
};
const _merge$1 = _resume("b1", $update2$1);
_update_content("b", _merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $count_seed = _update_signal("a2");
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_loader("c", () => import("./roster.marko.persisted.mjs"));
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/roster.marko.persisted.mjs
const $template = "<ul class=crew></ul>";
const $walks = " b";
const $setup = () => {};
const $for = 0;
const $input_crew = ($scope, input_crew) => {
	if (!updating) $for($scope, [input_crew, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_crew($scope, input.crew);
var roster_marko_persisted_default = /*@__PURE__*/ _template("c", $template, " b", $setup, $input);
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l));
const $update2 = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const _merge = _resume("c2", $update2);
_update_content("c", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
