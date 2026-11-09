// tags/svg-and-html.marko
const $template = "<svg><!></svg><div><!></div>";
const $walks = "D%lD%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1);
const $input_content = ($scope, input_content) => {
	$dynamicTag($scope, input_content);
	$dynamicTag2($scope, input_content);
};

// template.marko
const $svgandhtml_content = /*@__PURE__*/ _content("a0", "<a href=#>Link</a>");
const $if_content__setup = ($scope) => $input_content($scope.a, $svgandhtml_content($scope));
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show__script = _script("a1", ($scope) => {
	$scope.c;
	for (const node of $scope.b.querySelectorAll("a")) node.setAttribute("ns", node.namespaceURI);
});
const $show = /*@__PURE__*/ _let(2, ($scope) => {
	$if($scope, $scope.c ? 0 : 1);
	$show__script($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
