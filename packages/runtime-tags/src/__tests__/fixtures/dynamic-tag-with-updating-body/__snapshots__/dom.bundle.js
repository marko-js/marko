// tags/counter.marko
const $template = "<button id=count> </button>";
const $walks = " D l";
const $count = /* @__PURE__ */ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script$1($scope);
}

// template.marko
const $tagName_content__setup = ($scope) => {
	$setup($scope.a);
};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, _content_resume("a0", $template, /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks), $tagName_content__setup));
const $tagName = /* @__PURE__ */ _let(2, ($scope) => $dynamicTag($scope, $scope.c));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$tagName($scope, $scope.c === "span" ? "div" : "span");
}));
