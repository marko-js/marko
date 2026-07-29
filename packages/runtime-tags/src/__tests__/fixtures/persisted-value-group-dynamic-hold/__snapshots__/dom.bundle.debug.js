// tags/layout/index.marko.persisted.mjs
const $template$1 = "<main class=shell><!></main>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var index_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout/index.marko", $template$1, "D%l", $setup$1, $input);
_static_shells({
	"__tests__/tags/layout/index.marko_0_update": [$template$1, "D%l"],
	"__tests__/tags/layout/index.marko": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $merge$1 = _resume("__tests__/tags/layout/index.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout/index.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $layout_content__walks = " Db%lD l", $layout_content__template = "<button class=tap>tap <!></button><p class=info> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $layout_content__n = _var_resume("__tests__/template.marko_1_n/var", /*@__PURE__*/ _let_persisted("n/3", ($scope) => _text($scope["#text/1"], $scope.n)));
const $layout_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$layout_content__n($scope, $scope.n + 1);
}));
const $layout_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope.$global.price);
	$layout_content__n($scope, 0);
	$layout_content__setup__script($scope);
};
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $layout_content__template, $layout_content__walks, $layout_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_content_direct($scope["#childScope/2"], $layout_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_1_update": [$layout_content__template, $layout_content__walks],
	"__tests__/template.marko_1_content": [$layout_content__template, $layout_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $n_seed = _update_signal("__tests__/template.marko_1_n/var");
const $layout_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $layout_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_construct_effect($scope, $layout_content__setup__script);
};
const $layout_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$layout_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_child($scope, "#childScope/2", "__tests__/tags/layout/index.marko_0_update");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/2" in $patch) $merge$1($patch["#childScope/2"], $live["#childScope/2"]);
};
_construct("__tests__/template.marko_1_update", $layout_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_content", $layout_content__update, $layout_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/layout/index.marko
const $template$1 = "<main class=shell><!></main>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout/index.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $layout_content__n = /*@__PURE__*/ _let_persisted("n/3", ($scope) => _text($scope["#text/1"], $scope.n));
const $layout_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$layout_content__n($scope, $scope.n + 1);
}));
const $layout_content__setup = ($scope) => {
	_text($scope["#text/2"], $scope.$global.price);
	$layout_content__n($scope, 0);
	$layout_content__setup__script($scope);
};
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<button class=tap>tap <!></button><p class=info> </p>", " Db%lD ", $layout_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_content_direct($scope["#childScope/2"], $layout_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
