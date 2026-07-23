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
const $update2$3 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("value" in $patch) _update_seed($live, $value_seed, $patch["value"]);
};
const $merge$3 = _resume("__tests__/tags/store.marko_0_update", $update2$3);
_update_content("__tests__/tags/store.marko", $merge$3);
function $patch2$3($fail) {
	return patch($merge$3, $fail);
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
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $construct$1 = ($scope) => {
	_text($scope["#text/2"], $scope.clicks);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("clicks" in $patch) _update_seed($live, $clicks_seed, $patch["clicks"]);
	$_holes$1($patch, $live);
};
_construct("__tests__/tags/widget.marko_0_update", $construct$1);
const $merge$2 = _resume("__tests__/tags/widget.marko_0_update", $update2$2);
_update_content("__tests__/tags/widget.marko", $merge$2, $construct$1);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
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
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/1")) });
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("open" in $patch) _update_seed($live, $open_seed, $patch["open"]);
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const $merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
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
const $Dashboard_content__session_plan = ($scope, session_plan) => $input_label($scope["#childScope/6"], session_plan);
const $Dashboard_content__for = 0;
const $Dashboard_content__if = /*@__PURE__*/ _if("#text/9", "<p class=admin>admin tools enabled</p>", "b");
const $Dashboard_content__setup__script = _script_shared(($scope) => _on($scope["#button/4"], "click", function() {
	_var_change($scope["#childScope/1"], $scope.tally + 1, "tally");
}));
const $Dashboard_content__setup = ($scope) => {
	_var($scope, "#childScope/1", $Dashboard_content__tally);
	$setup$3($scope["#childScope/1"]);
	$setup$2($scope["#childScope/6"]);
	if (!updating) $Dashboard_content__session($scope, getSession?.($scope.$global.user));
	if (!updating) $Dashboard_content__for($scope, [getMetrics?.($scope.$global.range), function(metric) {
		return metric.name;
	}]);
	if (!updating) $Dashboard_content__if($scope, $scope.$global.admin ? 0 : 1);
	$Dashboard_content__setup__script($scope);
};
const $Dashboard_content__tally = _var_resume("__tests__/template.marko_2_tally/var", /*@__PURE__*/ _const_persisted("tally", ($scope) => _text($scope["#text/5"], $scope.tally)));
const $Dashboard_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0, _w1) => `<h2 class=greeting> </h2>${_w0}<!><button class=bump>tally <!></button>${_w1}<!><ul class=metrics></ul><!><!>`)("", $template$2), /*@__PURE__*/ ((_w0, _w1) => `D l0${_w0}&%b Db%l/${_w1}&%b b%c`)("", $walks$2), $Dashboard_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Home__OR__Dashboard = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope.Dashboard : $scope.Home));
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
const $Dashboard_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Dashboard_content__construct = ($scope) => {
	_construct_child($scope, "#childScope/1", "__tests__/tags/store.marko_0_update");
	_var($scope, "#childScope/1", $Dashboard_content__tally);
	_text($scope["#text/5"], $scope.tally);
	_construct_child($scope, "#childScope/6", "__tests__/tags/widget.marko_0_update");
};
const $Dashboard_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Dashboard_content_holes($patch, $live);
	if ("#childScope/1" in $patch) $merge$3($patch["#childScope/1"], $live["#childScope/1"]);
	if ("#childScope/6" in $patch) $merge$2($patch["#childScope/6"], $live["#childScope/6"]);
	if ("ConditionalRenderer:#ul/8" in $patch) _update_region("#ul/8")($patch, $live);
	if ("ConditionalRenderer:#text/9" in $patch) _update_region("#text/9")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/2", "__tests__/tags/layout.marko_0_update");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_construct("__tests__/template.marko_2_update", $Dashboard_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_2_content", $Dashboard_content__update, $Dashboard_content__construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
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
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
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
const $Dashboard_content__session_plan = ($scope, session_plan) => $input_label($scope["#childScope/6"], session_plan);
const $Dashboard_content__for = /*@__PURE__*/ _for_of("#ul/8", "<li><!>: <!></li>", " D%c%l", 0, $for_content__$params);
const $Dashboard_content__if = /*@__PURE__*/ _if("#text/9", "<p class=admin>admin tools enabled</p>", "b");
const $Dashboard_content__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/4"], "click", function() {
	_var_change($scope["#childScope/1"], $scope.tally + 1, "tally");
}));
const $Dashboard_content__setup = ($scope) => {
	_var($scope, "#childScope/1", $Dashboard_content__tally);
	$setup$3($scope["#childScope/1"]);
	$setup$2($scope["#childScope/6"]);
	if (!updating) $Dashboard_content__session($scope, getSession?.($scope.$global.user));
	if (!updating) $Dashboard_content__for($scope, [getMetrics?.($scope.$global.range), function(metric) {
		return metric.name;
	}]);
	if (!updating) $Dashboard_content__if($scope, $scope.$global.admin ? 0 : 1);
	$Dashboard_content__setup__script($scope);
};
const $Dashboard_content__tally = _var_resume("__tests__/template.marko_2_tally/var", /*@__PURE__*/ _const_persisted("tally", ($scope) => _text($scope["#text/5"], $scope.tally)));
const $Dashboard_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0, _w1) => `<h2 class=greeting> </h2>${_w0}<!><button class=bump>tally <!></button>${_w1}<!><ul class=metrics></ul><!><!>`)("", $template$2), /*@__PURE__*/ ((_w0, _w1) => `D l0${_w0}&%b Db%l/${_w1}&%b b%c`)("", $walks$2), $Dashboard_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $Home__OR__Dashboard = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope.Dashboard : $scope.Home));
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
