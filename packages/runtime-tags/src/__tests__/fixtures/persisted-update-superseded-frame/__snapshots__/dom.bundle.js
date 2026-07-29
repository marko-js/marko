// template.marko.persisted.mjs
const $if_content__walks = "D%l", $if_content__template = "<section><!></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=note> </p>";
const $template = "<button class=toggle> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("a3", "loading…");
const $await_content = /*@__PURE__*/ _await_content(0, $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.f, $scope._._.g));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get(8, $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_note($scope);
	$try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get(9, $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try(0, $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if(2, $if_content__template, $if_content__walks, $if_content__setup);
const $show = _var_resume("a10", /*@__PURE__*/ _let_persisted(7, ($scope) => {
	_text($scope.b, $scope.h ? "hide" : "show");
	$if($scope, $scope.h ? 0 : 1);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.h);
}));
_static_shells({
	"a2": [$await_content__template, $await_content__walks],
	"a8": [$await_content__template, $await_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a4": [$try_content__template, $try_content__walks],
	"a6": [$if_content__template, $if_content__walks],
	"a9": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $show_seed = _update_signal("a10");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")) });
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $if_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a5", "a3");
};
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
	if ("Dc" in $scope) _update_if($scope, $scope, "Dc", "Ac", [$if_content__update], ["a6"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $show_seed, $patch["h"]);
	if ("f" in $patch) {
		$live["f"] = $patch["f"];
		_closure($try_content__input_note)($live);
	}
	if ("g" in $patch) {
		$live["g"] = $patch["g"];
		_closure($try_content__input_tick)($live);
	}
	$_holes($patch, $live);
	if ("Ac" in $patch) _update_if_state($patch, $live, "Dc", "Ac", [$if_content__update]);
};
_construct("a1", $construct);
_update_content("a2", $await_content_holes);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a5", $try_content__update);
_update_content("a6", $if_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = _content_resume("a3", "loading…");
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=note> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.f, $scope._._.g));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get(8, $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_note($scope);
	$try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get(9, $try_content__input_note__OR__input_tick, ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if(2, "<section><!></section>", "D%", $if_content__setup);
const $show = /*@__PURE__*/ _let_persisted(7, ($scope) => {
	_text($scope.b, $scope.h ? "hide" : "show");
	$if($scope, $scope.h ? 0 : 1);
});
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.h);
}));
