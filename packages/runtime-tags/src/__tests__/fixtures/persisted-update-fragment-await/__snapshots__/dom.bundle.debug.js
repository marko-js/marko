// tags/widget.marko.update.mjs
const $clicks_seed = _update_signal("__tests__/tags/widget.marko_0_clicks/var");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("clicks" in patch) _update_seed(live, $clicks_seed, patch["clicks"]);
	_update_scope(patch, live);
};
var widget_marko_update_default = _resume("__tests__/tags/widget.marko_0_update", $update$2);

// tags/layout.marko.update.mjs
const $open_seed = _update_signal("__tests__/tags/layout.marko_0_open/var");
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("open" in patch) _update_seed(live, $open_seed, patch["open"]);
	if ("ConditionalRenderer:#text/2" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", 0);
};
var layout_marko_update_default = _resume("__tests__/tags/layout.marko_0_update", $update$1);

// template.marko.update.mjs
const $for_update = _update_for("#ul/1", "__tests__/template.marko_6_content/update", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = (patch, live) => {
	if ("#childScope/0" in patch) widget_marko_update_default(patch["#childScope/0"], live["#childScope/0"]);
	if ("BranchScopes:#ul/1" in patch) $for_update(live, [patch["BranchScopes:#ul/1"], "#LoopKey"]);
};
const $try_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", $await_content__update);
};
const $Reports_content__update = (patch, live) => {
	if ("profile_plan" in patch) live["profile_plan"] = patch["profile_plan"];
	_update_scope(patch, live);
	if ("BranchScopes:#text/1" in patch) _update_branch(patch, live, "#text/1", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("#childScope/2" in patch) layout_marko_update_default(patch["#childScope/2"], live["#childScope/2"]);
};
_update_content("__tests__/template.marko_2_content", $Reports_content__update);
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// data.js
const getProfile = typeof window === "undefined" ? (user) => ({
	greeting: `hello ${user}`,
	plan: user === "ada" ? "pro" : "free"
}) : undefined;
function getReports(range) {
	if (typeof window !== "undefined") {
		throw new Error("getReports is server-only");
	}
	return resolveAfter([
		{
			name: "views",
			value: range === "week" ? 70 : 10
		},
		range === "week" && {
			name: "clicks",
			value: 21
		},
		range === "week" && {
			name: "sales",
			value: 7
		}
	].filter(Boolean), 1);
}

// tags/widget.marko
const $template$2 = "<button class=widget><!> clicked <!></button>";
const $walks$2 = " D%c%l";
const $clicks = /* @__PURE__ */ _let("clicks/6", ($scope) => _text($scope["#text/2"], $scope.clicks));
const $setup__script$2 = _script_update("__tests__/tags/widget.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, $scope.clicks + 1);
}));
function $setup$2($scope) {
	$clicks($scope, 0);
	$setup__script$2($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => $input_label($scope, input.label);
enableBranches();
var widget_default = /* @__PURE__ */ _template("__tests__/tags/widget.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/layout.marko
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/2");
const $open = /* @__PURE__ */ _let("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand"));
const $setup__script$1 = _script_update("__tests__/tags/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
enableBranches();
var layout_default = /* @__PURE__ */ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
_enable_catch();
const $for_content__report_name = ($scope, report_name) => {
	_attr_class($scope["#li/0"], report_name === $scope.$global.focus && "focus");
	_text($scope["#text/1"], report_name);
};
const $for_content__report_value = ($scope, report_value) => _text($scope["#text/2"], report_value);
const $for_content__$params = ($scope, $params3) => {
	$for_content__report_name($scope, $params3[0]?.name);
	$for_content__report_value($scope, $params3[0]?.value);
};
const $placeholder_content = _content_resume("__tests__/template.marko_5_content", "<p class=loading>crunching numbers…</p>", "b");
const $await_content__profile_plan = /* @__PURE__ */ _closure_get("profile_plan", ($scope) => {
	if (!updating) {
		$input_label($scope["#childScope/0"], $scope._._.profile_plan);
	}
}, ($scope) => $scope._._, "__tests__/template.marko_4_profile_plan/pending");
const $await_content__setup = ($scope) => {
	if (!updating) $await_content__profile_plan($scope);
	$setup$2($scope["#childScope/0"]);
};
const $await_content__for = /* @__PURE__ */ _for_of("#ul/1", "<li><!>: <!></li>", " D%c%l", 0, $for_content__$params);
const $await_content__reports = ($scope, reports) => {
	if (!updating) $await_content__for($scope, [reports]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reports($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content("#text/0", /* @__PURE__ */ ((_w0) => `${_w0}<ul class=reports></ul>`)($template$2), /* @__PURE__ */ ((_w0) => `/${_w0}& b`)($walks$2), $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getReports($scope.$global.range));
};
const $Reports_content__profile = ($scope, profile) => {
	$Reports_content__profile_greeting($scope, profile?.greeting);
	$Reports_content__profile_plan($scope, profile?.plan);
};
const $Reports_content__profile_greeting = ($scope, profile_greeting) => _text($scope["#text/0"], profile_greeting);
const $Reports_content__profile_plan__closure = /* @__PURE__ */ _closure($await_content__profile_plan);
const $Reports_content__profile_plan = /* @__PURE__ */ _const("profile_plan", $Reports_content__profile_plan__closure);
const $Reports_content__try = /* @__PURE__ */ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
const $Reports_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope.$global.stamp);
	if (!updating) $Reports_content__profile($scope, getProfile?.($scope.$global.user));
	$Reports_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $Reports_content = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "<h2 class=greeting> </h2><!><p class=footer>updated <!></p>", "D l%bDb%l", $Reports_content__setup);
const $Home_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = /* @__PURE__ */ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $Home__OR__Reports = /* @__PURE__ */ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "reports" ? $scope.Reports : $scope.Home));
const $Home = /* @__PURE__ */ _const("Home", $Home__OR__Reports);
const $Reports = /* @__PURE__ */ _const("Reports", $Home__OR__Reports);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Reports($scope, { content: $Reports_content($scope) });
	$setup__script($scope);
}
enableBranches();
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
