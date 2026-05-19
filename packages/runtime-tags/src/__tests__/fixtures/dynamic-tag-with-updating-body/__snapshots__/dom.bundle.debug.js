// tags/counter.marko
const $template$1 = "<button id=count> </button>";
const $walks$1 = " D l";
const $count__script = _script("__tests__/tags/counter.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/2", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
function $setup$1($scope) {
	$count($scope, 0);
}
var counter_default = /* @__PURE__ */ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><button id=changeTag></button>";
const $walks = "b%b b";
const $tagName_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $tagName_content = _content_resume("__tests__/template.marko_1_content", $template$1, /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1), $tagName_content__setup);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $tagName_content);
const $tagName__script = _script("__tests__/template.marko_0_tagName", ($scope) => _on($scope["#button/1"], "click", function() {
	$tagName($scope, $scope.tagName === "span" ? "div" : "span");
}));
const $tagName = /* @__PURE__ */ _let("tagName/2", ($scope) => {
	$dynamicTag($scope, $scope.tagName);
	$tagName__script($scope);
});
function $setup($scope) {
	$tagName($scope, "div");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
