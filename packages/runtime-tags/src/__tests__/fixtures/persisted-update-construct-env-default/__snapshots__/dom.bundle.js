// template.marko.persisted.mjs
const $if_content__walks = " b b", $if_content__template = "<input value=pro type=radio name=plan class=pro><input value=basic type=radio name=plan class=basic>";
const $template = "<button class=n>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $n = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
_static_shells({
	"a2": [$if_content__template, $if_content__walks],
	"a5": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({
	"NcheckedValue:a": /*@__PURE__*/ _update_controllable("a", _update_input_checkedValue),
	"NcheckedValue:b": /*@__PURE__*/ _update_controllable("b", _update_input_checkedValue)
});
const $n_seed = _update_signal("a6");
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $n_seed, $patch["g"]);
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content_holes], ["a2"]);
};
_construct("a1", $construct);
_update_content("a2", $if_content_holes);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $n = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
