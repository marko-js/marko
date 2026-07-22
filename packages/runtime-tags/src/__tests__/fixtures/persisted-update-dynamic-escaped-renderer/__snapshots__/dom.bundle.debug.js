// tags/stage.marko.persisted.mjs
const $template$1 = "<section class=stage><h2 class=headline><!> on stage</h2><!></section>";
const $walks$1 = "E%l%l";
const $setup$1 = () => {};
const $input_performers_length = ($scope, input_performers_length) => _text($scope["#text/0"], input_performers_length);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_performers__OR__input_view = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_view, () => ({ performers: $scope.input_performers })));
const $input_performers$1 = /*@__PURE__*/ _const_persisted("input_performers", ($scope) => {
	$input_performers_length($scope, $scope.input_performers?.length);
	$input_performers__OR__input_view($scope);
});
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_performers__OR__input_view);
const $input$1 = ($scope, input) => {
	$input_performers$1($scope, input.performers);
	$input_view($scope, input.view);
};
var stage_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/stage.marko", $template$1, $walks$1, $setup$1, $input$1);
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $update2$1 = ($patch, $live) => {
	if ("input_performers" in $patch) $live["input_performers"] = $patch["input_performers"];
	if ("input_view" in $patch) $live["input_view"] = $patch["input_view"];
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/1" in $patch || "BranchScopes:#text/1" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1");
};
const $merge$1 = _resume("__tests__/tags/stage.marko_0_update", $update2$1);
_update_content("__tests__/tags/stage.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
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
	$input_view($scope["#childScope/2"], lineup_default);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_performers = ($scope, input_performers) => $input_performers$1($scope["#childScope/2"], input_performers);
const $input = ($scope, input) => $input_performers($scope, input.performers);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_update_loader("__tests__/tags/lineup.marko", () => import("./lineup.marko.persisted.mjs"));
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/lineup.marko.persisted.mjs
const $template = "<ol class=lineup></ol>";
const $walks = " b";
const $setup = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = 0;
const $input_performers = ($scope, input_performers) => {
	if (!updating) $for($scope, [input_performers, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_performers($scope, input.performers);
var lineup_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/lineup.marko", $template, " b", $setup, $input);
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $for_update = _update_for_keyed("#ol/0", ($p, $l) => $for_content_holes($p, $l), "__tests__/tags/lineup.marko_1_update");
const $update2 = ($patch, $live) => {
	if ("BranchScopes:#ol/0" in $patch) $for_update($live, [$patch["BranchScopes:#ol/0"], "#LoopKey"]);
};
const $merge = _resume("__tests__/tags/lineup.marko_0_update", $update2);
_update_content("__tests__/tags/lineup.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/lineup.marko
const $template = "<ol class=lineup></ol>";
const $walks = " b";
const $setup = () => {};
const $for_content__name = ($scope, name) => _text($scope["#text/0"], name);
const $for_content__$params = ($scope, $params2) => $for_content__name($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ol/0", "<li> </li>", "D l", 0, $for_content__$params);
const $input_performers = ($scope, input_performers) => {
	if (!updating) $for($scope, [input_performers, function(name) {
		return name;
	}]);
};
const $input = ($scope, input) => $input_performers($scope, input.performers);
var lineup_default = /*@__PURE__*/ _template("__tests__/tags/lineup.marko", $template, " b", $setup, $input);

// tags/stage.marko
const $template$1 = "<section class=stage><h2 class=headline><!> on stage</h2><!></section>";
const $walks$1 = "E%l%l";
const $setup$1 = () => {};
const $input_performers_length = ($scope, input_performers_length) => _text($scope["#text/0"], input_performers_length);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_performers__OR__input_view = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_view, () => ({ performers: $scope.input_performers })));
const $input_performers$1 = /*@__PURE__*/ _const_persisted("input_performers", ($scope) => {
	$input_performers_length($scope, $scope.input_performers?.length);
	$input_performers__OR__input_view($scope);
});
const $input_view = /*@__PURE__*/ _const_persisted("input_view", $input_performers__OR__input_view);
const $input$1 = ($scope, input) => {
	$input_performers$1($scope, input.performers);
	$input_view($scope, input.view);
};
var stage_default = /*@__PURE__*/ _template("__tests__/tags/stage.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$1);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_view($scope["#childScope/2"], lineup_default);
	$count($scope, 0);
	$setup__script($scope);
}
const $input_performers = ($scope, input_performers) => $input_performers$1($scope["#childScope/2"], input_performers);
const $input = ($scope, input) => $input_performers($scope, input.performers);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
