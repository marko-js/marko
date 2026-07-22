// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><input class=sku><select class=ship><option value=ground>ground</option><option value=air>air</option><option value=sea>sea</option></select><!><!>";
const $walks = " Db%l b b%c";
_enable_catch();
const $await_content__eta = ($scope, eta) => _text($scope["#text/0"], eta);
const $await_content__$params = ($scope, $params2) => $await_content__eta($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=eta> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_eta__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._.input_eta, $scope._.input_tick));
});
const $try_content__input_eta = /*@__PURE__*/ _closure_get("input_eta", ($scope) => {
	if (!updating) $try_content__input_eta__OR__input_tick($scope);
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_eta($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", ($scope) => {
	if (!updating) $try_content__input_eta__OR__input_tick($scope);
});
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/1"], $scope.count)));
const $try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_sku = /*@__PURE__*/ _const_persisted("input_sku", ($scope) => _attr_input_value_default($scope, "#input/2", $scope.input_sku));
const $input_ship = /*@__PURE__*/ _const_persisted("input_ship", ($scope) => _attr_select_value_default($scope, "#select/3", $scope.input_ship));
const $input = ($scope, input) => {
	$input_sku($scope, input.sku);
	$input_ship($scope, input.ship);
	$input_eta($scope, input.eta);
	$input_tick($scope, input.tick);
};
const $input_eta__closure = /*@__PURE__*/ _closure($try_content__input_eta);
const $input_eta = /*@__PURE__*/ _const_persisted("input_eta", $input_eta__closure);
const $input_tick__closure = /*@__PURE__*/ _closure($try_content__input_tick);
const $input_tick = /*@__PURE__*/ _const_persisted("input_tick", $input_tick__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:value:#input/2": /*@__PURE__*/ _update_controllable("#input/2", _update_input_value),
	"PatchAttr:value:#select/3": /*@__PURE__*/ _update_controllable("#select/3", _update_select_value)
});
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_3_update");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_eta" in $patch) $live["input_eta"] = $patch["input_eta"];
	if ("input_tick" in $patch) $live["input_tick"] = $patch["input_tick"];
	$_holes($patch, $live);
	if ("BranchScopes:#text/4" in $patch) _update_branch($patch, $live, "#text/4", $try_content__update, "__tests__/template.marko_1_update", "__tests__/template.marko_2_content");
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><input class=sku><select class=ship><option value=ground>ground</option><option value=air>air</option><option value=sea>sea</option></select><!><!>";
const $walks = " Db%l b b%c";
_enable_catch();
const $await_content__eta = ($scope, eta) => _text($scope["#text/0"], eta);
const $await_content__$params = ($scope, $params2) => $await_content__eta($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=eta> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_eta__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._.input_eta, $scope._.input_tick));
});
const $try_content__input_eta = /*@__PURE__*/ _closure_get("input_eta", ($scope) => {
	if (!updating) $try_content__input_eta__OR__input_tick($scope);
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_eta($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", ($scope) => {
	if (!updating) $try_content__input_eta__OR__input_tick($scope);
});
const $count = /*@__PURE__*/ _let_persisted("count/11", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_sku = /*@__PURE__*/ _const_persisted("input_sku", ($scope) => _attr_input_value_default($scope, "#input/2", $scope.input_sku));
const $input_ship = /*@__PURE__*/ _const_persisted("input_ship", ($scope) => _attr_select_value_default($scope, "#select/3", $scope.input_ship));
const $input = ($scope, input) => {
	$input_sku($scope, input.sku);
	$input_ship($scope, input.ship);
	$input_eta($scope, input.eta);
	$input_tick($scope, input.tick);
};
const $input_eta__closure = /*@__PURE__*/ _closure($try_content__input_eta);
const $input_eta = /*@__PURE__*/ _const_persisted("input_eta", $input_eta__closure);
const $input_tick__closure = /*@__PURE__*/ _closure($try_content__input_tick);
const $input_tick = /*@__PURE__*/ _const_persisted("input_tick", $input_tick__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
