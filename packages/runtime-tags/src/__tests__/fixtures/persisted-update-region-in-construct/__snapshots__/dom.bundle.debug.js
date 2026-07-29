// tags/sticky.marko.persisted.mjs
const $template$1 = "<button class=sticky>s<!></button>";
const $walks$1 = " Db%l";
const $n = _var_resume("__tests__/tags/sticky.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/2", ($scope) => _text($scope["#text/1"], $scope.n)));
const $setup__script$1 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
var sticky_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/sticky.marko", $template$1, $walks$1, $setup$1);
_static_shells({
	"__tests__/tags/sticky.marko_0_update": [$template$1, $walks$1],
	"__tests__/tags/sticky.marko": [$template$1, $walks$1]
});
const $n_seed = _update_signal("__tests__/tags/sticky.marko_0_n/var");
const $construct$1 = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
};
_construct("__tests__/tags/sticky.marko_0_update", $construct$1);
const $merge$1 = _resume("__tests__/tags/sticky.marko_0_update", $update2$1);
_update_content("__tests__/tags/sticky.marko", $merge$1, $construct$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $Beta_content__walks = /*@__PURE__*/ ((_w0) => `D b/${_w0}&%b%l`)($walks$1), $Beta_content__template = /*@__PURE__*/ ((_w0) => `<section class=b><ul></ul>${_w0}<!><!></section>`)($template$1), $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = " b", $await_content__template = "<div class=reviews></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $await_content__for = /*@__PURE__*/ _for_to("#div/0", "<div class=review>review <!></div>", "Db%", $for_content2__setup);
const $await_content__setup = ($scope) => {
	if (!updating) $await_content__for($scope, [
		3,
		1,
		1
	]);
};
const $placeholder_content = /*@__PURE__*/ _content("__tests__/template.marko_5_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", $await_content__template, $await_content__walks, $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter(undefined, 1));
};
const $for_content__row = ($scope, row) => _text($scope["#text/0"], row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $Beta_content__for = 0;
const $Beta_content__try = /*@__PURE__*/ _try("#text/3", $try_content__template, $try_content__walks, $try_content__setup);
const $Beta_content__setup = ($scope) => {
	$setup$1($scope["#childScope/1"]);
	if (!updating) $Beta_content__for($scope, [getRows?.($scope.$global.kind)]);
	$Beta_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $Beta_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", $Beta_content__template, $Beta_content__walks, $Beta_content__setup);
const $Alpha_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<section class=a><p>alpha</p></section>");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Alpha__OR__Beta = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "b" ? $scope.Beta : $scope.Alpha));
const $Alpha = /*@__PURE__*/ _const_persisted("Alpha", $Alpha__OR__Beta);
const $Beta = /*@__PURE__*/ _const_persisted("Beta", $Alpha__OR__Beta);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Alpha($scope, { content: $Alpha_content($scope) });
	if (!updating) $Beta($scope, { content: $Beta_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_6_update": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_6_content": [$await_content__template, $await_content__walks],
	"__tests__/template.marko_4_update": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_4_content": [$try_content__template, $try_content__walks],
	"__tests__/template.marko_2_update": [$Beta_content__template, $Beta_content__walks],
	"__tests__/template.marko_2_content": [$Beta_content__template, $Beta_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $await_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#div/0" in $patch) _update_region("#div/0")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("BranchScopes:#text/0" in $patch) _update_branch($patch, $live, "#text/0", $await_content__update, "__tests__/template.marko_6_update");
};
const $Beta_content__construct = ($scope) => {
	_construct_child($scope, "#childScope/1", "__tests__/tags/sticky.marko_0_update");
};
const $Beta_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#ul/0" in $patch) _update_region("#ul/0")($patch, $live);
	if ("#childScope/1" in $patch) $merge$1($patch["#childScope/1"], $live["#childScope/1"]);
	if ("BranchScopes:#text/3" in $patch) _update_branch($patch, $live, "#text/3", $try_content__update, "__tests__/template.marko_4_update", "__tests__/template.marko_5_content");
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
_construct("__tests__/template.marko_2_update", $Beta_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_7_update", $noop_update);
_update_content("__tests__/template.marko_6_update", $await_content__update);
_update_content("__tests__/template.marko_5_content", $noop_update);
_update_content("__tests__/template.marko_4_update", $try_content__update);
_update_content("__tests__/template.marko_3_update", $noop_update);
_update_content("__tests__/template.marko_2_content", $Beta_content__update, $Beta_content__construct);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getRows = typeof window === "undefined" ? (kind) => [`${kind} one`, `${kind} two`] : undefined;

// tags/sticky.marko
const $template = "<button class=sticky>s<!></button>";
const $walks = " Db%l";
const $n = /*@__PURE__*/ _let_persisted("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script_update("__tests__/tags/sticky.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var sticky_default = /*@__PURE__*/ _template("__tests__/tags/sticky.marko", $template, $walks, $setup);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $for_content2__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $await_content__for = /*@__PURE__*/ _for_to("#div/0", "<div class=review>review <!></div>", "Db%", $for_content2__setup);
const $await_content__setup = ($scope) => {
	if (!updating) $await_content__for($scope, [
		3,
		1,
		1
	]);
};
const $placeholder_content = _content_resume("__tests__/template.marko_5_content", "loading…");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div class=reviews></div>", " ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, resolveAfter(undefined, 1));
};
const $for_content__row = ($scope, row) => _text($scope["#text/0"], row);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $Beta_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li> </li>", "D ", 0, $for_content__$params);
const $Beta_content__try = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content__setup);
const $Beta_content__setup = ($scope) => {
	$setup$1($scope["#childScope/1"]);
	if (!updating) $Beta_content__for($scope, [getRows?.($scope.$global.kind)]);
	$Beta_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
};
const $Beta_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", /*@__PURE__*/ ((_w0) => `<section class=b><ul></ul>${_w0}<!><!></section>`)($template$1), /*@__PURE__*/ ((_w0) => `D b/${_w0}&%b%l`)($walks$1), $Beta_content__setup);
const $Alpha_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<section class=a><p>alpha</p></section>");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Alpha__OR__Beta = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.$global.view === "b" ? $scope.Beta : $scope.Alpha));
const $Alpha = /*@__PURE__*/ _const_persisted("Alpha", $Alpha__OR__Beta);
const $Beta = /*@__PURE__*/ _const_persisted("Beta", $Alpha__OR__Beta);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Alpha($scope, { content: $Alpha_content($scope) });
	if (!updating) $Beta($scope, { content: $Beta_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
