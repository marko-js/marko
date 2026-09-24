// tags/child.marko
const $template = "<div><!></div>";
const $walks = " D%l";
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(3, ($scope) => {
	_attrs($scope, "a", $scope.d);
	$input_content($scope, $scope.d.content);
	$input__script($scope);
});
const $input_content = /* @__PURE__ */ _dynamic_tag(1);

// template.marko
const $child_content = /*@__PURE__*/ _content("a0", "Hello");
const $if_content__setup = ($scope) => $input($scope.a, { content: $child_content($scope) });
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
