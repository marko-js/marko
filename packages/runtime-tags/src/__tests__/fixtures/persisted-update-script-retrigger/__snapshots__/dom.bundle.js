// template.marko
const $mirror = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_refresh("a1", ($scope) => {
	$mirror($scope, $scope.$.stock);
	_on($scope.a, "click", function() {
		$mirror($scope, $scope.d - 1);
	});
});

// template.marko.persisted.mjs
const $mirror = _var_resume("a2", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => {
	$mirror($scope, $scope.$.stock);
	_on($scope.a, "click", function() {
		$mirror($scope, $scope.d - 1);
	});
});
const $mirror_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $mirror_seed, _patch["d"]);
	$_holes(_patch, _live);
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
