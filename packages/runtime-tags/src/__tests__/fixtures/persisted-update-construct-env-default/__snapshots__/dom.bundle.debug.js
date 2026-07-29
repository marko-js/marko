// template.marko.persisted.mjs
const $if_content__walks = " b b", $if_content__template = "<input value=pro type=radio name=plan class=pro><input value=basic type=radio name=plan class=basic>";
const $template = "<button class=n>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__setup = ($scope) => {
	_attr_input_checkedValue_default($scope, "#input/0", selected, "pro");
	_attr_input_checkedValue_default($scope, "#input/1", selected, "basic");
};
const $n = _var_resume("__tests__/template.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/1"], $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:checkedValue:#input/0": /*@__PURE__*/ _update_controllable("#input/0", _update_input_checkedValue),
	"PatchAttr:checkedValue:#input/1": /*@__PURE__*/ _update_controllable("#input/1", _update_input_checkedValue)
});
const $n_seed = _update_signal("__tests__/template.marko_0_n/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content_holes], ["__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_update", $if_content_holes);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=n>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const selected = typeof window === "undefined" ? "pro" : "basic";
const $if_content__setup = ($scope) => {
	_attr_input_checkedValue_default($scope, "#input/0", selected, "pro");
	_attr_input_checkedValue_default($scope, "#input/1", selected, "basic");
};
const $n = /*@__PURE__*/ _let_persisted("n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<input value=pro type=radio name=plan class=pro><input value=basic type=radio name=plan class=basic>", " b ", $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
