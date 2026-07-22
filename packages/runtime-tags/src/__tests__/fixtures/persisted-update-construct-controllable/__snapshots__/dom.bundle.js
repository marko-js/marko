// template.marko.persisted.mjs
const $Editor_content__text = _var_resume("a8", /*@__PURE__*/ _let_persisted(2, ($scope) => {
	_attr_input_value($scope, "a", $scope.c, $valueChange($scope));
	_text($scope.b, $scope.c);
}));
const $Editor_content__setup__script = _script_shared(($scope) => _attr_input_value_script($scope, "a"));
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
function $valueChange($scope) {
	return (_new_text) => {
		$Editor_content__text($scope, _new_text);
	};
}
const $text_seed = _update_signal("a8");
const $count_seed = _update_signal("a9");
const $Editor_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $text_seed, $patch["c"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_update_content("a4", $Editor_content__update);
const $noop_update = () => {};
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Editor_content__text = /*@__PURE__*/ _let_persisted(2, ($scope) => {
	_attr_input_value($scope, "a", $scope.c, $valueChange($scope));
	_text($scope.b, $scope.c);
});
const $Editor_content__setup__script = _script_update("a5", ($scope) => _attr_input_value_script($scope, "a"));
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
function $valueChange($scope) {
	return (_new_text) => {
		$Editor_content__text($scope, _new_text);
	};
}
_resume("a0", $valueChange);
