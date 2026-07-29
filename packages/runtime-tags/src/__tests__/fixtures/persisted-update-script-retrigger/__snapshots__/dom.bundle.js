// template.marko.persisted.mjs
const $template = "<button class=take>take</button><p class=mirror><!> in stock</p><p class=server>server says <!></p>";
const $walks = " bD%lDb%l";
const $mirror = _var_resume("a2", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => {
	$mirror($scope, $scope.$.stock);
	_on($scope.a, "click", function() {
		$mirror($scope, $scope.d - 1);
	});
});
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $mirror_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $mirror_seed, $patch["d"]);
	$_holes($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $mirror = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_refresh("a1", ($scope) => {
	$mirror($scope, $scope.$.stock);
	_on($scope.a, "click", function() {
		$mirror($scope, $scope.d - 1);
	});
});
