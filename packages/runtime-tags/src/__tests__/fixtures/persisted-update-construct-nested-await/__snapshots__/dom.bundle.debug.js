// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $await_content2__detail = ($scope, detail) => _text($scope["#text/0"], detail);
const $await_content2__$params = ($scope, $params3) => $await_content2__detail($scope, $params3[0]);
const $placeholder_content2 = /*@__PURE__*/ _content("__tests__/template.marko_7_content", "<p class=sub>detail…</p>", "b");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p class=detail> </p>", "D l");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	if (!updating) $try_content2__await_promise($scope, getDetail($scope.$global.topic));
};
const $await_content__summary = ($scope, summary) => _text($scope["#text/0"], summary);
const $await_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content2__setup);
const $await_content__setup = ($scope) => $await_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
const $await_content__$params = ($scope, $params2) => $await_content__summary($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "<p class=loading>summary…</p>", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=summary> </p><!><!>", "D l%c", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getSummary($scope.$global.topic));
};
const $Reports_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $Reports_content__setup = ($scope) => $Reports_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Reports_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $Reports_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
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
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $try_content2__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content2_holes, "__tests__/template.marko_8_update");
};
const $await_content__update = ($patch, $live) => {
	$await_content_holes($patch, $live);
	if ("BranchScopes:#text/1" in $patch) _update_branch($patch, $live, "#text/1", $try_content2__update, "__tests__/template.marko_6_update", "__tests__/template.marko_7_content");
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_5_update");
};
const $Reports_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_3_update", "__tests__/template.marko_4_content");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_7_content", $noop_update);
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_2_content", $Reports_content__update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
function getSummary(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getSummary is server-only");
	}
	return resolveAfter(`${topic} summary`, 1);
}
function getDetail(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getDetail is server-only");
	}
	return resolveAfter(`${topic} detail`, 2);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $await_content2__detail = ($scope, detail) => _text($scope["#text/0"], detail);
const $await_content2__$params = ($scope, $params3) => $await_content2__detail($scope, $params3[0]);
const $placeholder_content2 = _content_resume("__tests__/template.marko_7_content", "<p class=sub>detail…</p>", "b");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p class=detail> </p>", "D l");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	if (!updating) $try_content2__await_promise($scope, getDetail($scope.$global.topic));
};
const $await_content__summary = ($scope, summary) => _text($scope["#text/0"], summary);
const $await_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content2__setup);
const $await_content__setup = ($scope) => $await_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
const $await_content__$params = ($scope, $params2) => $await_content__summary($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "<p class=loading>summary…</p>", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=summary> </p><!><!>", "D l%c", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getSummary($scope.$global.topic));
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
