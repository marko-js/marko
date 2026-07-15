// template.marko.update.mjs
const $taps_seed = _update_signal("__tests__/template.marko_3_taps/var");
const $clicks_seed = _update_signal("__tests__/template.marko_0_clicks/var");
const $await_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("taps" in _patch) _update_seed(_live, $taps_seed, _patch["taps"]);
	_update_scope(_patch, _live);
};
const $try_content__update = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) _update_branch(_patch, _live, "#text/0", $await_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("clicks" in _patch) _update_seed(_live, $clicks_seed, _patch["clicks"]);
	if ("input_note" in _patch) _live["input_note"] = _patch["input_note"];
	if ("input_tick" in _patch) _live["input_tick"] = _patch["input_tick"];
	if ("BranchScopes:#text/2" in _patch) _update_branch(_patch, _live, "#text/2", $try_content__update);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<button class=clicks>clicked <!></button><section><!></section>";
const $walks = " Db%lD%l";
_enable_catch();
const $await_content__taps = /*@__PURE__*/ _let_persisted("taps/5", ($scope) => _text($scope["#text/2"], $scope.taps));
const $await_content__setup__script = _script_update("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__taps($scope, $scope.taps + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__taps($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content__note = ($scope, note) => _text($scope["#text/1"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button class=taps><!> tapped <!></button>", " D%c%l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._.input_note, $scope._.input_tick));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_note($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
});
const $clicks = /*@__PURE__*/ _let_persisted("clicks/7", ($scope) => _text($scope["#text/1"], $scope.clicks));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, $scope.clicks + 1);
}));
function $setup($scope) {
	$clicks($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
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
