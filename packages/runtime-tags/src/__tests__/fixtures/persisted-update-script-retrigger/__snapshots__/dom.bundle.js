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
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $mirror_seed, patch["d"]);
	_update_scope(patch, live);
};
var template_marko_update_default = _resume("a2", $update);
