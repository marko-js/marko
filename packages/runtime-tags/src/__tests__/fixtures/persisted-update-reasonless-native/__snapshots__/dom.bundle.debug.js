// template.marko.persisted.mjs
const $template = "<button>count <!></button><div class=target>attribute</div><input class=target>";
const $walks = " Db%l b b";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_attr($scope["#div/2"], "data-value", nextValue());
	_attr($scope["#input/3"], "value", nextValue());
	$count($scope, 0);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:data-value:#div/2": /*@__PURE__*/ _update_named_attr("#div/2", "data-value"),
	"PatchAttr:value:#input/3": /*@__PURE__*/ _update_named_attr("#input/3", "value")
});
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	$_holes($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.ts
let counter = 0;
function nextValue() {
	return `server-${++counter}`;
}

// template.marko
const $template = "<button>count <!></button><div class=target>attribute</div><input class=target>";
const $walks = " Db%l b b";
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_attr($scope["#div/2"], "data-value", nextValue());
	_attr($scope["#input/3"], "value", nextValue());
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
