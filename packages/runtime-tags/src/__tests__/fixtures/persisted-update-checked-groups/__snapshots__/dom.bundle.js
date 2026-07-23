// template.marko.persisted.mjs
const $note = _var_resume("a4", /*@__PURE__*/ _let_persisted(21, ($scope) => _text($scope.l, $scope.v)));
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(22, ($scope) => _text($scope.b, $scope.w)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.w + 1);
	});
	_attr_input_checkedValue_script($scope, "f");
	_attr_input_checkedValue_script($scope, "g");
});
const $note_seed = _update_signal("a4");
const $count_seed = _update_signal("a5");
const $_holes = /*@__PURE__*/ _update_scopes({
	"NcheckedValue:c": /*@__PURE__*/ _update_controllable("c", _update_input_checkedValue),
	"NcheckedValue:d": /*@__PURE__*/ _update_controllable("d", _update_input_checkedValue),
	"NcheckedValue:e": /*@__PURE__*/ _update_controllable("e", _update_input_checkedValue),
	"NcheckedValue:f": /*@__PURE__*/ _update_controllable("f", _update_input_checkedValue),
	"NcheckedValue:g": /*@__PURE__*/ _update_controllable("g", _update_input_checkedValue),
	"NcheckedValue:h": /*@__PURE__*/ _update_controllable("h", _update_input_checkedValue),
	"NcheckedValue:i": /*@__PURE__*/ _update_controllable("i", _update_input_checkedValue),
	"Nchecked:j": /*@__PURE__*/ _update_controllable("j", _update_input_checked),
	"Nvalue:k": /*@__PURE__*/ _update_named_attr("k", "value"),
	"NcheckedValue:k": /*@__PURE__*/ _update_controllable("k", _update_input_checkedValue)
});
const $construct = ($scope) => {
	_text($scope.b, $scope.w);
	_attr_input_checkedValue_default($scope, "k", $scope.t, $scope.s);
	_text($scope.l, $scope.v);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("v" in $patch) _update_seed($live, $note_seed, $patch["v"]);
	if ("w" in $patch) _update_seed($live, $count_seed, $patch["w"]);
	if ("s" in $patch) $live["s"] = $patch["s"];
	if ("t" in $patch) $live["t"] = $patch["t"];
	$_holes($patch, $live);
};
_construct("a2", $construct);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $note = /*@__PURE__*/ _let_persisted(21, ($scope) => _text($scope.l, $scope.v));
const $count = /*@__PURE__*/ _let_persisted(22, ($scope) => _text($scope.b, $scope.w));
const $setup__script = _script_update("a3", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.w + 1);
	});
	_attr_input_checkedValue_script($scope, "f");
	_attr_input_checkedValue_script($scope, "g");
});
function $checkedValueChange2($scope) {
	return function(v) {
		$note($scope, `ship ${v}`);
	};
}
function $checkedValueChange($scope) {
	return function(v) {
		$note($scope, `ship ${v}`);
	};
}
_resume("a1", $checkedValueChange2);
_resume("a0", $checkedValueChange);
