// lib.ts
const lib = {
	sep: "!",
	format(value, sep) {
		return value.toUpperCase() + sep;
	}
};

// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $Panel_content__fmt__OR__sep__OR__label = /*@__PURE__*/ _or_resume("a1", 6, ($scope) => _text($scope.a, $scope.d($scope.f, $scope.e)), 2);
const $Panel_content__fmt = /*@__PURE__*/ _const(3, $Panel_content__fmt__OR__sep__OR__label);
const $Panel_content__sep = /*@__PURE__*/ _const(4, $Panel_content__fmt__OR__sep__OR__label);
const $Panel_content__label = /*@__PURE__*/ _const(5, $Panel_content__fmt__OR__sep__OR__label);
const $if_content__input_label = /*@__PURE__*/ _fill_signal("4 a3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$Panel_content__sep($scope.a, lib.sep);
	$Panel_content__fmt($scope.a, lib.format);
	$Panel_content__label($scope.a, $scope._.e);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Panel_content__fmt($scope.a, lib.format);
	$Panel_content__sep($scope.a, lib.sep);
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
