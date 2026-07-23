// template.marko.persisted.mjs
const $template = "<h1><!> clicked <!></h1><main><!></main>";
const $walks = " D%c%lD%l";
_enable_catch();
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "fetching…", "b");
const $await_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope._._, $scope._._.n + 1);
}));
const $await_content__setup = $await_content__setup__script;
const $await_content__value = ($scope, value) => _text($scope["#text/1"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button> </button>", " D l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_value__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._.input_value, $scope._.input_tick));
});
const $try_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => {
	if (!updating) $try_content__input_value__OR__input_tick($scope);
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_value($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", ($scope) => {
	if (!updating) $try_content__input_value__OR__input_tick($scope);
});
const $n = _var_resume("__tests__/template.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/9", ($scope) => _text($scope["#text/2"], $scope.n)));
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#h1/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_heading = ($scope, input_heading) => _text($scope["#text/1"], input_heading);
const $input = ($scope, input) => {
	$input_heading($scope, input.heading);
	$input_value($scope, input.value);
	$input_tick($scope, input.tick);
};
const $input_value__closure = /*@__PURE__*/ _closure($try_content__input_value);
const $input_value = /*@__PURE__*/ _const_persisted("input_value", $input_value__closure);
const $input_tick__closure = /*@__PURE__*/ _closure($try_content__input_tick);
const $input_tick = /*@__PURE__*/ _const_persisted("input_tick", $input_tick__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $n_seed = _update_signal("__tests__/template.marko_0_n/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $await_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$await_content_holes($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_2_update");
};
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.n);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	if ("input_value" in $patch) $live["input_value"] = $patch["input_value"];
	if ("input_tick" in $patch) $live["input_tick"] = $patch["input_tick"];
	$_holes($patch, $live);
	if ("BranchScopes:#text/3" in $patch) _update_branch($patch, $live, "#text/3", $try_content__update, "__tests__/template.marko_1_update", "__tests__/template.marko_3_content");
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<h1><!> clicked <!></h1><main><!></main>";
const $walks = " D%c%lD%l";
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "fetching…", "b");
const $await_content__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope._._, $scope._._.n + 1);
}));
const $await_content__setup = $await_content__setup__script;
const $await_content__value = ($scope, value) => _text($scope["#text/1"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button> </button>", " D l", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_value__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._.input_value, $scope._.input_tick));
});
const $try_content__input_value = /*@__PURE__*/ _closure_get("input_value", ($scope) => {
	if (!updating) $try_content__input_value__OR__input_tick($scope);
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_value($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", ($scope) => {
	if (!updating) $try_content__input_value__OR__input_tick($scope);
});
const $n = /*@__PURE__*/ _let_persisted("n/9", ($scope) => _text($scope["#text/2"], $scope.n));
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%c", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#h1/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input_heading = ($scope, input_heading) => _text($scope["#text/1"], input_heading);
const $input = ($scope, input) => {
	$input_heading($scope, input.heading);
	$input_value($scope, input.value);
	$input_tick($scope, input.tick);
};
const $input_value__closure = /*@__PURE__*/ _closure($try_content__input_value);
const $input_value = /*@__PURE__*/ _const_persisted("input_value", $input_value__closure);
const $input_tick__closure = /*@__PURE__*/ _closure($try_content__input_tick);
const $input_tick = /*@__PURE__*/ _const_persisted("input_tick", $input_tick__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
