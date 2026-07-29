// template.marko.persisted.mjs
const $template = "<button>count <!></button><div class=target>attribute</div><input class=target>";
const $walks = " Db%l b b";
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Ndata-value:c": /*@__PURE__*/ _update_named_attr("c", "data-value"),
	"Nvalue:d": /*@__PURE__*/ _update_named_attr("d", "value")
});
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	$_holes($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
