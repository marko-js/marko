// tags/roster.marko.persisted.mjs
const $template$2 = "<ul class=roster></ul>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_members$2 = ($scope, input_members) => $for($scope, [input_members, function(name) {
	return name;
}]);
const $input$2 = ($scope, input) => $input_members$2($scope, input.members);
var roster_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/roster.marko", $template$2, " b", $setup$2, $input$2);
_static_shells({ "__tests__/tags/roster.marko_0_update": [$template$2, " b"] });
const $update2$2 = () => {};
const $noop_update = () => {};
_update_content("__tests__/tags/roster.marko_1_update", $noop_update);
const $merge$2 = _resume("__tests__/tags/roster.marko_0_update", $update2$2);
_update_content("__tests__/tags/roster.marko", $merge$2);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
}

// tags/digest.marko.persisted.mjs
const $template$1 = "<p class=digest><!> on call: <!></p>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_members_length = ($scope, input_members_length) => _text($scope["#text/0"], input_members_length);
const $input_members$1 = ($scope, input_members) => {
	_text($scope["#text/1"], input_members.join(", "));
	$input_members_length($scope, input_members?.length);
};
const $input$1 = ($scope, input) => $input_members$1($scope, input.members);
var digest_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/digest.marko", $template$1, $walks$1, $setup$1, $input$1);
_static_shells({ "__tests__/tags/digest.marko_0_update": [$template$1, $walks$1] });
const $update2$1 = () => {};
const $merge$1 = _resume("__tests__/tags/digest.marko_0_update", $update2$1);
_update_content("__tests__/tags/digest.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!><!>";
const $walks = "D l Db%l%b%c";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/13", ($scope) => _text($scope["#text/2"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_view__OR__input_members = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_view === "roster" ? roster_default : "div", () => ({ members: $scope.input_members })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__input_members);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_members__OR__input_wide = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag2($scope, $scope.input_wide ? roster_default : digest_default, () => ({ members: $scope.input_members })));
const $input_members = /*@__PURE__*/ _const_persisted("input_members", ($scope) => {
	$input_view__OR__input_members($scope);
	$input_members__OR__input_wide($scope);
});
const $input_wide = /*@__PURE__*/ _const_persisted("input_wide", $input_members__OR__input_wide);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_view($scope, input.view);
	$input_members($scope, input.members);
	$input_wide($scope, input.wide);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_view" in $patch) $live["input_view"] = $patch["input_view"];
	if ("input_members" in $patch) $live["input_members"] = $patch["input_members"];
	if ("input_wide" in $patch) $live["input_wide"] = $patch["input_wide"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch || "BranchScopes:#text/3" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
	if ("ConditionalRenderer:#text/4" in $patch || "BranchScopes:#text/4" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/4", "BranchScopes:#text/4");
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/roster.marko
const $template$1 = "<ul class=roster></ul>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $input_members$1 = ($scope, input_members) => $for($scope, [input_members, function(name) {
	return name;
}]);
const $input$1 = ($scope, input) => $input_members$1($scope, input.members);
var roster_default = /*@__PURE__*/ _template("__tests__/tags/roster.marko", $template$1, " b", $setup$1, $input$1);

// tags/digest.marko
const $template = "<p class=digest><!> on call: <!></p>";
const $walks = "D%c%l";
const $setup = () => {};
const $input_members_length = ($scope, input_members_length) => _text($scope["#text/0"], input_members_length);
const $input_members = ($scope, input_members) => {
	_text($scope["#text/1"], input_members.join(", "));
	$input_members_length($scope, input_members?.length);
};
const $input = ($scope, input) => $input_members($scope, input.members);
var digest_default = /*@__PURE__*/ _template("__tests__/tags/digest.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!><!>";
const $walks = "D l Db%l%b%c";
const $count = /*@__PURE__*/ _let_persisted("count/13", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_view__OR__input_members = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_view === "roster" ? roster_default : "div", () => ({ members: $scope.input_members })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__input_members);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_members__OR__input_wide = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag2($scope, $scope.input_wide ? roster_default : digest_default, () => ({ members: $scope.input_members })));
const $input_members = /*@__PURE__*/ _const_persisted("input_members", ($scope) => {
	$input_view__OR__input_members($scope);
	$input_members__OR__input_wide($scope);
});
const $input_wide = /*@__PURE__*/ _const_persisted("input_wide", $input_members__OR__input_wide);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_view($scope, input.view);
	$input_members($scope, input.members);
	$input_wide($scope, input.wide);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
