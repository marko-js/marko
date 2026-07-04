// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_update = _update_signal("__tests__/template.marko_0/update_if_#text/2");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("details" in patch) live["details"] = patch["details"];
	if ("details_name" in patch) live["details_name"] = patch["details_name"];
	if ("details_price" in patch) live["details_price"] = patch["details_price"];
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_detailId" in patch) live["input_detailId"] = patch["input_detailId"];
	if ("ConditionalRenderer:#text/2" in patch) {
		$if_update(live, patch["ConditionalRenderer:#text/2"]);
		const $patchBranch = patch["BranchScopes:#text/2"], $liveBranch = live["BranchScopes:#text/2"], $branchMerge = [$if_content__update, 0][patch["ConditionalRenderer:#text/2"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// data.js
function getDetails(id) {
	if (typeof window !== "undefined") {
		throw new Error("getDetails is server-only");
	}
	return {
		name: `Part ${id}`,
		price: id * 10
	};
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__details = ($scope, details) => {
	$if_content__details_name($scope, details?.name);
	$if_content__details_price($scope, details?.price);
};
const $if_content__input_detailId = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => {
	if (!_updating()) $if_content__details($scope, getDetails($scope._.input_detailId));
});
const $if_content__setup = ($scope) => {
	if (!_updating()) $if_content__input_detailId._($scope);
};
const $if_content__details_name = ($scope, details_name) => _text($scope["#text/0"], details_name);
const $if_content__details_price__script = _script_update("__tests__/template.marko_1_details_price", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope._, $scope.details_price);
}));
const $if_content__details_price = /* @__PURE__ */ _const("details_price", ($scope) => {
	_text($scope["#text/1"], $scope.details_price);
	$if_content__details_price__script($scope);
});
const $count = /* @__PURE__ */ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /* @__PURE__ */ _if("#text/2", "<section><h2> </h2><p>costs <!></p><button class=copy>use price</button></section>", "E lDb%l l", $if_content__setup, "<p>no selection</p>", "b");
const $input_detailId = /* @__PURE__ */ _const("input_detailId", ($scope) => {
	$if($scope, $scope.input_detailId ? 0 : 1);
	$if_content__input_detailId($scope);
});
const $input = ($scope, input) => $input_detailId($scope, input.detailId);
enableBranches();
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
