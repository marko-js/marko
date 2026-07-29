// tags/badge.marko.persisted.mjs
const $template$3 = "<span> </span>";
const $walks$3 = " D l";
_static_shells({ "b0": [$template$3, $walks$3] });
const $update2$2 = () => {};
const $merge$3 = _resume("b0", $update2$2);
_update_content("b", $merge$3);

// tags/panel.marko.persisted.mjs
const $template$2 = "<details><summary> </summary><p> </p></details>";
const $walks$2 = " E lD m";
_static_shells({
	"c0": [$template$2, $walks$2],
	"c": [$template$2, $walks$2]
});
const $merge$2 = _resume("c0", /* @__PURE__ */ _update_scopes({
	"Nopen:a": /*@__PURE__*/ _update_controllable("a", _update_details_or_dialog_open),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
}));
_update_content("c", $merge$2);

// tags/toggle.marko.persisted.mjs
const $template$1 = "<button class=toggle> </button><em> </em>";
const $walks$1 = " D lD l";
const $on = _var_resume("d2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "on" : "off")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
_static_shells({
	"d0": [$template$1, $walks$1],
	"d": [$template$1, $walks$1]
});
const $on_seed = _update_signal("d2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $construct$1 = ($scope) => {
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $on_seed, $patch["g"]);
	$_holes($patch, $live);
};
_construct("d0", $construct$1);
const $merge$1 = _resume("d0", $update2$1);
_update_content("d", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<button>clicked <!></button>${_w0}<!>${_w1}<!>${_w2}<!>`)($template$3, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => ` Db%l/${_w0}&%b/${_w1}&%b/${_w2}&%b`)($walks$3, $walks$2, $walks$1);
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(17, ($scope) => _text($scope.b, $scope.r)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.r + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a3");
const $construct = ($scope) => {
	_text($scope.b, $scope.r);
	_construct_child($scope, "e", "c0");
	_construct_child($scope, "g", "d0");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("r" in $patch) _update_seed($live, $count_seed, $patch["r"]);
	if ("Dd" in $patch) _update_region("d")($patch, $live);
	if ("e" in $patch) $merge$2($patch["e"], $live["e"]);
	if ("g" in $patch) $merge$1($patch["g"], $live["g"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/toggle.marko
const $on = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "on" : "off"));
const $setup__script$1 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));

// template.marko
const $count = /*@__PURE__*/ _let_persisted(17, ($scope) => _text($scope.b, $scope.r));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.r + 1);
}));
