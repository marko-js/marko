// tags/board.marko.persisted.mjs
const $template$1 = "<section class=board><h2 class=tally><!> aboard</h2><!></section>";
const $walks$1 = "E%l%l";
const $setup$1 = () => {};
const $input_crew_length = ($scope, input_crew_length) => _text($scope["#text/0"], input_crew_length);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_crew__OR__input_view = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_view, () => ({ crew: $scope.input_crew })));
const $input_crew$1 = /*@__PURE__*/ _const_persisted("input_crew", ($scope) => {
	$input_crew_length($scope, $scope.input_crew?.length);
	$input_crew__OR__input_view($scope);
});
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_crew__OR__input_view);
const $input$1 = ($scope, input) => {
	$input_crew$1($scope, input.crew);
	$input_view($scope, input.view);
};
var board_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/board.marko", $template$1, $walks$1, $setup$1, $input$1);
_static_shells({
	"__tests__/tags/board.marko_0_update": [$template$1, $walks$1],
	"__tests__/tags/board.marko": [$template$1, $walks$1]
});
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $update2$1 = ($patch, $live) => {
	if ("input_crew" in $patch) $live["input_crew"] = $patch["input_crew"];
	if ("input_view" in $patch) $live["input_view"] = $patch["input_view"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/1" in $patch || "BranchScopes:#text/1" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1");
};
const $merge$1 = _resume("__tests__/tags/board.marko_0_update", $update2$1);
_update_content("__tests__/tags/board.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_view($scope["#childScope/2"], roster_default);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_crew = ($scope, input_crew) => $input_crew$1($scope["#childScope/2"], input_crew);
const $input = ($scope, input) => $input_crew($scope, input.crew);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/2", "__tests__/tags/board.marko_0_update");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_construct("__tests__/template.marko_0_update", $construct);
_update_loader("__tests__/tags/roster.marko", () => import("./roster.marko.persisted.mjs"));
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/roster.marko
const $template = "<button class=pin>pin <!></button><ul class=crew></ul>";
const $walks = " Db%l b";
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $pinned = /*@__PURE__*/ _let_persisted("pinned/6", ($scope) => _text($scope["#text/1"], $scope.pinned));
const $setup__script = _script_update("__tests__/tags/roster.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$pinned($scope, $scope.pinned + 1);
}));
function $setup($scope) {
	$pinned($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li> </li>", "D ", 0, $for_content__$params);
const $input_crew = ($scope, input_crew) => {
	if (!updating) $for($scope, [input_crew, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_crew($scope, input.crew);
var roster_default = /*@__PURE__*/ _template("__tests__/tags/roster.marko", $template, $walks, $setup, $input);

// tags/roster.marko.persisted.mjs
const $template = "<button class=pin>pin <!></button><ul class=crew></ul>";
const $walks = " Db%l b";
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $pinned = _var_resume("__tests__/tags/roster.marko_0_pinned/var", /*@__PURE__*/ _let_persisted("pinned/6", ($scope) => _text($scope["#text/1"], $scope.pinned)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$pinned($scope, $scope.pinned + 1);
}));
function $setup($scope) {
	$pinned($scope, 0);
	$setup__script($scope);
}
const $for = 0;
const $input_crew = ($scope, input_crew) => {
	if (!updating) $for($scope, [input_crew, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_crew($scope, input.crew);
var roster_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/roster.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/tags/roster.marko_0_update": [$template, $walks],
	"__tests__/tags/roster.marko": [$template, $walks]
});
const $pinned_seed = _update_signal("__tests__/tags/roster.marko_0_pinned/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.pinned);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("pinned" in $patch) _update_seed($live, $pinned_seed, $patch["pinned"]);
	if ("ConditionalRenderer:#ul/2" in $patch) _update_region("#ul/2")($patch, $live);
};
_construct("__tests__/tags/roster.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/tags/roster.marko_1_update", $noop_update);
const $merge = _resume("__tests__/tags/roster.marko_0_update", $update2);
_update_content("__tests__/tags/roster.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/board.marko
const $template$1 = "<section class=board><h2 class=tally><!> aboard</h2><!></section>";
const $walks$1 = "E%l%l";
const $setup$1 = () => {};
const $input_crew_length = ($scope, input_crew_length) => _text($scope["#text/0"], input_crew_length);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_crew__OR__input_view = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_view, () => ({ crew: $scope.input_crew })));
const $input_crew$1 = /*@__PURE__*/ _const_persisted("input_crew", ($scope) => {
	$input_crew_length($scope, $scope.input_crew?.length);
	$input_crew__OR__input_view($scope);
});
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_crew__OR__input_view);
const $input$1 = ($scope, input) => {
	$input_crew$1($scope, input.crew);
	$input_view($scope, input.view);
};
var board_default = /*@__PURE__*/ _template("__tests__/tags/board.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_view($scope["#childScope/2"], roster_default);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_crew = ($scope, input_crew) => $input_crew$1($scope["#childScope/2"], input_crew);
const $input = ($scope, input) => $input_crew($scope, input.crew);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
