// template.marko.persisted.mjs
const $if_content__walks = "D%b l", $if_content__template = "<section class=pane-a><!><ol class=rows-a></ol></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $else_content__walks = "D%b l", $else_content__template = "<section class=pane-b><!><ol class=rows-b></ol></section>", $try_content2__walks = "b%c", $try_content2__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=note-a> </p>", $await_content2__walks = "D l", $await_content2__template = "<p class=note-b> </p>";
const $template = "<button class=a>A</button><button class=b>B</button><!><!>";
const $walks = " b b%c";
_enable_catch();
const $for_content2__row_text = ($scope, row_text) => _text($scope["#text/0"], row_text);
const $for_content2__$params = ($scope, $params5) => $for_content2__row_text($scope, $params5[0]?.text);
const $await_content2__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content2__$params = ($scope, $params4) => $await_content2__note($scope, $params4[0]);
const $placeholder_content2 = /*@__PURE__*/ _content("__tests__/template.marko_8_content", "loading b");
const $for_content__row_text = ($scope, row_text) => _text($scope["#text/0"], row_text);
const $for_content__$params = ($scope, $params3) => $for_content__row_text($scope, $params3[0]?.text);
const $await_content__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_5_content", "loading a");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", $await_content2__template, $await_content2__walks);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__input_b = /*@__PURE__*/ _closure_get("input_b", ($scope) => {
	if (!updating) $try_content2__await_promise($scope, resolveAfter($scope._._.input_b, 1));
}, ($scope) => $scope._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_b($scope);
	$await_content2($scope);
};
const $else_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=row-b> </li>", "D ", 0, $for_content2__$params);
const $else_content__input_rowsB = /*@__PURE__*/ _if_closure("#text/2", 1, ($scope) => $else_content__for($scope, [$scope._.input_rowsB, (row) => row.id]));
const $else_content__try = /*@__PURE__*/ _try("#text/0", $try_content2__template, $try_content2__walks, $try_content2__setup);
const $else_content__setup = ($scope) => {
	$else_content__input_rowsB._($scope);
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get("input_a", ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.input_a, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=row-a> </li>", "D ", 0, $for_content__$params);
const $if_content__input_rowsA = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__for($scope, [$scope._.input_rowsA, (row) => row.id]));
const $if_content__try = /*@__PURE__*/ _try("#text/0", $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_rowsA._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup, $else_content__template, $else_content__walks, $else_content__setup);
const $tab = _var_resume("__tests__/template.marko_0_tab/var", /*@__PURE__*/ _let_persisted("tab/9", ($scope) => $if($scope, $scope.tab === 0 ? 0 : 1)));
const $setup__script = _script_shared(($scope) => {
	_on($scope["#button/0"], "click", function() {
		$tab($scope, 0);
	});
	_on($scope["#button/1"], "click", function() {
		$tab($scope, 1);
	});
});
function $setup($scope) {
	$tab($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_rowsA($scope, input.rowsA);
	$input_b($scope, input.b);
	$input_rowsB($scope, input.rowsB);
};
const $input_a__closure = /*@__PURE__*/ _closure($try_content__input_a);
const $input_a = /*@__PURE__*/ _const_persisted("input_a", $input_a__closure);
const $input_rowsA = /*@__PURE__*/ _const_persisted("input_rowsA", $if_content__input_rowsA);
const $input_b__closure = /*@__PURE__*/ _closure($try_content2__input_b);
const $input_b = /*@__PURE__*/ _const_persisted("input_b", $input_b__closure);
const $input_rowsB = /*@__PURE__*/ _const_persisted("input_rowsB", $else_content__input_rowsB);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_9_update": [$await_content2__template, $await_content2__walks],
	"__tests__/template.marko_9_content": [$await_content2__template, $await_content2__walks],
	"__tests__/template.marko_6_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_6_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_4_update": [$try_content2__template, $try_content2__walks],
	"__tests__/template.marko_4_content": [$try_content2__template, $try_content2__walks],
	"__tests__/template.marko_3_update": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_3_content": [$else_content__template, $else_content__walks],
	"__tests__/template.marko_2_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_2_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $tab_seed = _update_signal("__tests__/template.marko_0_tab/var");
const $try_content2__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content2_holes, "__tests__/template.marko_9_update");
};
const $else_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content2__update, "__tests__/template.marko_4_update", "__tests__/template.marko_8_content");
	if ("ConditionalRenderer:#ol/1" in $patch) _update_region("#ol/1")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_6_update");
};
const $if_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_2_update", "__tests__/template.marko_5_content");
	if ("ConditionalRenderer:#ol/1" in $patch) _update_region("#ol/1")($patch, $live);
};
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
	if ("ConditionalRenderer:#text/2" in $scope) _update_if($scope, $scope, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, $else_content__update], ["__tests__/template.marko_1_update", "__tests__/template.marko_3_update"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("tab" in $patch) _update_seed($live, $tab_seed, $patch["tab"]);
	if ("input_a" in $patch) {
		$live["input_a"] = $patch["input_a"];
		_closure($try_content__input_a)($live);
	}
	if ("input_rowsA" in $patch) {
		$live["input_rowsA"] = $patch["input_rowsA"];
		$if_content__input_rowsA($live);
	}
	if ("input_b" in $patch) {
		$live["input_b"] = $patch["input_b"];
		_closure($try_content2__input_b)($live);
	}
	if ("input_rowsB" in $patch) {
		$live["input_rowsB"] = $patch["input_rowsB"];
		$else_content__input_rowsB($live);
	}
	if ("BranchScopes:#text/2" in $patch) _update_if_state($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, $else_content__update]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_10_update", $noop_update);
_update_content("__tests__/template.marko_9_update", $await_content2_holes);
_update_content("__tests__/template.marko_8_content", $noop_update);
_update_content("__tests__/template.marko_7_update", $noop_update);
_update_content("__tests__/template.marko_6_update", $await_content_holes);
_update_content("__tests__/template.marko_5_content", $noop_update);
_update_content("__tests__/template.marko_4_update", $try_content2__update);
_update_content("__tests__/template.marko_3_update", $else_content__update);
_update_content("__tests__/template.marko_2_update", $try_content__update);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=a>A</button><button class=b>B</button><!><!>";
const $walks = " b b%c";
_enable_catch();
const $for_content2__row_text = ($scope, row_text) => _text($scope["#text/0"], row_text);
const $for_content2__$params = ($scope, $params5) => $for_content2__row_text($scope, $params5[0]?.text);
const $await_content2__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content2__$params = ($scope, $params4) => $await_content2__note($scope, $params4[0]);
const $placeholder_content2 = _content_resume("__tests__/template.marko_8_content", "loading b");
const $for_content__row_text = ($scope, row_text) => _text($scope["#text/0"], row_text);
const $for_content__$params = ($scope, $params3) => $for_content__row_text($scope, $params3[0]?.text);
const $await_content__note = ($scope, note) => _text($scope["#text/0"], note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_5_content", "loading a");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p class=note-b> </p>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__input_b = /*@__PURE__*/ _closure_get("input_b", ($scope) => {
	if (!updating) $try_content2__await_promise($scope, resolveAfter($scope._._.input_b, 1));
}, ($scope) => $scope._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_b($scope);
	$await_content2($scope);
};
const $else_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=row-b> </li>", "D ", 0, $for_content2__$params);
const $else_content__input_rowsB = /*@__PURE__*/ _if_closure("#text/2", 1, ($scope) => $else_content__for($scope, [$scope._.input_rowsB, (row) => row.id]));
const $else_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup);
const $else_content__setup = ($scope) => {
	$else_content__input_rowsB._($scope);
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=note-a> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get("input_a", ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.input_a, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=row-a> </li>", "D ", 0, $for_content__$params);
const $if_content__input_rowsA = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__for($scope, [$scope._.input_rowsA, (row) => row.id]));
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_rowsA._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if("#text/2", "<section class=pane-a><!><ol class=rows-a></ol></section>", "D%b ", $if_content__setup, "<section class=pane-b><!><ol class=rows-b></ol></section>", "D%b ", $else_content__setup);
const $tab = /*@__PURE__*/ _let_persisted("tab/9", ($scope) => $if($scope, $scope.tab === 0 ? 0 : 1));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$tab($scope, 0);
	});
	_on($scope["#button/1"], "click", function() {
		$tab($scope, 1);
	});
});
function $setup($scope) {
	$tab($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_rowsA($scope, input.rowsA);
	$input_b($scope, input.b);
	$input_rowsB($scope, input.rowsB);
};
const $input_a__closure = /*@__PURE__*/ _closure($try_content__input_a);
const $input_a = /*@__PURE__*/ _const_persisted("input_a", $input_a__closure);
const $input_rowsA = /*@__PURE__*/ _const_persisted("input_rowsA", $if_content__input_rowsA);
const $input_b__closure = /*@__PURE__*/ _closure($try_content2__input_b);
const $input_b = /*@__PURE__*/ _const_persisted("input_b", $input_b__closure);
const $input_rowsB = /*@__PURE__*/ _const_persisted("input_rowsB", $else_content__input_rowsB);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
