// tags/store.marko.persisted.mjs
const $template$3 = "";
const $walks$3 = "";
const $value = _var_resume("__tests__/tags/store.marko_0_value/var", /*@__PURE__*/ _let_persisted("value/0", ($scope) => _return($scope, $scope.value)));
const $setup__script$3 = _script_shared(($scope) => $value($scope, $scope.$global.seed));
function $setup$3($scope) {
	_return_change($scope, $valueChange($scope));
	$value($scope, 0);
	$setup__script$3($scope);
}
function $valueChange($scope) {
	return function(next) {
		$value($scope, next + $scope.$global.step);
	};
}
var store_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", "", "", $setup$3);
const $value_seed = _update_signal("__tests__/tags/store.marko_0_value/var");
const $update2$3 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("value" in _patch) _update_seed(_live, $value_seed, _patch["value"]);
};
const _merge$3 = _resume("__tests__/tags/store.marko_0_update", $update2$3);
_update_content("__tests__/tags/store.marko", _merge$3);
function _patch2$3(_fail) {
	return patch(_merge$3, _fail);
}

// tags/widget.marko.persisted.mjs
const $template$2 = "<button class=widget><!> clicked <!></button>";
const $walks$2 = " D%c%l";
const $clicks = _var_resume("__tests__/tags/widget.marko_0_clicks/var", /*@__PURE__*/ _let_persisted("clicks/6", ($scope) => _text($scope["#text/2"], $scope.clicks)));
const $setup__script$2 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, $scope.clicks + 1);
}));
function $setup$2($scope) {
	$clicks($scope, 0);
	$setup__script$2($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var widget_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/widget.marko", $template$2, $walks$2, $setup$2, $input$1);
const $clicks_seed = _update_signal("__tests__/tags/widget.marko_0_clicks/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $update2$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("clicks" in _patch) _update_seed(_live, $clicks_seed, _patch["clicks"]);
	$_holes(_patch, _live);
};
const _merge$2 = _resume("__tests__/tags/widget.marko_0_update", $update2$2);
_update_content("__tests__/tags/widget.marko", _merge$2);
function _patch2$2(_fail) {
	return patch(_merge$2, _fail);
}

// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = _var_resume("__tests__/tags/layout.marko_0_open/var", /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);
const $open_seed = _update_signal("__tests__/tags/layout.marko_0_open/var");
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("open" in _patch) _update_seed(_live, $open_seed, _patch["open"]);
	if ("ConditionalRenderer:#text/2" in _patch || "BranchScopes:#text/2" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const _merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", _merge$1);
function _patch2$1(_fail) {
	return patch(_merge$1, _fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $for_content__metric_name = ($scope, metric_name) => {
	_attr_class($scope["#li/0"], metric_name === $scope.$global.focus && "focus");
	_text($scope["#text/1"], metric_name);
};
const $for_content__metric_value = ($scope, metric_value) => _text($scope["#text/2"], metric_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__metric_name($scope, $params2[0]?.name);
	$for_content__metric_value($scope, $params2[0]?.value);
};
const $Dashboard_content__session = ($scope, session) => {
	$Dashboard_content__session_greeting($scope, session?.greeting);
	$Dashboard_content__session_plan($scope, session?.plan);
};
const $Dashboard_content__session_greeting = ($scope, session_greeting) => _text($scope["#text/0"], session_greeting);
const $Dashboard_content__session_plan = ($scope, session_plan) => $input_label($scope["#childScope/5"], session_plan);
const $Dashboard_content__for = 0;
const $Dashboard_content__if = /*@__PURE__*/ _if("#text/7", "<p class=admin>admin tools enabled</p>", "b");
const $Dashboard_content__setup__script = _script_shared(($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/1"], $scope.tally + 1, "tally");
}));
const $Dashboard_content__setup = ($scope) => {
	_var($scope, "#childScope/1", $Dashboard_content__tally);
	$setup$3($scope["#childScope/1"]);
	$setup$2($scope["#childScope/5"]);
	if (!updating) $Dashboard_content__session($scope, getSession?.($scope.$global.user));
	if (!updating) $Dashboard_content__for($scope, [getMetrics?.($scope.$global.range), function(metric) {
		return metric.name;
	}]);
	if (!updating) $Dashboard_content__if($scope, $scope.$global.admin ? 0 : 1);
	$Dashboard_content__setup__script($scope);
};
const $Dashboard_content__tally = _var_resume("__tests__/template.marko_2_tally/var", /*@__PURE__*/ _const_persisted("tally", ($scope) => _text($scope["#text/4"], $scope.tally)));
const $Dashboard_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0, _w1) => `<h2 class=greeting> </h2>${_w0}<button class=bump>tally <!></button>${_w1}<ul class=metrics></ul><!><!>`)("", $template$2), /*@__PURE__*/ ((_w0, _w1) => `D l0${_w0}& Db%l/${_w1}& b%c`)("", $walks$2), $Dashboard_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Home__OR__Dashboard = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope.Dashboard : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Dashboard);
const $Dashboard = /*@__PURE__*/ _const_persisted("Dashboard", $Home__OR__Dashboard);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Dashboard($scope, { content: $Dashboard_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:class:#li/0": /*@__PURE__*/ _update_attr("#li/0", _attr_class),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2")
});
const $Dashboard_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_update = _update_for_keyed("#ul/6", ($p, $l) => $for_content_holes($p, $l));
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Dashboard_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	$Dashboard_content_holes(_patch, _live);
	if ("#childScope/1" in _patch) _merge$3(_patch["#childScope/1"], _live["#childScope/1"]);
	if ("#childScope/5" in _patch) _merge$2(_patch["#childScope/5"], _live["#childScope/5"]);
	if ("BranchScopes:#ul/6" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/6"], "#LoopKey"]);
	if ("ConditionalRenderer:#text/7" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#text/7", "BranchScopes:#text/7");
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
_update_content("__tests__/template.marko_2_content", $Dashboard_content__update);
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// data.js
const getSession = typeof window === "undefined" ? (user) => ({
	greeting: `hello ${user}`,
	plan: user === "ada" ? "pro" : "free"
}) : undefined;
const getMetrics = typeof window === "undefined" ? (range) => [
	{
		name: "views",
		value: range === "week" ? 70 : 10
	},
	{
		name: "clicks",
		value: range === "week" ? 21 : 3
	},
	range === "week" && {
		name: "sales",
		value: 7
	}
].filter(Boolean) : undefined;

// tags/store.marko
const $template$3 = "";
const $walks$3 = "";
const $value = /*@__PURE__*/ _let_persisted("value/0", ($scope) => _return($scope, $scope.value));
const $setup__script$3 = _script_refresh("__tests__/tags/store.marko_0", ($scope) => $value($scope, $scope.$global.seed));
function $setup$3($scope) {
	_return_change($scope, $valueChange($scope));
	$value($scope, 0);
	$setup__script$3($scope);
}
function $valueChange($scope) {
	return function(next) {
		$value($scope, next + $scope.$global.step);
	};
}
_resume("__tests__/tags/store.marko_0/valueChange", $valueChange);
var store_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", "", "", $setup$3);

// tags/widget.marko
const $template$2 = "<button class=widget><!> clicked <!></button>";
const $walks$2 = " D%c%l";
const $clicks = /*@__PURE__*/ _let_persisted("clicks/6", ($scope) => _text($scope["#text/2"], $scope.clicks));
const $setup__script$2 = _script_update("__tests__/tags/widget.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, $scope.clicks + 1);
}));
function $setup$2($scope) {
	$clicks($scope, 0);
	$setup__script$2($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$1 = ($scope, input) => $input_label($scope, input.label);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/layout.marko
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "collapse" : "expand"));
const $setup__script$1 = _script_update("__tests__/tags/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script$1($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $for_content__metric_name = ($scope, metric_name) => {
	_attr_class($scope["#li/0"], metric_name === $scope.$global.focus && "focus");
	_text($scope["#text/1"], metric_name);
};
const $for_content__metric_value = ($scope, metric_value) => _text($scope["#text/2"], metric_value);
const $for_content__$params = ($scope, $params2) => {
	$for_content__metric_name($scope, $params2[0]?.name);
	$for_content__metric_value($scope, $params2[0]?.value);
};
const $Dashboard_content__session = ($scope, session) => {
	$Dashboard_content__session_greeting($scope, session?.greeting);
	$Dashboard_content__session_plan($scope, session?.plan);
};
const $Dashboard_content__session_greeting = ($scope, session_greeting) => _text($scope["#text/0"], session_greeting);
const $Dashboard_content__session_plan = ($scope, session_plan) => $input_label($scope["#childScope/5"], session_plan);
const $Dashboard_content__for = /*@__PURE__*/ _for_of("#ul/6", "<li><!>: <!></li>", " D%c%l", 0, $for_content__$params);
const $Dashboard_content__if = /*@__PURE__*/ _if("#text/7", "<p class=admin>admin tools enabled</p>", "b");
const $Dashboard_content__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/1"], $scope.tally + 1, "tally");
}));
const $Dashboard_content__setup = ($scope) => {
	_var($scope, "#childScope/1", $Dashboard_content__tally);
	$setup$3($scope["#childScope/1"]);
	$setup$2($scope["#childScope/5"]);
	if (!updating) $Dashboard_content__session($scope, getSession?.($scope.$global.user));
	if (!updating) $Dashboard_content__for($scope, [getMetrics?.($scope.$global.range), function(metric) {
		return metric.name;
	}]);
	if (!updating) $Dashboard_content__if($scope, $scope.$global.admin ? 0 : 1);
	$Dashboard_content__setup__script($scope);
};
const $Dashboard_content__tally = _var_resume("__tests__/template.marko_2_tally/var", /*@__PURE__*/ _const_persisted("tally", ($scope) => _text($scope["#text/4"], $scope.tally)));
const $Dashboard_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0, _w1) => `<h2 class=greeting> </h2>${_w0}<button class=bump>tally <!></button>${_w1}<ul class=metrics></ul><!><!>`)("", $template$2), /*@__PURE__*/ ((_w0, _w1) => `D l0${_w0}& Db%l/${_w1}& b%c`)("", $walks$2), $Dashboard_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $Home__OR__Dashboard = /*@__PURE__*/ _or(6, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope.Dashboard : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Dashboard);
const $Dashboard = /*@__PURE__*/ _const_persisted("Dashboard", $Home__OR__Dashboard);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Dashboard($scope, { content: $Dashboard_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
