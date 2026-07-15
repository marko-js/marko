// template.marko.update.mjs
const $show_seed = _update_signal("__tests__/template.marko_0_show/var");
const $try_content__update = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) _update_branch(_patch, _live, "#text/0", _update_scope);
};
const $if_content__update = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) _update_branch(_patch, _live, "#text/0", $try_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("show" in _patch) _update_seed(_live, $show_seed, _patch["show"]);
	if ("input_note" in _patch) _live["input_note"] = _patch["input_note"];
	if ("input_tick" in _patch) _live["input_tick"] = _patch["input_tick"];
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<button class=toggle> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $await_content__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=note> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.input_note, $scope._._.input_tick));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_note($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
}, ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if("#text/2", "<section><!></section>", "D%l", $if_content__setup);
const $show = /*@__PURE__*/ _let_persisted("show/7", ($scope) => {
	_text($scope["#text/1"], $scope.show ? "hide" : "show");
	$if($scope, $scope.show ? 0 : 1);
});
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_tick($scope, input.tick);
};
const $input_note__closure = /*@__PURE__*/ _closure($try_content__input_note);
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $input_note__closure);
const $input_tick__closure = /*@__PURE__*/ _closure($try_content__input_tick);
const $input_tick = /*@__PURE__*/ _const_persisted("input_tick", $input_tick__closure);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
