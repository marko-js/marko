// template.marko
const $if_content__input_attrs__script = _script("a0", ($scope) => _attrs_script($scope, "c"));
const $if_content__input_attrs = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$signalReset($scope, 2);
	_attrs($scope, "c", {
		type: "checkbox",
		...$scope._.e,
		checked: $signal($scope, 2)
	}, _controllable_input);
	$if_content__input_attrs__script($scope);
});
const $if_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$signalReset($scope, 1);
	$if_content__input_attrs._($scope);
	_attr_class_item($scope.a, "live", $signal($scope, 0));
	_attr_input_checked_default($scope, "b", $signal($scope, 1));
};
const $if = /*@__PURE__*/ _if(0, "<div></div><input type=checkbox><input>", " b b ", $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, true);
}));
