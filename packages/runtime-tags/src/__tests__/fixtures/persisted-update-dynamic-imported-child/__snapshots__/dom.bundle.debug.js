// tags/roster.marko.persisted.mjs
const $template$2 = "<ul class=roster></ul>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = 0;
const $input_members$2 = ($scope, input_members) => {
	if (!updating) $for($scope, [input_members, function(name) {
		return name;
	}]);
};
const $input$2 = ($scope, input) => $input_members$2($scope, input.members);
var roster_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/roster.marko", $template$2, " b", $setup$2, $input$2);
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => $for_content_holes($p, $l));
const $update2$1 = (_patch, _live) => {
	if ("BranchScopes:#ul/0" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const _merge$2 = _resume("__tests__/tags/roster.marko_0_update", $update2$1);
_update_content("__tests__/tags/roster.marko", _merge$2);
function _patch2$2(_fail) {
	return patch(_merge$2, _fail);
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
const $_holes$1 = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const _merge$1 = _resume("__tests__/tags/digest.marko_0_update", $_holes$1);
_update_content("__tests__/tags/digest.marko", _merge$1);
function _patch2$1(_fail) {
	return patch(_merge$1, _fail);
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
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("input_view" in _patch) _live["input_view"] = _patch["input_view"];
	if ("input_members" in _patch) _live["input_members"] = _patch["input_members"];
	if ("input_wide" in _patch) _live["input_wide"] = _patch["input_wide"];
	$_holes(_patch, _live);
	if ("ConditionalRenderer:#text/3" in _patch || "BranchScopes:#text/3" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
	if ("ConditionalRenderer:#text/4" in _patch || "BranchScopes:#text/4" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/4", "BranchScopes:#text/4");
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/roster.marko
const $template$1 = "<ul class=roster></ul>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content__$params);
const $input_members$1 = ($scope, input_members) => {
	if (!updating) $for($scope, [input_members, function(name) {
		return name;
	}]);
};
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
