// tags/mounter.marko
const $input_onReady__script = _script_update("c0", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));
enableBranches();

// tags/layout.marko
enableBranches();

// template.marko
_enable_catch();
const $await_content__ready = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g ? "ready" : "waiting"));
const $placeholder_content = _content_resume("a6", "<p class=loading>loading…</p>", "b");
const $count = /* @__PURE__ */ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
function $onReady($scope) {
	return function() {
		$await_content__ready($scope, true);
	};
}
_resume("a0", $onReady);
enableBranches();

// tags/mounter.marko.update.mjs
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("c" in patch) live["c"] = patch["c"];
};
var mounter_marko_update_default = _resume("c1", $update$2);

// tags/layout.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa", 0);
};
var layout_marko_update_default = _resume("b1", $update$1);

// template.marko.update.mjs
const $ready_seed = _update_signal("a1");
const $count_seed = _update_signal("a2");
const $await_content__update = (patch, live) => {
	if ("g" in patch) _update_seed(live, $ready_seed, patch["g"]);
	if ("a" in patch) mounter_marko_update_default(patch["a"], live["a"]);
	_update_scope(patch, live);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $Reports_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) layout_marko_update_default(patch["c"], live["c"]);
};
_update_content("a4", $Reports_content__update);
var template_marko_update_default = _resume("a3", $update);
