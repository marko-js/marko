// tags/svg-and-html.marko
const $template$1 = "<svg><!></svg><div><!></div>";
const $walks$1 = "D%lD%l";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = ($scope, input_content) => {
	$dynamicTag($scope, input_content);
	$dynamicTag2($scope, input_content);
};
const $input = ($scope, input) => $input_content($scope, input.content);
var svg_and_html_default = /*@__PURE__*/ _template("__tests__/tags/svg-and-html.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<button>Toggle</button><div></div>";
const $walks = " b b";
const $svgandhtml_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<a href=#>Link</a>");
const $if_content__setup = ($scope) => $input_content($scope["#childScope/0"], $svgandhtml_content($scope));
const $if = /*@__PURE__*/ _if("#div/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show__script = _script("__tests__/template.marko_0_show#2", ($scope) => {
	$scope.show;
	for (const node of _el_read($scope["#div/1"]).querySelectorAll("a")) {
		node.setAttribute("ns", node.namespaceURI);
	}
});
const $show = /*@__PURE__*/ _let("show/2", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
