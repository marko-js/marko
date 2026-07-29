// tags/stage.marko.persisted.mjs
const $template$2 = "<section class=stage><h2 class=headline><!> on stage</h2><!></section>";
const $walks$2 = "E%l%l";
const $setup$2 = () => {};
const $input_performers_length = ($scope, input_performers_length) => _text($scope["#text/0"], input_performers_length);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_performers__OR__input_view = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag$1($scope, $scope.input_view, () => ({ performers: $scope.input_performers })));
const $input_performers$1 = /*@__PURE__*/ _const_persisted("input_performers", ($scope) => {
	$input_performers_length($scope, $scope.input_performers?.length);
	$input_performers__OR__input_view($scope);
});
const $input_view$1 = /*@__PURE__*/ _const_persisted("input_view", $input_performers__OR__input_view);
const $input$2 = ($scope, input) => {
	$input_performers$1($scope, input.performers);
	$input_view$1($scope, input.view);
};
var stage_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/stage.marko", $template$2, $walks$2, $setup$2, $input$2);
_static_shells({
	"__tests__/tags/stage.marko_0_update": [$template$2, $walks$2],
	"__tests__/tags/stage.marko": [$template$2, $walks$2]
});
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $update2$2 = ($patch, $live) => {
	if ("input_performers" in $patch) $live["input_performers"] = $patch["input_performers"];
	if ("input_view" in $patch) $live["input_view"] = $patch["input_view"];
	$_holes$1($patch, $live);
	if ("ConditionalRenderer:#text/1" in $patch || "BranchScopes:#text/1" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1");
};
const $merge$2 = _resume("__tests__/tags/stage.marko_0_update", $update2$2);
_update_content("__tests__/tags/stage.marko", $merge$2);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
}

