// styles.css.ts
const box = "box";
const item = "item";
const on = "on";

// tags/input-toggle.marko
const $input_on = ($scope, input_on) => _attr_class_names($scope.a, "on", input_on);

// template.marko
const $if = /*@__PURE__*/ _if(6, /*@__PURE__*/ (() => `<span class="${item}"></span>`)());
const $on = /*@__PURE__*/ _let(7, ($scope) => {
	_attr_class_names($scope.b, "on", $scope.h);
	_attr_class_names($scope.c, "on", $scope.h);
	_attr_class_item($scope.c, "lit", !$scope.h);
	_attr_class_names($scope.d, "on", $scope.h);
	_attr_class($scope.e, $scope.h ? "on" : "box");
	$input_on($scope.f, $scope.h);
	$if($scope, $scope.h ? 0 : 1);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.h);
}));
