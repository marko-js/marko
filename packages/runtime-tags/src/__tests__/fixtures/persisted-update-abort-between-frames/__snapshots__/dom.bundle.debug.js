// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $try_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", _update_scope);
};
const $Reports_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("ConditionalRenderer:#text/2" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_update_content("__tests__/template.marko_2_content", $Reports_content__update);
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
function getReport(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getReport is server-only");
	}
	return resolveAfter(`report for ${topic}`, 1);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $await_content__report = ($scope, report) => _text($scope["#text/0"], report);
const $await_content__$params = ($scope, $params2) => $await_content__report($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "<p class=loading>loading…</p>", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=report> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getReport($scope.$global.topic));
};
const $Reports_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $Reports_content__setup = ($scope) => $Reports_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Reports_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $Reports_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
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
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
