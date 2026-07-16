// template.marko
const $for_content__watched = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h ? "watching" : "watch"));
const $for_content__setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$for_content__watched($scope, !$scope.h);
}));

// template.marko.persisted.mjs
const $for_content__watched = _var_resume("a4", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h ? "watching" : "watch")));
_script_shared(($scope) => _on($scope.b, "click", function() {
	$for_content__watched($scope, !$scope.h);
}));
const $watched_seed = _update_signal("a4");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Ndata-id:b": /*@__PURE__*/ _update_named_attr("b", "data-id")
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $watched_seed, _patch["h"]);
	$for_content_holes(_patch, _live);
};
const $update2 = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const _merge = _resume("a2", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
