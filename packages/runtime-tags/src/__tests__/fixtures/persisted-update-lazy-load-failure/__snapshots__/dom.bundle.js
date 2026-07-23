// template.marko.persisted.mjs
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $Detail_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
_load_ready("_b", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:gadget.marko.setup.mjs")));
const $count_seed = _update_signal("a6");
const $Detail_content__update = ($patch, $live) => {
	$Detail_content_holes($patch, $live);
	if ("c" in $patch) _update_load($patch["c"], $live["c"], "b0", $live, 1, "b");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a1", $construct);
_update_content("a3", $Detail_content__update);
const $noop_update = () => {};
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// chunk-guard.js
const assertChunkLoadable = () => {
	if (typeof window !== "undefined" && window.__MARKO_LAZY_CHUNK_GONE__) throw new Error("lazy chunk unavailable");
};

// tags/gadget.marko.persisted.mjs
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
const $taps = _var_resume("b2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$taps($scope, $scope.g + 1);
}));
function $setup($scope) {
	$taps($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var gadget_marko_persisted_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
const $taps_seed = _update_signal("b2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $construct = ($scope) => {
	_text($scope.c, $scope.g);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $taps_seed, $patch["g"]);
	$_holes($patch, $live);
};
_construct("b0", $construct);
const $merge = _resume("b0", $update2);
_update_content("b", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/gadget.marko
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
assertChunkLoadable();
const $taps = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script_update("b1", ($scope) => _on($scope.b, "click", function() {
	$taps($scope, $scope.g + 1);
}));
function $setup($scope) {
	$taps($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var gadget_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/v:gadget.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
