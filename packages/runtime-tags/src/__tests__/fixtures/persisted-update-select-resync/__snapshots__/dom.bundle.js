// template.marko.persisted.mjs
const $template = "<button class=count>clicked <!></button><select class=sort></select>";
const $walks = " Db%l b";
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Nvalue:c": /*@__PURE__*/ _update_controllable("c", _update_select_value) });
const $construct = ($scope) => {
	_text($scope.b, $scope.h);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $count_seed, $patch["h"]);
	$_holes($patch, $live);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
