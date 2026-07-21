// template.marko.persisted.mjs
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Nvalue:a": /*@__PURE__*/ _update_named_attr("a", "value"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $count_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Nvalue:c": /*@__PURE__*/ _update_controllable("c", _update_select_value) });
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content_holes($p, $l), "a1");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	$_holes($patch, $live);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
