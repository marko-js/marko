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
const $marks_seed = _update_signal("__tests__/tags/ticker.marko_0_marks/var");
const $construct$1 = ($scope) => {
	_text($scope["#text/1"], $scope.marks);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("marks" in $patch) _update_seed($live, $marks_seed, $patch["marks"]);
	if ("ConditionalRenderer:#ol/2" in $patch) _update_region("#ol/2")($patch, $live);
};
_construct("__tests__/tags/ticker.marko_0_update", $construct$1);
const $merge$1 = _resume("__tests__/tags/ticker.marko_0_update", $update2$1);
_update_content("__tests__/tags/ticker.marko", $merge$1, $construct$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><h1> </h1><!><!>";
const $walks = " Db%lD l%c";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_view__OR__input_entries = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_view === "ticker" ? ticker_default : "div", () => ({ entries: $scope.input_entries })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__input_entries);
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $input_view__OR__input_entries);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_view($scope, input.view);
	$input_entries($scope, input.entries);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_view" in $patch) $live["input_view"] = $patch["input_view"];
	if ("input_entries" in $patch) $live["input_entries"] = $patch["input_entries"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch || "BranchScopes:#text/3" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3");
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><h1> </h1><!><!>";
const $walks = " Db%lD l%c";
const $count = /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_view__OR__input_entries = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_view === "ticker" ? ticker_default : "div", () => ({ entries: $scope.input_entries })));
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_view__OR__input_entries);
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $input_view__OR__input_entries);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_view($scope, input.view);
	$input_entries($scope, input.entries);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

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
const $for = /*@__PURE__*/ _for_of("#ol/2", "<li> </li>", "D l", 0, $for_content__$params);
const $input_entries = ($scope, input_entries) => {
	if (!updating) $for($scope, [input_entries, function(entry) {
		return entry;
	}]);
};
const $input = ($scope, input) => $input_entries($scope, input.entries);
var ticker_default = /*@__PURE__*/ _template("__tests__/tags/ticker.marko", $template, $walks, $setup, $input);
