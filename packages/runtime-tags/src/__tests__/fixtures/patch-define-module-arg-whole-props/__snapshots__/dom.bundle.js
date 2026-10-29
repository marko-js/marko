// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $Panel_content__props = ($scope, props) => _text($scope.a, props.fmt(props.label));
const $if_content__input_label = /*@__PURE__*/ _fill("a2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__props($scope.a, {
	fmt: lib.format,
	label: $scope._.e
})));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__input_label);
const $open = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
