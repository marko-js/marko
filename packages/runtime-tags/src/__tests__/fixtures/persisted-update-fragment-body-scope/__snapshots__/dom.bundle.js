// tags/mounter.marko
const $input_onReady__script = _script_update("c1", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));

// template.marko
_enable_catch();
const $await_content__ready = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "ready" : "waiting"));
const $placeholder_content = _content_resume("a5", "<p class=loading>loading…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
function $onReady($scope) {
	return function() {
		$await_content__ready($scope, true);
	};
}
_resume("a0", $onReady);

// tags/mounter.marko.persisted.mjs
const $input_onReady__script = _script_shared(($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));
const $input_onReady = _var_resume("c2", /*@__PURE__*/ _const_persisted(2, $input_onReady__script));
const $input_onReady_update = _update_signal("c2");
const $update2$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("c" in _patch) $input_onReady_update(_live, _patch["c"]);
};
const _merge$2 = _resume("c0", $update2$2);
_update_content("c", _merge$2);

// tags/layout.marko.persisted.mjs
const $update2$1 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$1 = _resume("b1", $update2$1);
_update_content("b", _merge$1);

// template.marko.persisted.mjs
_enable_catch();
const $await_content__ready = _var_resume("a9", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "ready" : "waiting")));
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $ready_seed = _update_signal("a9");
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a10");
const $await_content__update = (_patch, _live) => {
	if ("g" in _patch) _update_seed(_live, $ready_seed, _patch["g"]);
	$await_content_holes(_patch, _live);
	if ("a" in _patch) _merge$2(_patch["a"], _live["a"]);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $Reports_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $try_content__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a3", $Reports_content__update);
const _merge = _resume("a7", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
