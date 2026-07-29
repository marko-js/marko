// template.marko.persisted.mjs
const $if_content__walks = "D%l", $if_content__template = "<section><!></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=note> </p>";
const $template = "<button class=toggle> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $await_content__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.input_note, $scope._._.input_tick));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get("input_note", $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_note($scope);
	$try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try("#text/0", $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup);
const $show = _var_resume("__tests__/template.marko_0_show/var", /*@__PURE__*/ _let_persisted("show/7", ($scope) => {
	_text($scope["#text/1"], $scope.show ? "hide" : "show");
	$if($scope, $scope.show ? 0 : 1);
}));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
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
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_4_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_4_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_2_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_2_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $show_seed = _update_signal("__tests__/template.marko_0_show/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/1")) });
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_4_update");
};
const $if_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_2_update", "__tests__/template.marko_3_content");
};
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
	if ("ConditionalRenderer:#text/2" in $scope) _update_if($scope, $scope, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update], ["__tests__/template.marko_1_update"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("show" in $patch) _update_seed($live, $show_seed, $patch["show"]);
	if ("input_note" in $patch) {
		$live["input_note"] = $patch["input_note"];
		_closure($try_content__input_note)($live);
	}
	if ("input_tick" in $patch) {
		$live["input_tick"] = $patch["input_tick"];
		_closure($try_content__input_tick)($live);
	}
	$_holes($patch, $live);
	if ("BranchScopes:#text/2" in $patch) _update_if_state($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update]);
};
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_4_update", $await_content_holes);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_content", $noop_update);
_update_content("__tests__/template.marko_2_update", $try_content__update);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=toggle> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $await_content__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=note> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.input_note, $scope._._.input_tick));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get("input_note", $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_note($scope);
	$try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get("input_tick", $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if("#text/2", "<section><!></section>", "D%", $if_content__setup);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
