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
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $update2$1 = (_patch, _live) => {
	if ("input_crew" in _patch) _live["input_crew"] = _patch["input_crew"];
	if ("input_view" in _patch) _live["input_view"] = _patch["input_view"];
	$_holes(_patch, _live);
	if ("ConditionalRenderer:#text/1" in _patch || "BranchScopes:#text/1" in _patch) _update_dynamic(_patch, _live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1");
};
const _merge$1 = _resume("__tests__/tags/board.marko_0_update", $update2$1);
_update_content("__tests__/tags/board.marko", _merge$1);
function _patch2$1(_fail) {
	return patch(_merge$1, _fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
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
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
_update_loader("__tests__/tags/roster.marko", () => import("./roster.marko.persisted.mjs"));
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/roster.marko.persisted.mjs
const $template = "<ul class=crew></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = 0;
const $input_crew = ($scope, input_crew) => {
	if (!updating) $for($scope, [input_crew, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_crew($scope, input.crew);
var roster_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/roster.marko", $template, " b", $setup, $input);
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => $for_content_holes($p, $l));
const $update2 = (_patch, _live) => {
	if ("BranchScopes:#ul/0" in _patch) $for_update(_live, [_patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const _merge = _resume("__tests__/tags/roster.marko_0_update", $update2);
_update_content("__tests__/tags/roster.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/roster.marko
const $template = "<ul class=crew></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D l", 0, $for_content__$params);
const $input_crew = ($scope, input_crew) => {
	if (!updating) $for($scope, [input_crew, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_crew($scope, input.crew);
var roster_default = /*@__PURE__*/ _template("__tests__/tags/roster.marko", $template, " b", $setup, $input);

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
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
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
