// tags/layout.marko.update.mjs
const $update$2 = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch || "BranchScopes:#text/0" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const _merge$2 = _resume("__tests__/tags/layout.marko_0_update", $update$2);
function createPatch$2() {
	return createPatch$3(_merge$2);
}

// tags/frame.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("ConditionalRenderer:#text/0" in patch || "BranchScopes:#text/0" in patch) _update_dynamic(patch, live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const _merge$1 = _resume("__tests__/tags/frame.marko_0_update", $update$1);
function createPatch$1() {
	return createPatch$3(_merge$1);
}

// template.marko.update.mjs
const $tally_seed = _update_signal("__tests__/template.marko_3_tally/var");
const $count_seed = _update_signal("__tests__/template.marko_2_count/var");
const $Dashboard_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("tally" in patch) _update_seed(live, $tally_seed, patch["tally"]);
	_update_scope(patch, live);
};
const $frame_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("#childScope/2" in patch) _merge$2(patch["#childScope/2"], live["#childScope/2"]);
};
const $update = (patch, live) => {
	if ("#childScope/0" in patch) _merge$1(patch["#childScope/0"], live["#childScope/0"]);
};
_update_content("__tests__/template.marko_3_content", $Dashboard_content__update);
_update_content("__tests__/template.marko_2_content", $frame_content__update);
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$3(_merge);
}

// tags/layout.marko
const $template$2 = "<aside class=rail>rail</aside><main class=page><!></main>";
const $walks$2 = "bD%l";
const $setup$2 = () => {};
const $input_content_direct$1 = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
enableBranchesPersisted();
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/frame.marko
const $template$1 = "<section class=frame><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
enableBranchesPersisted();
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $Dashboard_content__tally = /*@__PURE__*/ _let_persisted("tally/3", ($scope) => _text($scope["#text/1"], $scope.tally));
const $Dashboard_content__setup__script = _script_update("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$Dashboard_content__tally($scope, $scope.tally + 1);
}));
const $Dashboard_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope.$global.user);
	$Dashboard_content__tally($scope, 0);
	$Dashboard_content__setup__script($scope);
};
const $Dashboard_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<button class=bump>tally <!></button><p class=greeting>hello <!></p>", " Db%lDb%l", $Dashboard_content__setup);
const $frame_content__Home__OR__Dashboard = /*@__PURE__*/ _or(4, ($scope) => $input_content$1($scope["#childScope/2"], $scope.$global.view === "dashboard" ? $scope._.Dashboard : $scope._.Home));
const $frame_content__Home = /*@__PURE__*/ _closure_get("Home", ($scope) => {
	if (!updating) $frame_content__Home__OR__Dashboard($scope);
});
const $frame_content__count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $frame_content__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$frame_content__count($scope, $scope.count + 1);
}));
const $frame_content__setup = ($scope) => {
	if (!updating) $frame_content__Home($scope);
	if (!updating) $frame_content__Dashboard($scope);
	/* @__PURE__ */ $setup$2($scope["#childScope/2"]);
	$frame_content__count($scope, 0);
	$frame_content__setup__script($scope);
};
const $frame_content__Dashboard = /*@__PURE__*/ _closure_get("Dashboard", ($scope) => {
	if (!updating) $frame_content__Home__OR__Dashboard($scope);
});
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)($walks$2), $frame_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>", "b");
const $Home = /*@__PURE__*/ _const_persisted("Home");
const $Dashboard = /*@__PURE__*/ _const_persisted("Dashboard");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Dashboard($scope, { content: $Dashboard_content($scope) });
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
