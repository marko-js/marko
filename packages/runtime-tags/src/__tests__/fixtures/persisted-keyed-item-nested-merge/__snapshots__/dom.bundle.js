// template.marko.persisted.mjs
const $for_content__walks = "E l b l", $for_content__template = "<li class=row><span class=label> </span><input class=note><ol class=cells></ol></li>";
const $template = "<button class=count>clicked <!></button><ul class=rows></ul>";
const $walks = " Db%l b";
const $for_content__note = _var_resume("a7", /*@__PURE__*/ _let_persisted(7, ($scope) => _attr_input_value($scope, "b", $scope.h, $valueChange($scope))));
const $for_content__setup__script = _script_shared(($scope) => _attr_input_value_script($scope, "b"));
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
function $valueChange($scope) {
	return (_new_note) => {
		$for_content__note($scope, _new_note);
	};
}
_static_shells({
	"a4": [$for_content__template, $for_content__walks],
	"a6": [$for_content__template, $for_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $note_seed = _update_signal("a7");
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a8");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a4");
const $for_content__construct = ($scope) => {
	_attr_input_value($scope, "b", $scope.h, $scope["Eb"]);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $note_seed, $patch["h"]);
	$for_content_holes($patch, $live);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
_construct("a4", $for_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a9", $noop_update);
_update_content("a4", $for_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content__note = /*@__PURE__*/ _let_persisted(7, ($scope) => _attr_input_value($scope, "b", $scope.h, $valueChange($scope)));
const $for_content__setup__script = _script_update("a3", ($scope) => _attr_input_value_script($scope, "b"));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
function $valueChange($scope) {
	return (_new_note) => {
		$for_content__note($scope, _new_note);
	};
}
_resume("a0", $valueChange);
