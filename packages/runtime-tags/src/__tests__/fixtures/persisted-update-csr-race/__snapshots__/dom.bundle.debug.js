// template.marko.persisted.mjs
const $template = "<h1> </h1><button>clicked <!></button><section><!></section>";
const $walks = "D l Db%lD%l";
_enable_catch();
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "loading…", "b");
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count/pending");
const $await_content__setup = $await_content__count;
const $await_content__note = ($scope, note) => _text($scope["#text/1"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p>clicked <!> times -- <!></p>", "Db%c%l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_note, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_note($scope);
	$await_content($scope);
};
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__closure($scope);
}));
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($try_content__input_note);
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $input_note__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $try_content__update = (_patch, _live) => {
	if ("BranchScopes:#text/0" in _patch) _update_branch(_patch, _live, "#text/0", $await_content_holes);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	$_holes(_patch, _live);
	if ("BranchScopes:#text/3" in _patch) _update_branch(_patch, _live, "#text/3", $try_content__update);
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_content", $noop_update);
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// template.marko
const $template = "<h1> </h1><button>clicked <!></button><section><!></section>";
const $walks = "D l Db%lD%l";
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "loading…", "b");
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count/pending");
const $await_content__setup = $await_content__count;
const $await_content__note = ($scope, note) => _text($scope["#text/1"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p>clicked <!> times -- <!></p>", "Db%c%l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_note, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_note($scope);
	$await_content($scope);
};
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($try_content__input_note);
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
