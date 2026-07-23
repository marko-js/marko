// template.marko.persisted.mjs
const $for_content__watched = _var_resume("a4", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h ? "watching" : "watch")));
_script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content__watched($scope, !$scope.h);
}));
const $watched_seed = _update_signal("a4");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Ndata-id:b": /*@__PURE__*/ _update_named_attr("b", "data-id"),
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c"))
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content__update($p, $l), "a2");
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $watched_seed, $patch["h"]);
	$for_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content__watched = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h ? "watching" : "watch"));
const $for_content__setup__script = _script_update("a1", ($scope) => _on($scope.b, "click", function() {
	$for_content__watched($scope, !$scope.h);
}));
