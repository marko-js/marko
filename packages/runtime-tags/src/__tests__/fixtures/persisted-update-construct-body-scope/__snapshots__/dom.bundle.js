// tags/mounter.marko.persisted.mjs
const $input_onReady__script = _script_shared(($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));
const $input_onReady = _var_resume("c2", /*@__PURE__*/ _const_persisted(2, $input_onReady__script));
const $input_onReady_update = _update_signal("c2");
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) $input_onReady_update($live, $patch["c"]);
};
const $merge$2 = _resume("c0", $update2$2);
_update_content("c", $merge$2);

// tags/layout.marko.persisted.mjs
const $update2$1 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
_enable_catch();
const $await_content__ready = _var_resume("a12", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "ready" : "waiting")));
const $count = _var_resume("a13", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $ready_seed = _update_signal("a12");
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a13");
const $await_content__update = ($patch, $live) => {
	if ("g" in $patch) _update_seed($live, $ready_seed, $patch["g"]);
	$await_content_holes($patch, $live);
	if ("a" in $patch) $merge$2($patch["a"], $live["a"]);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a4");
};
const $Reports_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a7", "a5");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a8", $Reports_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/mounter.marko
const $input_onReady__script = _script_update("c1", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));

// template.marko
_enable_catch();
const $await_content__ready = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "ready" : "waiting"));
const $placeholder_content = _content_resume("a5", "<p class=loading>loading…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
function $onReady($scope) {
	return function() {
		$await_content__ready($scope, true);
	};
}
_resume("a0", $onReady);
