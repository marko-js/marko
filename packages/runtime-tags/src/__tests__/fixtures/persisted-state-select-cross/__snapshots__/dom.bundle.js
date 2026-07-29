// template.marko.persisted.mjs
const $if_content__walks = "D%b l", $if_content__template = "<section class=pane-a><!><ol class=rows-a></ol></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $else_content__walks = "D%b l", $else_content__template = "<section class=pane-b><!><ol class=rows-b></ol></section>", $try_content2__walks = "b%c", $try_content2__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=note-a> </p>", $await_content2__walks = "D l", $await_content2__template = "<p class=note-b> </p>";
const $template = "<button class=a>A</button><button class=b>B</button><!><!>";
const $walks = " b b%c";
_enable_catch();
const $for_content2__row_text = ($scope, row_text) => _text($scope.a, row_text);
const $for_content2__$params = ($scope, $params5) => $for_content2__row_text($scope, $params5[0]?.text);
const $await_content2__note = ($scope, note) => _text($scope.a, note);
const $await_content2__$params = ($scope, $params4) => $await_content2__note($scope, $params4[0]);
const $placeholder_content2 = /*@__PURE__*/ _content("a9", "loading b");
const $for_content__row_text = ($scope, row_text) => _text($scope.a, row_text);
const $for_content__$params = ($scope, $params3) => $for_content__row_text($scope, $params3[0]?.text);
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("a4", "loading a");
const $await_content2 = /*@__PURE__*/ _await_content(0, $await_content2__template, $await_content2__walks);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $try_content2__input_b = /*@__PURE__*/ _closure_get(12, ($scope) => {
	if (!updating) $try_content2__await_promise($scope, resolveAfter($scope._._.h, 1));
}, ($scope) => $scope._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_b($scope);
	$await_content2($scope);
};
const $else_content__for = /*@__PURE__*/ _for_of(1, "<li class=row-b> </li>", "D ", 0, $for_content2__$params);
const $else_content__input_rowsB = /*@__PURE__*/ _if_closure(2, 1, ($scope) => $else_content__for($scope, [$scope._.i, (row) => row.id]));
const $else_content__try = /*@__PURE__*/ _try(0, $try_content2__template, $try_content2__walks, $try_content2__setup);
const $else_content__setup = ($scope) => {
	$else_content__input_rowsB._($scope);
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
};
const $await_content = /*@__PURE__*/ _await_content(0, $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get(10, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.f, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=row-a> </li>", "D ", 0, $for_content__$params);
const $if_content__input_rowsA = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__for($scope, [$scope._.g, (row) => row.id]));
const $if_content__try = /*@__PURE__*/ _try(0, $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_rowsA._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if(2, $if_content__template, $if_content__walks, $if_content__setup, $else_content__template, $else_content__walks, $else_content__setup);
const $tab = _var_resume("a20", /*@__PURE__*/ _let_persisted(9, ($scope) => $if($scope, $scope.j === 0 ? 0 : 1)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.a, "click", function() {
		$tab($scope, 0);
	});
	_on($scope.b, "click", function() {
		$tab($scope, 1);
	});
});
_static_shells({
	"a8": [$await_content2__template, $await_content2__walks],
	"a16": [$await_content2__template, $await_content2__walks],
	"a3": [$await_content__template, $await_content__walks],
	"a17": [$await_content__template, $await_content__walks],
	"a11": [$try_content2__template, $try_content2__walks],
	"a10": [$try_content2__template, $try_content2__walks],
	"a13": [$else_content__template, $else_content__walks],
	"a18": [$else_content__template, $else_content__walks],
	"a6": [$try_content__template, $try_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a14": [$if_content__template, $if_content__walks],
	"a19": [$if_content__template, $if_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $tab_seed = _update_signal("a20");
const $try_content2__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content2_holes, "a8");
};
const $else_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content2__update, "a11", "a9");
	if ("Db" in $patch) _update_region("b")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a3");
};
const $if_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a6", "a4");
	if ("Db" in $patch) _update_region("b")($patch, $live);
};
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
	if ("Dc" in $scope) _update_if($scope, $scope, "Dc", "Ac", [$if_content__update, $else_content__update], ["a14", "a13"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $tab_seed, $patch["j"]);
	if ("f" in $patch) {
		$live["f"] = $patch["f"];
		_closure($try_content__input_a)($live);
	}
	if ("g" in $patch) {
		$live["g"] = $patch["g"];
		$if_content__input_rowsA($live);
	}
	if ("h" in $patch) {
		$live["h"] = $patch["h"];
		_closure($try_content2__input_b)($live);
	}
	if ("i" in $patch) {
		$live["i"] = $patch["i"];
		$else_content__input_rowsB($live);
	}
	if ("Ac" in $patch) _update_if_state($patch, $live, "Dc", "Ac", [$if_content__update, $else_content__update]);
};
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a21", $noop_update);
_update_content("a8", $await_content2_holes);
_update_content("a9", $noop_update);
_update_content("a22", $noop_update);
_update_content("a3", $await_content_holes);
_update_content("a4", $noop_update);
_update_content("a11", $try_content2__update);
_update_content("a13", $else_content__update);
_update_content("a6", $try_content__update);
_update_content("a14", $if_content__update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $for_content2__row_text = ($scope, row_text) => _text($scope.a, row_text);
const $for_content2__$params = ($scope, $params5) => $for_content2__row_text($scope, $params5[0]?.text);
const $await_content2__note = ($scope, note) => _text($scope.a, note);
const $await_content2__$params = ($scope, $params4) => $await_content2__note($scope, $params4[0]);
const $placeholder_content2 = _content_resume("a9", "loading b");
const $for_content__row_text = ($scope, row_text) => _text($scope.a, row_text);
const $for_content__$params = ($scope, $params3) => $for_content__row_text($scope, $params3[0]?.text);
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = _content_resume("a4", "loading a");
const $await_content2 = /*@__PURE__*/ _await_content(0, "<p class=note-b> </p>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $try_content2__input_b = /*@__PURE__*/ _closure_get(12, ($scope) => {
	if (!updating) $try_content2__await_promise($scope, resolveAfter($scope._._.h, 1));
}, ($scope) => $scope._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_b($scope);
	$await_content2($scope);
};
const $else_content__for = /*@__PURE__*/ _for_of(1, "<li class=row-b> </li>", "D ", 0, $for_content2__$params);
const $else_content__input_rowsB = /*@__PURE__*/ _if_closure(2, 1, ($scope) => $else_content__for($scope, [$scope._.i, (row) => row.id]));
const $else_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content2__setup);
const $else_content__setup = ($scope) => {
	$else_content__input_rowsB._($scope);
	$else_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
};
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=note-a> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get(10, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.f, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=row-a> </li>", "D ", 0, $for_content__$params);
const $if_content__input_rowsA = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__for($scope, [$scope._.g, (row) => row.id]));
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_rowsA._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if(2, "<section class=pane-a><!><ol class=rows-a></ol></section>", "D%b ", $if_content__setup, "<section class=pane-b><!><ol class=rows-b></ol></section>", "D%b ", $else_content__setup);
const $tab = /*@__PURE__*/ _let_persisted(9, ($scope) => $if($scope, $scope.j === 0 ? 0 : 1));
const $setup__script = _script_update("a15", ($scope) => {
	_on($scope.a, "click", function() {
		$tab($scope, 0);
	});
	_on($scope.b, "click", function() {
		$tab($scope, 1);
	});
});
