// tags/mounter.marko.persisted.mjs
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $input_onReady__script = _script_shared(($scope) => _lifecycle($scope, { onMount: function() {
	$scope.input_onReady();
} }));
const $input_onReady = _var_resume("__tests__/tags/mounter.marko_0_input_onReady/var", /*@__PURE__*/ _const_persisted("input_onReady", $input_onReady__script));
const $input$1 = ($scope, input) => $input_onReady($scope, input.onReady);
var mounter_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/mounter.marko", "", "", $setup$2, $input$1);
const $input_onReady_update = _update_signal("__tests__/tags/mounter.marko_0_input_onReady/var");
const $update2$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("input_onReady" in _patch) $input_onReady_update(_live, _patch["input_onReady"]);
};
const _merge$2 = _resume("__tests__/tags/mounter.marko_0_update", $update2$2);
_update_content("__tests__/tags/mounter.marko", _merge$2);
function _patch2$2() {
	return patch(_merge$2);
}

// tags/layout.marko.persisted.mjs
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);
const $update2$1 = (_patch, _live) => {
	if ("ConditionalRenderer:#text/0" in _patch || "BranchScopes:#text/0" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const _merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", _merge$1);
function _patch2$1() {
	return patch(_merge$1);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)("D%l");
_enable_catch();
const $await_content__ready = _var_resume("__tests__/template.marko_5_ready/var", /*@__PURE__*/ _let_persisted("ready/6", ($scope) => _text($scope["#text/1"], $scope.ready ? "ready" : "waiting")));
const $await_content__setup = ($scope) => {
	$input_onReady($scope["#childScope/0"], $onReady($scope));
	$await_content__ready($scope, false);
};
const $await_content__data_total = ($scope, data_total) => _text($scope["#text/2"], data_total);
const $await_content__$params = ($scope, $params2) => $await_content__data_total($scope, $params2[0]?.total);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "<p class=loading>loading…</p>", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p class=status><!> of <!></p>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&D%c%l`)(""), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getData($scope.$global.range));
};
const $Reports_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $Reports_content__setup = ($scope) => $Reports_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Reports_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $Reports_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>home</p>", "b");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Home__OR__Reports = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "reports" ? $scope.Reports : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Reports);
const $Reports = /*@__PURE__*/ _const_persisted("Reports", $Home__OR__Reports);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Reports($scope, { content: $Reports_content($scope) });
	$setup__script($scope);
}
function $onReady($scope) {
	return function() {
		$await_content__ready($scope, true);
	};
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $ready_seed = _update_signal("__tests__/template.marko_5_ready/var");
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = (_patch, _live) => {
	if ("ready" in _patch) _update_seed(_live, $ready_seed, _patch["ready"]);
	$await_content_holes(_patch, _live);
	if ("#childScope/0" in _patch) _merge$2(_patch["#childScope/0"], _live["#childScope/0"]);
};
const $try_content__update = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) _update_branch(_patch, _live, "#text/0", $await_content__update);
};
const $Reports_content__update = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) _update_branch(_patch, _live, "#text/0", $try_content__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
_update_content("__tests__/template.marko_2_content", $Reports_content__update);
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2() {
	return patch(_merge);
}

// data.js
function getData(range) {
	if (typeof window !== "undefined") {
		throw new Error("getData is server-only");
	}
	return resolveAfter({ total: range === "week" ? 50 : 10 }, 1);
}

// tags/mounter.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $input_onReady__script = _script_update("__tests__/tags/mounter.marko_0_input_onReady", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.input_onReady();
} }));
const $input_onReady = /*@__PURE__*/ _const_persisted("input_onReady", $input_onReady__script);
const $input$1 = ($scope, input) => $input_onReady($scope, input.onReady);
enableBranchesPersisted();
var mounter_default = /*@__PURE__*/ _template("__tests__/tags/mounter.marko", "", "", $setup$2, $input$1);

// tags/layout.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
enableBranchesPersisted();
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)("D%l");
_enable_catch();
const $await_content__ready = /*@__PURE__*/ _let_persisted("ready/6", ($scope) => _text($scope["#text/1"], $scope.ready ? "ready" : "waiting"));
const $await_content__setup = ($scope) => {
	$input_onReady($scope["#childScope/0"], $onReady($scope));
	$await_content__ready($scope, false);
};
const $await_content__data_total = ($scope, data_total) => _text($scope["#text/2"], data_total);
const $await_content__$params = ($scope, $params2) => $await_content__data_total($scope, $params2[0]?.total);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "<p class=loading>loading…</p>", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p class=status><!> of <!></p>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&D%c%l`)(""), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getData($scope.$global.range));
};
const $Reports_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $Reports_content__setup = ($scope) => $Reports_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $Reports_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<!><!><!>", "b%c", $Reports_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>home</p>", "b");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $Home__OR__Reports = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "reports" ? $scope.Reports : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Reports);
const $Reports = /*@__PURE__*/ _const_persisted("Reports", $Home__OR__Reports);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Reports($scope, { content: $Reports_content($scope) });
	$setup__script($scope);
}
function $onReady($scope) {
	return function() {
		$await_content__ready($scope, true);
	};
}
_resume("__tests__/template.marko_5/onReady", $onReady);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
