// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $load_Rejecting_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Rejecting_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Rejecting_trigger(() => import("./v:rejecting.marko.setup.mjs")));
let $load_Rejecting_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Rejecting_trigger(() => import("./v:rejecting.marko.input_label.mjs")));
const $load_Resolving_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Resolving_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Resolving_trigger(() => import("./v:resolving.marko.setup.mjs")));
let $load_Resolving_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Resolving_trigger(() => import("./v:resolving.marko.input_label.mjs")));
const $Resolve_content__setup = ($scope) => {
	$load_Resolving_setup($scope);
	$load_Resolving_tag_input_label($scope["#childScope/1"], $scope.$global.label);
};
const $Resolve_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<!><!><!><!>", "b%/&", $Resolve_content__setup);
const $Reject_content__setup = ($scope) => {
	$load_Rejecting_setup($scope);
	$load_Rejecting_tag_input_label($scope["#childScope/1"], $scope.$global.label);
};
const $Reject_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!><!>", "b%/&", $Reject_content__setup);
const $Home_content__setup = ($scope) => _text($scope["#text/0"], $scope.$global.label);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home> </p>", "D ", $Home_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Reject__OR__Resolve = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.$global.view === "reject" ? $scope.Reject : $scope.$global.view === "resolve" ? $scope.Resolve : $scope.Home), 2);
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Reject__OR__Resolve);
const $Reject = /*@__PURE__*/ _const_persisted("Reject", $Home__OR__Reject__OR__Resolve);
const $Resolve = /*@__PURE__*/ _const_persisted("Resolve", $Home__OR__Reject__OR__Resolve);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Reject($scope, { content: $Reject_content($scope) });
	if (!updating) $Resolve($scope, { content: $Resolve_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_content", $noop_update);
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/rejecting.marko.persisted.mjs
const $template = "<button class=lazy>rejecting <!></button>";
const $walks = "Db%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var rejecting_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/rejecting.marko", $template, $walks, $setup, $input);
_static_shells({ "__tests__/tags/rejecting.marko_0_update": [$template, $walks] });
const $update2 = () => {};
const $merge = _resume("__tests__/tags/rejecting.marko_0_update", $update2);
_update_content("__tests__/tags/rejecting.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/rejecting.marko
const $template = "<button class=lazy>rejecting <!></button>";
const $walks = "Db%l";
const $setup = () => {};
if (typeof window !== "undefined") {
	await rejectAfter(new Error("stale lazy rejection"));
}
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var rejecting_default = /*@__PURE__*/ _template("__tests__/tags/rejecting.marko", $template, $walks, $setup, $input);

// tags/resolving.marko.persisted.mjs
const $template = "<button class=lazy>resolving <!></button>";
const $walks = "Db%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var resolving_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/resolving.marko", $template, $walks, $setup, $input);
_static_shells({ "__tests__/tags/resolving.marko_0_update": [$template, $walks] });
const $update2 = () => {};
const $merge = _resume("__tests__/tags/resolving.marko_0_update", $update2);
_update_content("__tests__/tags/resolving.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/resolving.marko
const $template = "<button class=lazy>resolving <!></button>";
const $walks = "Db%l";
const $setup = () => {};
if (typeof window !== "undefined") {
	await resolveAfter(0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var resolving_default = /*@__PURE__*/ _template("__tests__/tags/resolving.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $load_Rejecting_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Rejecting_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Rejecting_trigger(() => import("./v:rejecting.marko.setup.mjs")));
let $load_Rejecting_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Rejecting_trigger(() => import("./v:rejecting.marko.input_label.mjs")));
const $load_Resolving_trigger = /*@__PURE__*/ _load_idle_trigger();
let $load_Resolving_setup = /*@__PURE__*/ _load_setup("#text/0", "#childScope/1", /*@__PURE__*/ $load_Resolving_trigger(() => import("./v:resolving.marko.setup.mjs")));
let $load_Resolving_tag_input_label = /*@__PURE__*/ _load_signal(/*@__PURE__*/ $load_Resolving_trigger(() => import("./v:resolving.marko.input_label.mjs")));
const $Resolve_content__setup = ($scope) => {
	$load_Resolving_setup($scope);
	$load_Resolving_tag_input_label($scope["#childScope/1"], $scope.$global.label);
};
const $Resolve_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<!><!><!><!>", "b%/&", $Resolve_content__setup);
const $Reject_content__setup = ($scope) => {
	$load_Rejecting_setup($scope);
	$load_Rejecting_tag_input_label($scope["#childScope/1"], $scope.$global.label);
};
const $Reject_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!><!>", "b%/&", $Reject_content__setup);
const $Home_content__setup = ($scope) => _text($scope["#text/0"], $scope.$global.label);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home> </p>", "D ", $Home_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Reject__OR__Resolve = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.$global.view === "reject" ? $scope.Reject : $scope.$global.view === "resolve" ? $scope.Resolve : $scope.Home), 2);
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Reject__OR__Resolve);
const $Reject = /*@__PURE__*/ _const_persisted("Reject", $Home__OR__Reject__OR__Resolve);
const $Resolve = /*@__PURE__*/ _const_persisted("Resolve", $Home__OR__Reject__OR__Resolve);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Reject($scope, { content: $Reject_content($scope) });
	if (!updating) $Resolve($scope, { content: $Resolve_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/v:rejecting.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];

// tags/v:resolving.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
