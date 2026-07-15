// tags/mounter.marko
const $input_onReady__script = _script_update("c0", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));
enableBranchesPersisted();

// tags/layout.marko
enableBranchesPersisted();

// template.marko
_enable_catch();
const $await_content__ready = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "ready" : "waiting"));
const $placeholder_content = _content_resume("a7", "<p class=loading>loading…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
function $onReady($scope) {
	return function() {
		$await_content__ready($scope, true);
	};
}
_resume("a0", $onReady);
enableBranchesPersisted();

// tags/mounter.marko.update.mjs
const $input_onReady_update = _update_signal("c1");
const $update$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("c" in _patch) $input_onReady_update(_live, _patch["c"]);
};
const _merge$2 = _resume("c2", $update$2);
_update_content("c", _merge$2);

// tags/layout.marko.update.mjs
const $update$1 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$1 = _resume("b1", $update$1);
_update_content("b", _merge$1);

// template.marko.update.mjs
const $ready_seed = _update_signal("a8");
const $count_seed = _update_signal("a2");
const $await_content__update = (_patch, _live) => {
	if ("g" in _patch) _update_seed(_live, $ready_seed, _patch["g"]);
	if ("a" in _patch) _merge$2(_patch["a"], _live["a"]);
	_update_scope(_patch, _live);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $Reports_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $try_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a5", $Reports_content__update);
const _merge = _resume("a9", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
