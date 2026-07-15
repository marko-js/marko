// template.marko
const $mirror = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_refresh("a0", ($scope) => {
	$mirror($scope, $scope.$.stock);
	_on($scope.a, "click", function() {
		$mirror($scope, $scope.d - 1);
	});
});
enableBranchesPersisted();

// template.marko.update.mjs
const $mirror_seed = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $mirror_seed, _patch["d"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("a2", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
