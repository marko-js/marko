// data.js
function getDetails(id) {
	if (typeof window !== "undefined") throw new Error("getDetails is server-only");
	return {
		name: `Part ${id}`,
		price: id * 10
	};
}

// template.marko
const $if_content__details = ($scope, details) => {
	$if_content__details_name($scope, details?.name);
	$if_content__details_price($scope, details?.price);
};
const $if_content__input_detailId = /* @__PURE__ */ _if_closure(2, 0, ($scope) => {
	if (!_updating()) $if_content__details($scope, getDetails($scope._.f));
});
const $if_content__setup = ($scope) => {
	if (!_updating()) $if_content__input_detailId._($scope);
};
const $if_content__details_name = ($scope, details_name) => _text($scope.a, details_name);
const $if_content__details_price__script = _script_update("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $if_content__details_price = /* @__PURE__ */ _const(5, ($scope) => {
	_text($scope.b, $scope.f);
	$if_content__details_price__script($scope);
});
const $count = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $if = _var_resume("a0", /* @__PURE__ */ _if(2, "<section><h2> </h2><p>costs <!></p><button class=copy>use price</button></section>", "E lDb%l l", $if_content__setup, "<p>no selection</p>", "b"));

// template.marko.update.mjs
const $if_update = _update_signal("a0");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) {
		$if_update(live, patch["Dc"]);
		const $patchBranch = patch["Ac"], $liveBranch = _update_flush_fresh(live["Ac"]), $branchMerge = [$if_content__update, 0][patch["Dc"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("a1", $update);
