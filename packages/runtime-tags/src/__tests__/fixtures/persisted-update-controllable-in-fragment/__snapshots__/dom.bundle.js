// template.marko
const $Editor_content__text = /*@__PURE__*/ _let_persisted(2, ($scope) => {
	_attr_input_value($scope, "a", $scope.c, $valueChange($scope));
	_text($scope.b, $scope.c);
});
const $Editor_content__setup__script = _script_update("a5", ($scope) => _attr_input_value_script($scope, "a"));
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
function $valueChange($scope) {
	return (_new_text) => {
		$Editor_content__text($scope, _new_text);
	};
}
_resume("a0", $valueChange);
enableBranchesPersisted();

// template.marko.update.mjs
const $text_seed = _update_signal("a6");
const $count_seed = _update_signal("a3");
const $Editor_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("c" in _patch) _update_seed(_live, $text_seed, _patch["c"]);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
_update_content("a7", $Editor_content__update);
const _merge = _resume("a8", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