// tags/ticker.marko.persisted.mjs
const $template$1 = "<button class=mark>mark <!></button><ol class=ticker></ol>";
const $walks$1 = " Db%l b";
const $for_content__entry = ($scope, entry) => _text($scope["#text/0"], entry);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $marks = _var_resume("__tests__/tags/ticker.marko_0_marks/var", /*@__PURE__*/ _let_persisted("marks/6", ($scope) => _text($scope["#text/1"], $scope.marks)));
const $setup__script$1 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$marks($scope, $scope.marks + 1);
}));
function $setup$1($scope) {
	$marks($scope, 0);
	$setup__script$1($scope);
}
const $for = 0;
const $input_entries$1 = ($scope, input_entries) => {
	if (!updating) $for($scope, [input_entries, function(entry) {
		return entry;
	}]);
};
const $input$1 = ($scope, input) => $input_entries$1($scope, input.entries);
var ticker_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/ticker.marko", $template$1, $walks$1, $setup$1, $input$1);
_static_shells({
	"__tests__/tags/ticker.marko_0_update": [$template$1, $walks$1],
	"__tests__/tags/ticker.marko": [$template$1, $walks$1]
});
const $marks_seed = _update_signal("__tests__/tags/ticker.marko_0_marks/var");
const $construct$1 = ($scope) => {
	_text($scope["#text/1"], $scope.marks);
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("marks" in $patch) _update_seed($live, $marks_seed, $patch["marks"]);
	if ("ConditionalRenderer:#ol/2" in $patch) _update_region("#ol/2")($patch, $live);
};
_construct("__tests__/tags/ticker.marko_0_update", $construct$1);
const $noop_update = () => {};
_update_content("__tests__/tags/ticker.marko_1_update", $noop_update);
const $merge$1 = _resume("__tests__/tags/ticker.marko_0_update", $update2$1);
_update_content("__tests__/tags/ticker.marko", $merge$1, $construct$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button><h1> </h1>${_w0}<!><!><!>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%lD l/${_w0}&%b%c`)($walks$2);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/13", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/3"]);
	$input_view$1($scope["#childScope/3"], lineup_default);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $input_performers = ($scope, input_performers) => $input_performers$1($scope["#childScope/3"], input_performers);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/5");
const $input_view__OR__input_entries = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.input_view === "ticker" ? ticker_default : "div", () => ({ entries: $scope.input_entries })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__input_entries);
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $input_view__OR__input_entries);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_performers($scope, input.performers);
	$input_view($scope, input.view);
	$input_entries($scope, input.entries);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/3", "__tests__/tags/stage.marko_0_update");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_view" in $patch) $live["input_view"] = $patch["input_view"];
	if ("input_entries" in $patch) $live["input_entries"] = $patch["input_entries"];
	$_holes($patch, $live);
	if ("#childScope/3" in $patch) $merge$2($patch["#childScope/3"], $live["#childScope/3"]);
	if ("ConditionalRenderer:#text/5" in $patch || "BranchScopes:#text/5" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/5", "BranchScopes:#text/5");
};
_construct("__tests__/template.marko_0_update", $construct);
_update_loader("__tests__/tags/lineup.marko", () => import("./lineup.marko.persisted.mjs"));
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/lineup.marko
const $template$1 = "<button class=pin>pin <!></button><ol class=lineup></ol>";
const $walks$1 = " Db%l b";
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params$1 = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $pinned = /*@__PURE__*/ _let_persisted("pinned/6", ($scope) => _text($scope["#text/1"], $scope.pinned));
const $setup__script$1 = _script_update("__tests__/tags/lineup.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$pinned($scope, $scope.pinned + 1);
}));
function $setup$1($scope) {
	$pinned($scope, 0);
	$setup__script$1($scope);
}
const $for$1 = /*@__PURE__*/ _for_of("#ol/2", "<li> </li>", "D ", 0, $for_content__$params$1);
const $input_performers = ($scope, input_performers) => {
	if (!updating) $for$1($scope, [input_performers, function(name) {
		return name;
	}]);
};
const $input$1 = ($scope, input) => $input_performers($scope, input.performers);
var lineup_default = /*@__PURE__*/ _template("__tests__/tags/lineup.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/ticker.marko
const $template = "<button class=mark>mark <!></button><ol class=ticker></ol>";
const $walks = " Db%l b";
const $for_content__entry = ($scope, entry) => _text($scope["#text/0"], entry);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $marks = /*@__PURE__*/ _let_persisted("marks/6", ($scope) => _text($scope["#text/1"], $scope.marks));
const $setup__script = _script_update("__tests__/tags/ticker.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$marks($scope, $scope.marks + 1);
}));
function $setup($scope) {
	$marks($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ol/2", "<li> </li>", "D ", 0, $for_content__$params);
const $input_entries = ($scope, input_entries) => {
	if (!updating) $for($scope, [input_entries, function(entry) {
		return entry;
	}]);
};
const $input = ($scope, input) => $input_entries($scope, input.entries);
var ticker_default = /*@__PURE__*/ _template("__tests__/tags/ticker.marko", $template, $walks, $setup, $input);

// tags/lineup.marko.persisted.mjs
const $template = "<button class=pin>pin <!></button><ol class=lineup></ol>";
const $walks = " Db%l b";
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $pinned = _var_resume("__tests__/tags/lineup.marko_0_pinned/var", /*@__PURE__*/ _let_persisted("pinned/6", ($scope) => _text($scope["#text/1"], $scope.pinned)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$pinned($scope, $scope.pinned + 1);
}));
function $setup($scope) {
	$pinned($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_performers = ($scope, input_performers) => {
	if (!updating) $for($scope, [input_performers, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_performers($scope, input.performers);
var lineup_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/lineup.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/tags/lineup.marko_0_update": [$template, $walks],
	"__tests__/tags/lineup.marko": [$template, $walks]
});
const $pinned_seed = _update_signal("__tests__/tags/lineup.marko_0_pinned/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.pinned);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("pinned" in $patch) _update_seed($live, $pinned_seed, $patch["pinned"]);
	if ("ConditionalRenderer:#ol/2" in $patch) _update_region("#ol/2")($patch, $live);
};
_construct("__tests__/tags/lineup.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/tags/lineup.marko_1_update", $noop_update);
const $merge = _resume("__tests__/tags/lineup.marko_0_update", $update2);
_update_content("__tests__/tags/lineup.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/stage.marko
const $template$1 = "<section class=stage><h2 class=headline><!> on stage</h2><!></section>";
const $walks$1 = "E%l%l";
const $setup$1 = () => {};
const $input_performers_length = ($scope, input_performers_length) => _text($scope["#text/0"], input_performers_length);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_performers__OR__input_view = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag$1($scope, $scope.input_view, () => ({ performers: $scope.input_performers })));
const $input_performers$1 = /*@__PURE__*/ _const_persisted("input_performers", ($scope) => {
	$input_performers_length($scope, $scope.input_performers?.length);
	$input_performers__OR__input_view($scope);
});
const $input_view$1 = /*@__PURE__*/ _const_persisted("input_view", $input_performers__OR__input_view);
const $input$1 = ($scope, input) => {
	$input_performers$1($scope, input.performers);
	$input_view$1($scope, input.view);
};
var stage_default = /*@__PURE__*/ _template("__tests__/tags/stage.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button><h1> </h1>${_w0}<!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%lD l/${_w0}&%b%c`)($walks$1);
const $count = /*@__PURE__*/ _let_persisted("count/13", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/3"]);
	$input_view$1($scope["#childScope/3"], lineup_default);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $input_performers = ($scope, input_performers) => $input_performers$1($scope["#childScope/3"], input_performers);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/5");
const $input_view__OR__input_entries = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.input_view === "ticker" ? ticker_default : "div", () => ({ entries: $scope.input_entries })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__input_entries);
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $input_view__OR__input_entries);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_performers($scope, input.performers);
	$input_view($scope, input.view);
	$input_entries($scope, input.entries);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
