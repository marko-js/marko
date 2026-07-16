// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));

// tags/stage.marko.persisted.mjs
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2$1 = (_patch, _live) => {
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	$_holes(_patch, _live);
	if ("Db" in _patch || "Ab" in _patch) _update_dynamic(_patch, _live, "Db", "Ab");
};
const _merge$1 = _resume("c1", $update2$1);
_update_content("c", _merge$1);

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
_update_loader("b", () => import("./lineup.marko.persisted.mjs"));
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/lineup.marko.persisted.mjs
const $template = "<ol class=lineup></ol>";
const $walks = " b";
const $setup = () => {};
const $for = 0;
const $input_performers = ($scope, input_performers) => {
	if (!updating) $for($scope, [input_performers, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_performers($scope, input.performers);
var lineup_marko_persisted_default = /*@__PURE__*/ _template("b", $template, " b", $setup, $input);
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l));
const $update2 = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const _merge = _resume("b2", $update2);
_update_content("b", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
