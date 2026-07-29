// template.marko.persisted.mjs
const $Item_content__walks = "D l%c", $Item_content__template = "<h2 class=title> </h2><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "Db%l b", $await_content__template = "<p class=updated>updated <!></p><div class=reviews></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params3) => $for_content__i($scope, $params3[0]);
const $await_content__setup = ($scope) => _text($scope["#text/0"], $scope.$global.stamp);
const $await_content__for = 0;
const $await_content__reviews = ($scope, reviews) => {
	if (!updating) $await_content__for($scope, [reviews]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks, $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope.$global.reviews));
};
const $Item_content__try = /*@__PURE__*/ _try("#text/1", $try_content__template, $try_content__walks, $try_content__setup);
const $Item_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope.$global.title);
	$Item_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $Item_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", $Item_content__template, $Item_content__walks, $Item_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Item = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "item" ? $scope.Item : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Item);
const $Item = /*@__PURE__*/ _const_persisted("Item", $Home__OR__Item);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Item($scope, { content: $Item_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_5_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_5_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_3_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_3_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_2_update": [$Item_content__template, $Item_content__walks],
	"__tests__/template.marko_2_content": [$Item_content__template, $Item_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $Item_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = ($patch, $live) => {
	$await_content_holes($patch, $live);
	if ("ConditionalRenderer:#div/1" in $patch) _update_region("#div/1")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_5_update");
};
const $Item_content__update = ($patch, $live) => {
	$Item_content_holes($patch, $live);
	if ("BranchScopes:#text/1" in $patch) _update_branch($patch, $live, "#text/1", $try_content__update, "__tests__/template.marko_3_update", "__tests__/template.marko_4_content");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_6_update", $noop_update);
_update_content("__tests__/template.marko_5_update", $await_content__update);
_update_content("__tests__/template.marko_4_content", $noop_update);
_update_content("__tests__/template.marko_3_update", $try_content__update);
_update_content("__tests__/template.marko_2_content", $Item_content__update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params3) => $for_content__i($scope, $params3[0]);
const $await_content__setup = ($scope) => _text($scope["#text/0"], $scope.$global.stamp);
const $await_content__for = /*@__PURE__*/ _for_of("#div/1", "<div class=review>review number <!> is static</div>", "Db%", 0, $for_content__$params);
const $await_content__reviews = ($scope, reviews) => {
	if (!updating) $await_content__for($scope, [reviews]);
};
const $await_content__$params = ($scope, $params2) => $await_content__reviews($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=updated>updated <!></p><div class=reviews></div>", "Db%l ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope.$global.reviews));
};
const $Item_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $Item_content__setup = ($scope) => {
	_text($scope["#text/0"], $scope.$global.title);
	$Item_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $Item_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<h2 class=title> </h2><!><!>", "D l%", $Item_content__setup);
const $Home_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=home>welcome home</p>");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Home__OR__Item = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "item" ? $scope.Item : $scope.Home));
const $Home = /*@__PURE__*/ _const_persisted("Home", $Home__OR__Item);
const $Item = /*@__PURE__*/ _const_persisted("Item", $Home__OR__Item);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Home($scope, { content: $Home_content($scope) });
	if (!updating) $Item($scope, { content: $Item_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
