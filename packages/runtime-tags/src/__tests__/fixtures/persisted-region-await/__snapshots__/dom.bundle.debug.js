// template.marko.persisted.mjs
const $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = " b", $await_content__template = "<div class=reviews></div>";
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params3) => $for_content__i($scope, $params3[0]);
const $await_content__for = 0;
const $await_content__reviews = ($scope, reviews) => {
	if (!updating) $await_content__for($scope, [reviews]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_reviews = /*@__PURE__*/ _closure_get("input_reviews", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_reviews, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_reviews($scope);
	$await_content($scope);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $try = /*@__PURE__*/ _try("#text/2", $try_content__template, $try_content__walks, $try_content__setup);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_reviews($scope, input.reviews);
const $input_reviews__closure = /*@__PURE__*/ _closure($try_content__input_reviews);
const $input_reviews = /*@__PURE__*/ _const_persisted("input_reviews", $input_reviews__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_3_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_3_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_1_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_1_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#div/0" in $patch) _update_region("#div/0")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_3_update");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#text/2" in $patch) _update_branch($patch, $live, "#text/2", $try_content__update, "__tests__/template.marko_1_update", "__tests__/template.marko_2_content");
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_4_update", $noop_update);
_update_content("__tests__/template.marko_3_update", $await_content__update);
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_update", $try_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
_enable_catch();
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params3) => $for_content__i($scope, $params3[0]);
const $await_content__for = /*@__PURE__*/ _for_of("#div/0", "<div class=review>review number <!> is static</div>", "Db%", 0, $for_content__$params);
const $await_content__reviews = ($scope, reviews) => {
	if (!updating) $await_content__for($scope, [reviews]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div class=reviews></div>", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_reviews = /*@__PURE__*/ _closure_get("input_reviews", ($scope) => {
	if (!updating) {
		$try_content__await_promise($scope, resolveAfter($scope._.input_reviews, 1));
	}
});
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_reviews($scope);
	$await_content($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_reviews($scope, input.reviews);
const $input_reviews__closure = /*@__PURE__*/ _closure($try_content__input_reviews);
const $input_reviews = /*@__PURE__*/ _const_persisted("input_reviews", $input_reviews__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
