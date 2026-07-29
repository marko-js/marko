// tags/layout/layout.marko.persisted.mjs
const $template$1 = "<header><button> </button></header><main><!></main>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = _var_resume("__tests__/tags/layout/layout.marko_0_open/var", /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "Close" : "Menu")));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/layout/layout.marko", $template$1, $walks$1, $setup$1, $input$1);
_static_shells({
	"__tests__/tags/layout/layout.marko_0_update": [$template$1, $walks$1],
	"__tests__/tags/layout/layout.marko": [$template$1, $walks$1]
});
const $open_seed = _update_signal("__tests__/tags/layout/layout.marko_0_open/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/1")) });
const $construct$1 = ($scope) => {
	_construct_effect($scope, $setup__script);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("open" in $patch) _update_seed($live, $open_seed, $patch["open"]);
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_construct("__tests__/tags/layout/layout.marko_0_update", $construct$1);
const $merge$1 = _resume("__tests__/tags/layout/layout.marko_0_update", $update2$1);
_update_content("__tests__/tags/layout/layout.marko", $merge$1, $construct$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $layout_content__walks = "D l D l", $layout_content__template = "<h1> </h1><button class=inc> </button>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b`)($walks$1);
const $layout_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $layout_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $layout_content__setup = ($scope) => {
	if (!updating) $layout_content__input_title($scope);
	$layout_content__count($scope);
	$layout_content__setup__script($scope);
};
const $layout_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/2"], $scope._.count));
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", $layout_content__template, $layout_content__walks, $layout_content__setup);
const $count__closure = /*@__PURE__*/ _closure($layout_content__count);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/5", $count__closure));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $layout_content($scope));
	$count($scope, 0);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($layout_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $input_title__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$layout_content__template, $layout_content__walks],
	"__tests__/template.marko_1_content": [$layout_content__template, $layout_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $layout_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0") });
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $layout_content__construct = ($scope) => {
	_text($scope["#text/2"], $scope._.count);
	_construct_closure($scope, $scope._, $layout_content__count);
	_construct_effect($scope, $layout_content__setup__script);
};
const $layout_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$layout_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_construct_child($scope, "#childScope/0", "__tests__/tags/layout/layout.marko_0_update");
};
const $update2 = ($patch, $live) => {
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("#childScope/0" in $patch) $merge$1($patch["#childScope/0"], $live["#childScope/0"]);
};
_construct("__tests__/template.marko_1_update", $layout_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_content", $layout_content__update, $layout_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/layout/layout.marko
const $template$1 = "<header><button> </button></header><main><!></main>";
const $walks$1 = "D D mD%l";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $open = /*@__PURE__*/ _let_persisted("open/6", ($scope) => _text($scope["#text/1"], $scope.open ? "Close" : "Menu"));
const $setup__script = _script_update("__tests__/tags/layout/layout.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var layout_default = /*@__PURE__*/ _template("__tests__/tags/layout/layout.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b`)($walks$1);
const $layout_content__input_title = /*@__PURE__*/ _closure_get("input_title", ($scope) => {
	if (!updating) {
		_text($scope["#text/0"], $scope._.input_title);
	}
});
const $layout_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $layout_content__setup = ($scope) => {
	if (!updating) $layout_content__input_title($scope);
	$layout_content__count($scope);
	$layout_content__setup__script($scope);
};
const $layout_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/2"], $scope._.count));
const $layout_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<h1> </h1><button class=inc> </button>", "D l D ", $layout_content__setup);
const $count__closure = /*@__PURE__*/ _closure($layout_content__count);
const $count = /*@__PURE__*/ _let_persisted("count/5", $count__closure);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $layout_content($scope));
	$count($scope, 0);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($layout_content__input_title);
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $input_title__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
