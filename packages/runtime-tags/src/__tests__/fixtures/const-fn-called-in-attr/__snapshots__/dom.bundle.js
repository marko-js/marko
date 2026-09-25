// template.marko
const $pick2 = /*@__PURE__*/ _const(12, _script("a6", ($scope) => _on($scope.a, "click", $scope.m())));
const $mode = /*@__PURE__*/ _let(9, ($scope) => $pick2($scope, $pick($scope)));
const $out = /*@__PURE__*/ _let(10, ($scope) => _text($scope.b, $scope.k));
const $getAttrs2__script = _script("a5", ($scope) => _attrs_script($scope, "c"));
const $getAttrs2 = /*@__PURE__*/ _const(13, ($scope) => {
	_attrs_content($scope, "c", {
		id: "spread",
		...$scope.n()
	});
	$getAttrs2__script($scope);
});
const $input_rest__OR__cls__script = _script("a4", ($scope) => _attrs_script($scope, "d"));
const $input_rest__OR__cls = /*@__PURE__*/ _or(15, ($scope) => {
	_attrs_content($scope, "d", {
		id: "before-spread",
		class: $scope.o(),
		...$scope.i
	});
	$input_rest__OR__cls__script($scope);
});
const $cls2 = /*@__PURE__*/ _const(14, $input_rest__OR__cls);
const $active = /*@__PURE__*/ _let(11, ($scope) => {
	$getAttrs2($scope, $getAttrs($scope));
	$cls2($scope, $cls($scope));
});
const $setup__script = _script("a3", ($scope) => {
	_on($scope.e, "click", function() {
		$mode($scope, "b");
	});
	_on($scope.f, "click", function() {
		$active($scope, !$scope.l);
	});
});
const $pick = ($scope) => function() {
	return $scope.j === "a" ? () => {
		$out($scope, "A");
	} : () => {
		$out($scope, "B");
	};
};
const $getAttrs = ($scope) => function() {
	return { class: $scope.l ? "on" : "off" };
};
const $cls = ($scope) => function() {
	return $scope.l ? "on" : "off";
};
_resumed.a0 = $pick;
_resumed.a1 = $getAttrs;
_resumed.a2 = $cls;
