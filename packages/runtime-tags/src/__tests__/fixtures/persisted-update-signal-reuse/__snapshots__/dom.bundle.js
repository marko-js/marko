// template.marko.persisted.mjs
const $template = "<button>toggle</button><div> </div><span><!> items</span>";
const $walks = " b D lD%l";
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope.b, $scope.i && $scope.g));
const $highlight = _var_resume("a2", /*@__PURE__*/ _let_persisted(8, $input_label__OR__highlight));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$highlight($scope, !$scope.i);
}));
const $input_label = _var_resume("a3", /*@__PURE__*/ _const_persisted(6, ($scope) => {
	_text($scope.c, $scope.g);
	$input_label__OR__highlight($scope);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $highlight_seed = _update_signal("a2");
const $input_label_update = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:b": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_attr("b", _attr_class)),
	"Qd": /*@__PURE__*/ _update_text("d")
});
const $construct = ($scope) => {
	_text($scope.c, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $highlight_seed, $patch["i"]);
	if ("g" in $patch) $input_label_update($live, $patch["g"]);
	$_holes($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $input_label__OR__highlight = /*@__PURE__*/ _or(9, ($scope) => _attr_class($scope.b, $scope.i && $scope.g));
const $highlight = /*@__PURE__*/ _let_persisted(8, $input_label__OR__highlight);
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$highlight($scope, !$scope.i);
}));
