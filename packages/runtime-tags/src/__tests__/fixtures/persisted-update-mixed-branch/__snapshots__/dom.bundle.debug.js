// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_update = _update_signal("__tests__/template.marko_0/update_if_#text/0");
const $else_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("#text/0" in patch) _text(live["#text/0"], patch["#text/0"]);
};
const $update = (patch, live) => {
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("$params" in patch) live["$params"] = patch["$params"];
	if ("input" in patch) live["input"] = patch["input"];
	if ("input_err" in patch) live["input_err"] = patch["input_err"];
	if ("input_title" in patch) live["input_title"] = patch["input_title"];
	if ("ConditionalRenderer:#text/0" in patch) {
		$if_update(live, patch["ConditionalRenderer:#text/0"]);
		const $patchBranch = patch["BranchScopes:#text/0"], $liveBranch = live["BranchScopes:#text/0"], $branchMerge = [0, $else_content__update][patch["ConditionalRenderer:#text/0"]];
		if ($patchBranch && $liveBranch && $branchMerge) $branchMerge($patchBranch, $liveBranch);
	}
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $else_content__input_title = /* @__PURE__ */ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/0"], $scope._.input_title));
const $else_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $else_content__setup = ($scope) => {
	if (!_updating()) $else_content__input_title._($scope);
	$else_content__count._($scope);
	$else_content__setup__script($scope);
};
const $else_content__count = /* @__PURE__ */ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/2"], $scope._.count));
const $count = _var_resume("__tests__/template.marko_0_count/var", /* @__PURE__ */ _let("count/5", $else_content__count));
function $setup($scope) {
	$count($scope, 0);
}
const $if = _var_resume("__tests__/template.marko_0/update_if_#text/0", /* @__PURE__ */ _if("#text/0", "<h2>Something went wrong</h2>", "b", 0, "<h1> </h1><button> </button>", "D l D l", $else_content__setup));
const $input_err = ($scope, input_err) => $if($scope, input_err ? 0 : 1);
const $input = ($scope, input) => {
	$input_err($scope, input.err);
	$input_title($scope, input.title);
};
const $input_title = /* @__PURE__ */ _const("input_title", $else_content__input_title);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
