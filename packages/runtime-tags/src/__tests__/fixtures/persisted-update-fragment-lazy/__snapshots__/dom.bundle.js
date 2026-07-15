// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("c0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("c2");
const $update$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $open_seed, _patch["g"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
const _merge$1 = _resume("c3", $update$1);
_update_content("c", _merge$1);

// template.marko.update.mjs
_load_ready("_b", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:gadget.marko.setup.mjs")));
const $count_seed = _update_signal("a1");
const $Detail_content__update = (_patch, _live) => {
	_update_scope(_patch, _live);
	if ("c" in _patch) _update_load(_patch["c"], _live["c"], "b2");
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a3", $Detail_content__update);
const _merge = _resume("a4", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// tags/gadget.marko.update.mjs
const $taps_seed = _update_signal("b1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $taps_seed, _patch["g"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("b2", $update);
_update_content("b", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// tags/gadget.marko
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
const $taps = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script_update("b0", ($scope) => _on($scope.b, "click", function() {
	$taps($scope, $scope.g + 1);
}));
function $setup($scope) {
	$taps($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
enableBranchesPersisted();
var gadget_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/v:gadget.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
