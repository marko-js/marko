// template.marko.update.mjs
const $x_seed = _update_signal("__tests__/template.marko_0_x/var");
const $try_content__update = (patch, live) => {
	if ("BranchScopes:#text/0" in patch) _update_branch(patch, live, "#text/0", _update_scope);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("x" in patch) _update_seed(live, $x_seed, patch["x"]);
	if ("input_data" in patch) live["input_data"] = patch["input_data"];
	if ("input_tick" in patch) live["input_tick"] = patch["input_tick"];
	_update_scope(patch, live);
	if ("BranchScopes:#text/2" in patch) _update_branch(patch, live, "#text/2", $try_content__update);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// template.marko
const $template = "<h1> </h1><section><!></section>";
const $walks = " D lD%l";
_enable_catch();
const $await_content__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_data__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._.input_data, $scope._.input_tick));
});
const $try_content__input_data = /*@__PURE__*/ _closure_get("input_data", ($scope) => {
	if (!updating) $try_content__input_data__OR__input_tick($scope);
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_data($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", ($scope) => {
	if (!updating) $try_content__input_data__OR__input_tick($scope);
});
const $x = /*@__PURE__*/ _let_persisted("x/8");
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#h1/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_data($scope, input.data);
	$input_tick($scope, input.tick);
};
const $input_data__closure = /*@__PURE__*/ _closure($try_content__input_data);
const $input_data = /*@__PURE__*/ _const_persisted("input_data", $input_data__closure);
const $input_tick__closure = /*@__PURE__*/ _closure($try_content__input_tick);
const $input_tick = /*@__PURE__*/ _const_persisted("input_tick", $input_tick__closure);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
