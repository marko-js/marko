// template.marko.persisted.mjs
const $template = "<button class=count>count <!></button><!><!>";
const $walks = " Db%l%c";
const $Child_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {}));
const $Child_content__setup = $Child_content__setup__script;
const $Child_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<button class=child>child</button>", " b", $Child_content__setup);
const $inputouter_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputouter_content__input_child__OR__Child = /*@__PURE__*/ _or(1, ($scope) => $inputouter_content__dynamicTag($scope, $scope._.input_child === "component" ? $scope._.Child : $scope._.input_child === "native" ? "span" : undefined));
const $inputouter_content__input_child = /*@__PURE__*/ _closure_get("input_child", ($scope) => {
	if (!updating) $inputouter_content__input_child__OR__Child($scope);
});
const $inputouter_content__setup = ($scope) => {
	if (!updating) $inputouter_content__input_child($scope);
	if (!updating) $inputouter_content__Child($scope);
};
const $inputouter_content__Child = /*@__PURE__*/ _closure_get("Child", ($scope) => {
	if (!updating) $inputouter_content__input_child__OR__Child($scope);
});
const $inputouter_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<!><!><!>", "b%c", $inputouter_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count)));
const $Child = /*@__PURE__*/ _const_persisted("Child");
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Child($scope, { content: $Child_content($scope) });
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputouter_content);
const $input_outer = ($scope, input_outer) => $dynamicTag($scope, input_outer, () => ({ class: "outer" }));
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_child($scope, input.child);
};
const $input_child__closure = /*@__PURE__*/ _closure($inputouter_content__input_child);
const $input_child = /*@__PURE__*/ _const_persisted("input_child", $input_child__closure);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $inputouter_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#text/0" in $patch || "BranchScopes:#text/0" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0");
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("input_child" in $patch) $live["input_child"] = $patch["input_child"];
	if ("Child" in $patch) $live["Child"] = $patch["Child"];
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_2_content", _update_pair);
_update_content("__tests__/template.marko_1_content", $inputouter_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=count>count <!></button><!><!>";
const $walks = " Db%l%c";
const $Child_content__setup__script = _script_update("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {}));
const $Child_content__setup = $Child_content__setup__script;
const $Child_content = _content_resume("__tests__/template.marko_2_content", "<button class=child>child</button>", " b", $Child_content__setup);
const $inputouter_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $inputouter_content__input_child__OR__Child = /*@__PURE__*/ _or(1, ($scope) => $inputouter_content__dynamicTag($scope, $scope._.input_child === "component" ? $scope._.Child : $scope._.input_child === "native" ? "span" : undefined));
const $inputouter_content__input_child = /*@__PURE__*/ _closure_get("input_child", ($scope) => {
	if (!updating) $inputouter_content__input_child__OR__Child($scope);
});
const $inputouter_content__setup = ($scope) => {
	if (!updating) $inputouter_content__input_child($scope);
	if (!updating) $inputouter_content__Child($scope);
};
const $inputouter_content__Child = /*@__PURE__*/ _closure_get("Child", ($scope) => {
	if (!updating) $inputouter_content__input_child__OR__Child($scope);
});
const $inputouter_content = _content_resume("__tests__/template.marko_1_content", "<!><!><!>", "b%c", $inputouter_content__setup);
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => _text($scope["#text/1"], $scope.count));
const $Child = /*@__PURE__*/ _const_persisted("Child");
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Child($scope, { content: $Child_content($scope) });
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputouter_content);
const $input_outer = ($scope, input_outer) => $dynamicTag($scope, input_outer, () => ({ class: "outer" }));
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_child($scope, input.child);
};
const $input_child__closure = /*@__PURE__*/ _closure($inputouter_content__input_child);
const $input_child = /*@__PURE__*/ _const_persisted("input_child", $input_child__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
