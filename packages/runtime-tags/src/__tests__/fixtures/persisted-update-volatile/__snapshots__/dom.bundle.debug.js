// template.marko.persisted.mjs
const $template = "<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>";
const $walks = "D lDb%lD l D l";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/4"], $scope.count)));
const $label = ($scope, label) => _text($scope["#text/2"], label);
const $setup__script = _script_shared(($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/1"], nextStamp());
	$count($scope, 0);
	if (!updating) $label($scope, `label:${nextStamp()}`);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2")
});
const $construct = ($scope) => {
	_text($scope["#text/4"], $scope.count);
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

// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
const $template = "<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>";
const $walks = "D lDb%lD l D l";
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/4"], $scope.count));
const $label = ($scope, label) => _text($scope["#text/2"], label);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/1"], nextStamp());
	$count($scope, 0);
	if (!updating) $label($scope, `label:${nextStamp()}`);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
