// tags/ticker.marko.persisted.mjs
const $template$2 = "<button class=mark>mark <!></button><ol class=ticker></ol>";
const $walks$2 = " Db%l b";
const $for_content__entry$1 = ($scope, entry) => _text($scope["#text/0"], entry);
const $for_content__$params$1 = ($scope, $params2) => $for_content__entry$1($scope, $params2[0]);
const $marks$1 = _var_resume("__tests__/tags/ticker.marko_0_marks/var", /*@__PURE__*/ _let_persisted("marks/6", ($scope) => _text($scope["#text/1"], $scope.marks)));
const $setup__script$2 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$marks$1($scope, $scope.marks + 1);
}));
function $setup$2($scope) {
	$marks$1($scope, 0);
	$setup__script$2($scope);
}
const $for$1 = 0;
const $input_entries$2 = ($scope, input_entries) => {
	if (!updating) $for$1($scope, [input_entries, function(entry) {
		return entry;
	}]);
};
const $input$2 = ($scope, input) => $input_entries$2($scope, input.entries);
var ticker_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/ticker.marko", $template$2, $walks$2, $setup$2, $input$2);
_static_shells({
	"__tests__/tags/ticker.marko_0_update": [$template$2, $walks$2],
	"__tests__/tags/ticker.marko": [$template$2, $walks$2]
});
const $marks_seed$1 = _update_signal("__tests__/tags/ticker.marko_0_marks/var");
const $construct$2 = ($scope) => {
	_text($scope["#text/1"], $scope.marks);
	_construct_effect($scope, $setup__script$2);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("marks" in $patch) _update_seed($live, $marks_seed$1, $patch["marks"]);
	if ("ConditionalRenderer:#ol/2" in $patch) _update_region("#ol/2")($patch, $live);
};
_construct("__tests__/tags/ticker.marko_0_update", $construct$2);
const $noop_update$1 = () => {};
_update_content("__tests__/tags/ticker.marko_1_update", $noop_update$1);
const $merge$2 = _resume("__tests__/tags/ticker.marko_0_update", $update2$2);
_update_content("__tests__/tags/ticker.marko", $merge$2, $construct$2);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
}

// tags/ticker2.marko.persisted.mjs
const $template$1 = "<button class=mark>mark <!></button><ol class=ticker></ol>";
const $walks$1 = " Db%l b";
const $for_content__entry = ($scope, entry) => _text($scope["#text/0"], entry);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $marks = _var_resume("__tests__/tags/ticker2.marko_0_marks/var", /*@__PURE__*/ _let_persisted("marks/6", ($scope) => _text($scope["#text/1"], $scope.marks)));
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
var ticker2_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/ticker2.marko", $template$1, $walks$1, $setup$1, $input$1);
_static_shells({
	"__tests__/tags/ticker2.marko_0_update": [$template$1, $walks$1],
	"__tests__/tags/ticker2.marko": [$template$1, $walks$1]
});
const $marks_seed = _update_signal("__tests__/tags/ticker2.marko_0_marks/var");
const $construct$1 = ($scope) => {
	_text($scope["#text/1"], $scope.marks);
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("marks" in $patch) _update_seed($live, $marks_seed, $patch["marks"]);
	if ("ConditionalRenderer:#ol/2" in $patch) _update_region("#ol/2")($patch, $live);
};
_construct("__tests__/tags/ticker2.marko_0_update", $construct$1);
const $noop_update = () => {};
_update_content("__tests__/tags/ticker2.marko_1_update", $noop_update);
const $merge$1 = _resume("__tests__/tags/ticker2.marko_0_update", $update2$1);
_update_content("__tests__/tags/ticker2.marko", $merge$1, $construct$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><h1> </h1><!><!><!>";
const $walks = " Db%lD l%b%c";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/13", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_view__OR__input_entries = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_view === "ticker" ? ticker_default : "div", () => ({ entries: $scope.input_entries })));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_view__OR__input_entriesB = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag2($scope, $scope.input_view === "ticker" ? ticker2_default : "div", () => ({ entries: $scope.input_entriesB })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", ($scope) => {
	$input_view__OR__input_entries($scope);
	$input_view__OR__input_entriesB($scope);
});
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $input_view__OR__input_entries);
const $input_entriesB = /*@__PURE__*/ _const_persisted("input_entriesB", $input_view__OR__input_entriesB);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_view($scope, input.view);
	$input_entries($scope, input.entries);
	$input_entriesB($scope, input.entriesB);
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
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_view" in $patch) $live["input_view"] = $patch["input_view"];
	if ("input_entries" in $patch) $live["input_entries"] = $patch["input_entries"];
	if ("input_entriesB" in $patch) $live["input_entriesB"] = $patch["input_entriesB"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch || "BranchScopes:#text/3" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
	if ("ConditionalRenderer:#text/4" in $patch || "BranchScopes:#text/4" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/4", "BranchScopes:#text/4");
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><h1> </h1><!><!><!>";
const $walks = " Db%lD l%b%c";
const $count = /*@__PURE__*/ _let_persisted("count/13", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_view__OR__input_entries = /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.input_view === "ticker" ? ticker_default : "div", () => ({ entries: $scope.input_entries })));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_view__OR__input_entriesB = /*@__PURE__*/ _or(12, ($scope) => $dynamicTag2($scope, $scope.input_view === "ticker" ? ticker2_default : "div", () => ({ entries: $scope.input_entriesB })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", ($scope) => {
	$input_view__OR__input_entries($scope);
	$input_view__OR__input_entriesB($scope);
});
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $input_view__OR__input_entries);
const $input_entriesB = /*@__PURE__*/ _const_persisted("input_entriesB", $input_view__OR__input_entriesB);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_view($scope, input.view);
	$input_entries($scope, input.entries);
	$input_entriesB($scope, input.entriesB);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/ticker.marko
const $template$1 = "<button class=mark>mark <!></button><ol class=ticker></ol>";
const $walks$1 = " Db%l b";
const $for_content__entry$1 = ($scope, entry) => _text($scope["#text/0"], entry);
const $for_content__$params$1 = ($scope, $params2) => $for_content__entry$1($scope, $params2[0]);
const $marks$1 = /*@__PURE__*/ _let_persisted("marks/6", ($scope) => _text($scope["#text/1"], $scope.marks));
const $setup__script$1 = _script_update("__tests__/tags/ticker.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$marks$1($scope, $scope.marks + 1);
}));
function $setup$1($scope) {
	$marks$1($scope, 0);
	$setup__script$1($scope);
}
const $for$1 = /*@__PURE__*/ _for_of("#ol/2", "<li> </li>", "D ", 0, $for_content__$params$1);
const $input_entries$1 = ($scope, input_entries) => {
	if (!updating) $for$1($scope, [input_entries, function(entry) {
		return entry;
	}]);
};
const $input$1 = ($scope, input) => $input_entries$1($scope, input.entries);
var ticker_default = /*@__PURE__*/ _template("__tests__/tags/ticker.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/ticker2.marko
const $template = "<button class=mark>mark <!></button><ol class=ticker></ol>";
const $walks = " Db%l b";
const $for_content__entry = ($scope, entry) => _text($scope["#text/0"], entry);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $marks = /*@__PURE__*/ _let_persisted("marks/6", ($scope) => _text($scope["#text/1"], $scope.marks));
const $setup__script = _script_update("__tests__/tags/ticker2.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
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
var ticker2_default = /*@__PURE__*/ _template("__tests__/tags/ticker2.marko", $template, $walks, $setup, $input);
