// template.marko.persisted.mjs
const $template = "<h1> </h1><button class=inc>count <!></button><!><p class=detail> </p><span class=extra> </span><!><!>";
const $walks = "D l Db%l%bD lD l%c";
const $n = _var_resume("__tests__/template.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/13", ($scope) => _text($scope["#text/2"], $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_detail = ($scope, input_detail) => _text($scope["#text/4"], input_detail);
const $input_extra = ($scope, input_extra) => _text($scope["#text/5"], input_extra);
const $show = /*@__PURE__*/ _show("#text/6", "#text/3");
const $input_expanded = $show;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_expanded($scope, input.expanded);
	$input_detail($scope, input.detail);
	$input_extra($scope, input.extra);
};
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $n_seed = _update_signal("__tests__/template.marko_0_n/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchHole:#text/4": /*@__PURE__*/ _update_text("#text/4"),
	"PatchHole:#text/5": /*@__PURE__*/ _update_text("#text/5")
});
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.n);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$_holes($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<h1> </h1><button class=inc>count <!></button><!><p class=detail> </p><span class=extra> </span><!><!>";
const $walks = "D l Db%l%bD lD l%c";
const $n = /*@__PURE__*/ _let_persisted("n/13", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_detail = ($scope, input_detail) => _text($scope["#text/4"], input_detail);
const $input_extra = ($scope, input_extra) => _text($scope["#text/5"], input_extra);
const $show = /*@__PURE__*/ _show("#text/6", "#text/3");
const $input_expanded = $show;
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_expanded($scope, input.expanded);
	$input_detail($scope, input.detail);
	$input_extra($scope, input.extra);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
