// template.marko.persisted.mjs
const $if_content__walks = "D%b l", $if_content__template = "<section class=panel><!><ol class=entries></ol></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=summary> </p>";
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
_enable_catch();
const $for_content__entry_text = ($scope, entry_text) => _text($scope.a, entry_text);
const $for_content__$params = ($scope, $params3) => $for_content__entry_text($scope, $params3[0]?.text);
const $await_content__summary = ($scope, summary) => _text($scope.a, summary);
const $await_content__$params = ($scope, $params2) => $await_content__summary($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("a3", "loading");
const $await_content = /*@__PURE__*/ _await_content(0, $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_summary = /*@__PURE__*/ _closure_get(7, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.e, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_summary($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=entry> </li>", "D ", 0, $for_content__$params);
const $if_content__input_entries = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__for($scope, [$scope._.f, (entry) => entry.id]));
const $if_content__try = /*@__PURE__*/ _try(0, $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_entries._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if(1, $if_content__template, $if_content__walks, $if_content__setup);
const $open = _var_resume("a11", /*@__PURE__*/ _let_persisted(6, ($scope) => $if($scope, $scope.g ? 0 : 1)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
_static_shells({
	"a2": [$await_content__template, $await_content__walks],
	"a9": [$await_content__template, $await_content__walks],
	"a5": [$try_content__template, $try_content__walks],
	"a4": [$try_content__template, $try_content__walks],
	"a7": [$if_content__template, $if_content__walks],
	"a10": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $open_seed = _update_signal("a11");
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $if_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a5", "a3");
	if ("Db" in $patch) _update_region("b")($patch, $live);
};
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
	if ("Db" in $scope) _update_if($scope, $scope, "Db", "Ab", [$if_content__update], ["a7"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	if ("e" in $patch) {
		$live["e"] = $patch["e"];
		_closure($try_content__input_summary)($live);
	}
	if ("f" in $patch) {
		$live["f"] = $patch["f"];
		$if_content__input_entries($live);
	}
	if ("Ab" in $patch) _update_if_state($patch, $live, "Db", "Ab", [$if_content__update]);
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a12", $noop_update);
_update_content("a2", $await_content_holes);
_update_content("a3", $noop_update);
_update_content("a5", $try_content__update);
_update_content("a7", $if_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $for_content__entry_text = ($scope, entry_text) => _text($scope.a, entry_text);
const $for_content__$params = ($scope, $params3) => $for_content__entry_text($scope, $params3[0]?.text);
const $await_content__summary = ($scope, summary) => _text($scope.a, summary);
const $await_content__$params = ($scope, $params2) => $await_content__summary($scope, $params2[0]);
const $placeholder_content = _content_resume("a3", "loading");
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=summary> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_summary = /*@__PURE__*/ _closure_get(7, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.e, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_summary($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(1, "<li class=entry> </li>", "D ", 0, $for_content__$params);
const $if_content__input_entries = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__for($scope, [$scope._.f, (entry) => entry.id]));
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_entries._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if(1, "<section class=panel><!><ol class=entries></ol></section>", "D%b ", $if_content__setup);
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
