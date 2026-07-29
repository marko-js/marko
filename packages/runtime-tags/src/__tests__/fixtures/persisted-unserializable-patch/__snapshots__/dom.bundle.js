// template.marko.persisted.mjs
const $template = "<button> </button><button class=log>log <!></button>";
const $walks = " D l Db%l";
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i)));
const $setup__script = _script_shared(($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.i + 1);
	});
	_on($scope.c, "click", function() {
		console.log($scope.g);
	});
});
const $input_detail = _var_resume("a3", /*@__PURE__*/ _const_persisted(6));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a2");
const $input_detail_update = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qd": /*@__PURE__*/ _update_text("d") });
const $construct = ($scope) => {
	_text($scope.b, $scope.i);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("g" in $patch) $input_detail_update($live, $patch["g"]);
	$_holes($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script_update("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$count($scope, $scope.i + 1);
	});
	_on($scope.c, "click", function() {
		console.log($scope.g);
	});
});
