// template.marko.persisted.mjs
const $Reports_content__walks = "b%c", $Reports_content__template = "<!><!><!>", $try_content__walks = "b%b%c", $try_content__template = "<!><!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=report> </p>", $await_content2__walks = "D l", $await_content2__template = "<p class=summary> </p>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $await_content2__summary = ($scope, summary) => _text($scope["#text/0"], summary);
const $await_content2__$params = ($scope, $params3) => $await_content2__summary($scope, $params3[0]);
const $await_content__report = ($scope, report) => _text($scope["#text/0"], report);
const $await_content__$params = ($scope, $params2) => $await_content__report($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", $await_content2__template, $await_content2__walks);
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	if (!updating) $try_content__await_promise($scope, getReport($scope.$global.topic));
	if (!updating) $try_content__await_promise2($scope, getSummary($scope.$global.topic));
};
const $Reports_content__try = /*@__PURE__*/ _try("#text/0", $try_content__template, $try_content__walks, $try_content__setup);
const $Reports_content__setup = ($scope) => $Reports_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Reports_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", $Reports_content__template, $Reports_content__walks, $Reports_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Reports = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "reports" ? $scope.Reports : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Reports);
const $Reports = /*@__PURE__*/ _const_persisted("Reports", $Home__OR__Reports);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Reports($scope, { content: $Reports_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_6_update": [$await_content2__template, $await_content2__walks],
	"__tests__/template.marko_6_content": [$await_content2__template, $await_content2__walks],
	"__tests__/template.marko_5_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_5_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_3_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_3_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_2_update": [$Reports_content__template, $Reports_content__walks],
	"__tests__/template.marko_2_content": [$Reports_content__template, $Reports_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_5_update");
	if ("BranchScopes:#text/1" in $patch) _update_branch($patch, $live, "#text/1", $await_content2_holes, "__tests__/template.marko_6_update");
};
const $Reports_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_3_update", "__tests__/template.marko_4_content");
};
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
_update_content("__tests__/template.marko_6_update", $await_content2_holes);
_update_content("__tests__/template.marko_5_update", $await_content_holes);
const $noop_update = () => {};
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_3_update", $try_content__update);
_update_content("__tests__/template.marko_2_content", $Reports_content__update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
function getReport(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getReport is server-only");
	}
	return resolveAfter(`report for ${topic}`, 1);
}
function getSummary(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getSummary is server-only");
	}
	return resolveAfter(`summary of ${topic}`, 2);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $await_content2__summary = ($scope, summary) => _text($scope["#text/0"], summary);
const $await_content2__$params = ($scope, $params3) => $await_content2__summary($scope, $params3[0]);
const $await_content__report = ($scope, report) => _text($scope["#text/0"], report);
const $await_content__$params = ($scope, $params2) => $await_content__report($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=report> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<p class=summary> </p>", "D ");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	if (!updating) $try_content__await_promise($scope, getReport($scope.$global.topic));
	if (!updating) $try_content__await_promise2($scope, getSummary($scope.$global.topic));
};
const $Reports_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup);
const $Reports_content__setup = ($scope) => $Reports_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Reports_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!>", "b%", $Reports_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Reports = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "reports" ? $scope.Reports : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Reports);
const $Reports = /*@__PURE__*/ _const_persisted("Reports", $Home__OR__Reports);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Reports($scope, { content: $Reports_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
