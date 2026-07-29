// template.marko.persisted.mjs
const $for_content__walks = "b%c", $for_content__template = "<!><!><!>", $PanelAsync_content__walks = "b%c", $PanelAsync_content__template = "<!><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=report> </p>";
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
_enable_catch();
const $await_content__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_6_content", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getReport($scope.$global.topic));
};
const $PanelAsync_content__try = /*@__PURE__*/ _try("#text/0", $try_content__template, $try_content__walks, $try_content__setup);
const $PanelAsync_content__setup = ($scope) => $PanelAsync_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $PanelAsync_content = /*@__PURE__*/ _content("__tests__/template.marko_4_content", $PanelAsync_content__template, $PanelAsync_content__walks, $PanelAsync_content__setup);
const $PanelB_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelB_content = /*@__PURE__*/ _content("__tests__/template.marko_3_content", "<section class=b>B: <!></section>", "Db%", $PanelB_content__setup);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view = /*@__PURE__*/ _or(4, ($scope) => $for_content__dynamicTag($scope, $scope.item_view === "b" ? $scope._.PanelB : $scope.item_view === "c" ? $scope._.PanelAsync : $scope._.PanelA), 3);
const $for_content__PanelA = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view($scope);
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__PanelA._($scope);
	if (!updating) $for_content__PanelB._($scope);
	if (!updating) $for_content__PanelAsync._($scope);
};
const $for_content__PanelB = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view($scope);
});
const $for_content__PanelAsync = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view($scope);
});
const $for_content__item_view = /*@__PURE__*/ _const_persisted("item_view", $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view);
const $for_content__$params = ($scope, $params3) => $for_content__item_view($scope, $params3[0]?.view);
const $PanelA_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelA_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<span class=a>A: <!></span>", "Db%", $PanelA_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $PanelA = /*@__PURE__*/ _const_persisted("PanelA");
const $PanelB = /*@__PURE__*/ _const_persisted("PanelB");
const $PanelAsync = /*@__PURE__*/ _const_persisted("PanelAsync");
const $for = 0;
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	if (!updating) $PanelAsync($scope, { content: $PanelAsync_content($scope) });
	if (!updating) $for($scope, [$scope.$global.items, function(item) {
		return item.id;
	}]);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_7_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_7_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_5_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_5_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_4_update": [$PanelAsync_content__template, $PanelAsync_content__walks],
	"__tests__/template.marko_4_content": [$PanelAsync_content__template, $PanelAsync_content__walks],
	"__tests__/template.marko_2_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_2_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#ul/2", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_2_update");
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content_holes, "__tests__/template.marko_7_update");
};
const $PanelAsync_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $try_content__update, "__tests__/template.marko_5_update", "__tests__/template.marko_6_content");
};
const $for_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("PanelA" in $patch) $live["PanelA"] = $patch["PanelA"];
	if ("PanelB" in $patch) $live["PanelB"] = $patch["PanelB"];
	if ("PanelAsync" in $patch) $live["PanelAsync"] = $patch["PanelAsync"];
	if ("BranchScopes:#ul/2" in $patch) $for_update($live, [$patch["BranchScopes:#ul/2"], "#LoopKey"]);
};
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_7_update", $await_content_holes);
const $noop_update = () => {};
_update_content("__tests__/template.marko_6_content", $noop_update);
_update_content("__tests__/template.marko_5_update", $try_content__update);
_update_content("__tests__/template.marko_4_content", $PanelAsync_content__update);
_update_content("__tests__/template.marko_3_content", $noop_update);
_update_content("__tests__/template.marko_2_update", $for_content__update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : undefined;
function getReport(topic) {
	if (typeof window !== "undefined") {
		throw new Error("getReport is server-only");
	}
	return resolveAfter(`report for ${topic}`, 1);
}

// template.marko
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
_enable_catch();
const $await_content__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_6_content", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p class=report> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getReport($scope.$global.topic));
};
const $PanelAsync_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $PanelAsync_content__setup = ($scope) => $PanelAsync_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $PanelAsync_content = _content_resume("__tests__/template.marko_4_content", "<!><!><!>", "b%", $PanelAsync_content__setup);
const $PanelB_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelB_content = _content_resume("__tests__/template.marko_3_content", "<section class=b>B: <!></section>", "Db%", $PanelB_content__setup);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view = /*@__PURE__*/ _or(4, ($scope) => $for_content__dynamicTag($scope, $scope.item_view === "b" ? $scope._.PanelB : $scope.item_view === "c" ? $scope._.PanelAsync : $scope._.PanelA), 3);
const $for_content__PanelA = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view($scope);
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__PanelA._($scope);
	if (!updating) $for_content__PanelB._($scope);
	if (!updating) $for_content__PanelAsync._($scope);
};
const $for_content__PanelB = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view($scope);
});
const $for_content__PanelAsync = /*@__PURE__*/ _for_closure("#ul/2", ($scope) => {
	if (!updating) $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view($scope);
});
const $for_content__item_view = /*@__PURE__*/ _const_persisted("item_view", $for_content__PanelA__OR__PanelB__OR__PanelAsync__OR__item_view);
const $for_content__$params = ($scope, $params3) => $for_content__item_view($scope, $params3[0]?.view);
const $PanelA_content__setup = ($scope) => _text($scope["#text/0"], getLabel?.($scope.$global.topic));
const $PanelA_content = _content_resume("__tests__/template.marko_1_content", "<span class=a>A: <!></span>", "Db%", $PanelA_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $PanelA = /*@__PURE__*/ _const_persisted("PanelA");
const $PanelB = /*@__PURE__*/ _const_persisted("PanelB");
const $PanelAsync = /*@__PURE__*/ _const_persisted("PanelAsync");
const $for = /*@__PURE__*/ _for_of("#ul/2", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $PanelA($scope, { content: $PanelA_content($scope) });
	if (!updating) $PanelB($scope, { content: $PanelB_content($scope) });
	if (!updating) $PanelAsync($scope, { content: $PanelAsync_content($scope) });
	if (!updating) $for($scope, [$scope.$global.items, function(item) {
		return item.id;
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
