// tags/counter.marko.persisted.mjs
const $template$2 = "<button class=tap>tap <!></button>";
const $walks$2 = " Db%l";
const $n = _var_resume("__tests__/tags/counter.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/5", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_return($scope, $scope.n * 2);
}));
const $input_start = $n;
const $setup__script$1 = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $setup$2 = $setup__script$1;
const $input$1 = ($scope, input) => $input_start($scope, input.start);
var counter_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$2, $walks$2, $setup$2, $input$1);
_static_shells({
	"__tests__/tags/counter.marko_0_update": [$template$2, $walks$2],
	"__tests__/tags/counter.marko": [$template$2, $walks$2]
});
const $n_seed = _update_signal("__tests__/tags/counter.marko_0_n/var");
const $construct$1 = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_construct_effect($scope, $setup__script$1);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
};
_construct("__tests__/tags/counter.marko_0_update", $construct$1);
const $merge$2 = _resume("__tests__/tags/counter.marko_0_update", $update2$2);
_update_content("__tests__/tags/counter.marko", $merge$2, $construct$1);
function $patch2$2($fail) {
	return patch($merge$2, $fail);
}

// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);
_static_shells({
	"__tests__/tags/layout.marko_0_update": [$template$1, "D%l"],
	"__tests__/tags/layout.marko": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $merge$1 = _resume("__tests__/tags/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $Tools_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&%bD%c%lD l b`)($walks$2), $Tools_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><p class=readout><!> of <!></p><span class=unit> </span><button class=raise>raise</button>`)($template$2);
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=about>elsewhere</p>");
const $Tools_content__limit = _var_resume("__tests__/template.marko_1_limit/var", /*@__PURE__*/ _let_persisted("limit/7", ($scope) => _text($scope["#text/4"], $scope.limit)));
const $Tools_content__setup__script = _script_shared(($scope) => _on($scope["#button/6"], "click", function() {
	$Tools_content__limit($scope, $scope.limit + 5);
}));
const $Tools_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $Tools_content__tally);
	$setup$2($scope["#childScope/0"]);
	$input_start($scope["#childScope/0"], $scope.$global.start);
	_text($scope["#text/5"], getUnit?.());
	$Tools_content__limit($scope, 10);
	$Tools_content__setup__script($scope);
};
const $Tools_content__tally = _var_resume("__tests__/template.marko_1_tally/var", ($scope, tally) => _text($scope["#text/3"], tally));
const $Tools_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $Tools_content__template, $Tools_content__walks, $Tools_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Tools__OR__About = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "tools" ? $scope.Tools : $scope.About));
const $Tools = /*@__PURE__*/ _const_persisted("Tools", $Tools__OR__About);
const $About = /*@__PURE__*/ _const_persisted("About", $Tools__OR__About);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Tools($scope, { content: $Tools_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_1_update": [$Tools_content__template, $Tools_content__walks],
	"__tests__/template.marko_1_content": [$Tools_content__template, $Tools_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $limit_seed = _update_signal("__tests__/template.marko_1_limit/var");
const $Tools_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/3": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/3")),
	"PatchHole:#text/5": /*@__PURE__*/ _update_text("#text/5")
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $Tools_content__construct = ($scope) => {
	_construct_child($scope, "#childScope/0", "__tests__/tags/counter.marko_0_update");
	_var($scope, "#childScope/0", $Tools_content__tally);
	_text($scope["#text/4"], $scope.limit);
	_construct_effect($scope, $Tools_content__setup__script);
};
const $Tools_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("limit" in $patch) _update_seed($live, $limit_seed, $patch["limit"]);
	$Tools_content_holes($patch, $live);
	if ("#childScope/0" in $patch) $merge$2($patch["#childScope/0"], $live["#childScope/0"]);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/2", "__tests__/tags/layout.marko_0_update");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_construct("__tests__/template.marko_1_update", $Tools_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $Tools_content__update, $Tools_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getUnit = typeof window === "undefined" ? () => "widgets" : undefined;

// tags/counter.marko
const $template$2 = "<button class=tap>tap <!></button>";
const $walks$2 = " Db%l";
const $n = /*@__PURE__*/ _let_persisted("n/5", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_return($scope, $scope.n * 2);
});
const $input_start = $n;
const $setup__script$1 = _script_update("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $setup$2 = $setup__script$1;
const $input$1 = ($scope, input) => $input_start($scope, input.start);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/layout.marko
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $About_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=about>elsewhere</p>");
const $Tools_content__limit = /*@__PURE__*/ _let_persisted("limit/7", ($scope) => _text($scope["#text/4"], $scope.limit));
const $Tools_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/6"], "click", function() {
	$Tools_content__limit($scope, $scope.limit + 5);
}));
const $Tools_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $Tools_content__tally);
	$setup$2($scope["#childScope/0"]);
	$input_start($scope["#childScope/0"], $scope.$global.start);
	_text($scope["#text/5"], getUnit?.());
	$Tools_content__limit($scope, 10);
	$Tools_content__setup__script($scope);
};
const $Tools_content__tally = _var_resume("__tests__/template.marko_1_tally/var", ($scope, tally) => _text($scope["#text/3"], tally));
const $Tools_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", /*@__PURE__*/ ((_w0) => `${_w0}<!><p class=readout><!> of <!></p><span class=unit> </span><button class=raise>raise</button>`)($template$2), /*@__PURE__*/ ((_w0) => `0${_w0}&%bD%c%lD l b`)($walks$2), $Tools_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $Tools__OR__About = /*@__PURE__*/ _or(7, ($scope) => $input_content($scope["#childScope/2"], $scope.$global.view === "tools" ? $scope.Tools : $scope.About));
const $Tools = /*@__PURE__*/ _const_persisted("Tools", $Tools__OR__About);
const $About = /*@__PURE__*/ _const_persisted("About", $Tools__OR__About);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	if (!updating) $Tools($scope, { content: $Tools_content($scope) });
	if (!updating) $About($scope, { content: $About_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
