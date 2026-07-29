// template.marko.persisted.mjs
const $if_content__walks = "D%b l", $if_content__template = "<section class=panel><!><ol class=entries></ol></section>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=summary> </p>";
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
_enable_catch();
const $for_content__entry_text = ($scope, entry_text) => _text($scope["#text/0"], entry_text);
const $for_content__$params = ($scope, $params3) => $for_content__entry_text($scope, $params3[0]?.text);
const $await_content__summary = ($scope, summary) => _text($scope["#text/0"], summary);
const $await_content__$params = ($scope, $params2) => $await_content__summary($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_summary = /*@__PURE__*/ _closure_get("input_summary", ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.input_summary, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_summary($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=entry> </li>", "D ", 0, $for_content__$params);
const $if_content__input_entries = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.input_entries, (entry) => entry.id]));
const $if_content__try = /*@__PURE__*/ _try("#text/0", $try_content__template, $try_content__walks, $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_entries._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if("#text/1", $if_content__template, $if_content__walks, $if_content__setup);
const $open = _var_resume("__tests__/template.marko_0_open/var", /*@__PURE__*/ _let_persisted("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_summary($scope, input.summary);
	$input_entries($scope, input.entries);
};
const $input_summary__closure = /*@__PURE__*/ _closure($try_content__input_summary);
const $input_summary = /*@__PURE__*/ _const_persisted("input_summary", $input_summary__closure);
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $if_content__input_entries);
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
const $open_seed = _update_signal("__tests__/template.marko_0_open/var");
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_4_update");
};
const $if_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_2_update", "__tests__/template.marko_3_content");
	if ("ConditionalRenderer:#ol/1" in $patch) _update_region("#ol/1")($patch, $live);
};
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
	if ("ConditionalRenderer:#text/1" in $scope) _update_if($scope, $scope, "ConditionalRenderer:#text/1", "BranchScopes:#text/1", [$if_content__update], ["__tests__/template.marko_1_update"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("open" in $patch) _update_seed($live, $open_seed, $patch["open"]);
	if ("input_summary" in $patch) {
		$live["input_summary"] = $patch["input_summary"];
		_closure($try_content__input_summary)($live);
	}
	if ("input_entries" in $patch) {
		$live["input_entries"] = $patch["input_entries"];
		$if_content__input_entries($live);
	}
	if ("BranchScopes:#text/1" in $patch) _update_if_state($patch, $live, "ConditionalRenderer:#text/1", "BranchScopes:#text/1", [$if_content__update]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_5_update", $noop_update);
_update_content("__tests__/template.marko_4_update", $await_content_holes);
_update_content("__tests__/template.marko_3_content", $noop_update);
_update_content("__tests__/template.marko_2_update", $try_content__update);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
_enable_catch();
const $for_content__entry_text = ($scope, entry_text) => _text($scope["#text/0"], entry_text);
const $for_content__$params = ($scope, $params3) => $for_content__entry_text($scope, $params3[0]?.text);
const $await_content__summary = ($scope, summary) => _text($scope["#text/0"], summary);
const $await_content__$params = ($scope, $params2) => $await_content__summary($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=summary> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_summary = /*@__PURE__*/ _closure_get("input_summary", ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.input_summary, 1));
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	$try_content__input_summary($scope);
	$await_content($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of("#ol/1", "<li class=entry> </li>", "D ", 0, $for_content__$params);
const $if_content__input_entries = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__for($scope, [$scope._.input_entries, (entry) => entry.id]));
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => {
	$if_content__input_entries._($scope);
	$if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $if = /*@__PURE__*/ _if("#text/1", "<section class=panel><!><ol class=entries></ol></section>", "D%b ", $if_content__setup);
const $open = /*@__PURE__*/ _let_persisted("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_summary($scope, input.summary);
	$input_entries($scope, input.entries);
};
const $input_summary__closure = /*@__PURE__*/ _closure($try_content__input_summary);
const $input_summary = /*@__PURE__*/ _const_persisted("input_summary", $input_summary__closure);
const $input_entries = /*@__PURE__*/ _const_persisted("input_entries", $if_content__input_entries);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
