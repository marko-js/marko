// tags/widget/index.marko
const $template = "<p> </p><button>run</button>";
const $walks = "D l b";
const $label = ($scope, label) => _text($scope.a, label());
const $input_title = /*@__PURE__*/ _const(4, ($scope) => $label($scope, () => "t:" + $scope.e));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.b, "click", function(event) {
	const label = $scope.e;
	event.target.textContent = label;
}));
const $setup = $setup__script$1;

// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_title($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
