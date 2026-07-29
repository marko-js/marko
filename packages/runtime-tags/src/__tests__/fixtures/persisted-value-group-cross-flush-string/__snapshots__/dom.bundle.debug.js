// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $for_content__walks = "E l D m", $for_content__template = "<li class=card><span class=name> </span><button class=pin> </button></li>", $await_content__walks = "D%c%l", $await_content__template = "<p class=note><!> <!></p>";
const $template = "<button class=count>clicked <!></button><ul class=cards></ul><!><!>";
const $walks = " Db%l b%c";
_enable_catch();
const $await_content__setup = ($scope) => _text($scope["#text/0"], getNoteLabel?.());
const $await_content__note_stamp = ($scope, note_stamp) => _text($scope["#text/1"], note_stamp);
const $await_content__$params = ($scope, $params3) => $await_content__note_stamp($scope, $params3[0]?.stamp);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<p class=loading>loading…</p>");
const $for_content__opts = _var_resume("__tests__/template.marko_2_opts/var", /*@__PURE__*/ _let_persisted("opts/7", ($scope) => $for_content__opts_label($scope, $scope.opts?.label)));
const $for_content__opts_label__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__pinned($scope, !!$scope.opts_label && !$scope.pinned);
}));
const $for_content__opts_label = _var_resume("__tests__/template.marko_2_opts_label/var", /*@__PURE__*/ _const_persisted("opts_label", $for_content__opts_label__script));
const $for_content__card_id = ($scope, card_id) => $for_content__opts($scope, getOpts?.(card_id));
const $for_content__pinned = _var_resume("__tests__/template.marko_2_pinned/var", /*@__PURE__*/ _let_persisted("pinned/9", ($scope) => _text($scope["#text/2"], $scope.pinned ? "pinned" : "pin")));
const $for_content__setup = ($scope) => $for_content__pinned($scope, false);
const $for_content__card_name = ($scope, card_name) => _text($scope["#text/0"], card_name);
const $for_content__$params = ($scope, $params2) => {
	$for_content__card_id($scope, $params2[0]?.id);
	$for_content__card_name($scope, $params2[0]?.name);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks, $await_content__setup);
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
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count)));
const $try = /*@__PURE__*/ _try("#text/3", $try_content__template, $try_content__walks, $try_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $for = 0;
const $input_cards = ($scope, input_cards) => {
	if (!updating) $for($scope, [input_cards, function(card) {
		return card.id;
	}]);
};
const $input = ($scope, input) => {
	$input_cards($scope, input.cards);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($try_content__input_note);
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $input_note__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_4_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_4_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_2_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_2_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_1_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const $opts_seed = _update_signal("__tests__/template.marko_2_opts/var");
const $opts_label_seed = _update_signal("__tests__/template.marko_2_opts_label/var");
const $pinned_seed = _update_signal("__tests__/template.marko_2_pinned/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/2"))
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_2_update");
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__opts_label__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("opts" in $patch) _update_seed($live, $opts_seed, $patch["opts"]);
	if ("opts_label" in $patch) _update_seed($live, $opts_label_seed, $patch["opts_label"]);
	if ("pinned" in $patch) _update_seed($live, $pinned_seed, $patch["pinned"]);
	$for_content_holes($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_4_update");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#ul/2" in $patch) $for_update($live, [$patch["BranchScopes:#ul/2"], "#LoopKey"]);
	if ("BranchScopes:#text/3" in $patch) _update_branch($patch, $live, "#text/3", $try_content__update, "__tests__/template.marko_1_update", "__tests__/template.marko_3_content");
};
_construct("__tests__/template.marko_2_update", $for_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_4_update", $await_content_holes);
const $noop_update = () => {};
_update_content("__tests__/template.marko_3_content", $noop_update);
_update_content("__tests__/template.marko_2_update", $for_content__update);
_update_content("__tests__/template.marko_1_update", $try_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const OPTS = { label: "PRIORITY-SUPPORT-TIER-LABEL" };
const getOpts = typeof window === "undefined" ? () => OPTS : undefined;
const getNoteLabel = typeof window === "undefined" ? () => OPTS.label : undefined;

// template.marko
const $template = "<button class=count>clicked <!></button><ul class=cards></ul><!><!>";
const $walks = " Db%l b%c";
_enable_catch();
const $await_content__setup = ($scope) => _text($scope["#text/0"], getNoteLabel?.());
const $await_content__note_stamp = ($scope, note_stamp) => _text($scope["#text/1"], note_stamp);
const $await_content__$params = ($scope, $params3) => $await_content__note_stamp($scope, $params3[0]?.stamp);
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "<p class=loading>loading…</p>");
const $for_content__opts = /*@__PURE__*/ _let_persisted("opts/7", ($scope) => $for_content__opts_label($scope, $scope.opts?.label));
const $for_content__opts_label__script = _script_update("__tests__/template.marko_2_opts_label", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__pinned($scope, !!$scope.opts_label && !$scope.pinned);
}));
const $for_content__opts_label = /*@__PURE__*/ _const_persisted("opts_label", $for_content__opts_label__script);
const $for_content__card_id = ($scope, card_id) => $for_content__opts($scope, getOpts?.(card_id));
const $for_content__pinned = /*@__PURE__*/ _let_persisted("pinned/9", ($scope) => _text($scope["#text/2"], $scope.pinned ? "pinned" : "pin"));
const $for_content__setup = ($scope) => $for_content__pinned($scope, false);
const $for_content__card_name = ($scope, card_name) => _text($scope["#text/0"], card_name);
const $for_content__$params = ($scope, $params2) => {
	$for_content__card_id($scope, $params2[0]?.id);
	$for_content__card_name($scope, $params2[0]?.name);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=note><!> <!></p>", "D%c%", $await_content__setup);
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
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#ul/2", "<li class=card><span class=name> </span><button class=pin> </button></li>", "E l D ", $for_content__setup, $for_content__$params);
const $input_cards = ($scope, input_cards) => {
	if (!updating) $for($scope, [input_cards, function(card) {
		return card.id;
	}]);
};
const $input = ($scope, input) => {
	$input_cards($scope, input.cards);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($try_content__input_note);
const $input_note = /*@__PURE__*/ _const_persisted("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
