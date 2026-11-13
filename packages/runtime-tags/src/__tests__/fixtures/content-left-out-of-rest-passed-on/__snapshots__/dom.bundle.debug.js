// tags/child.marko
const $template$1 = "<p><!></p><pre> </pre>";
const $walks$1 = "D%lD l";
const $setup$1 = ($_) => {};
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $content = $dynamicTag;
const $rest = ($scope, rest) => _text($scope["#text/1"], JSON.stringify(rest));
const $input = ($scope, input) => {
	$rest($scope, (({ content, ...rest }) => rest)(input));
	$content($scope, input.content);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $child_content__n = /*@__PURE__*/ _closure_get("n/3", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:2/subscribe");
const $child_content__setup = $child_content__n;
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $child_content__setup);
const $n__closure = /*@__PURE__*/ _closure($child_content__n);
const $n = /*@__PURE__*/ _let("n/2", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$content_direct($scope["#childScope/0"], $child_content($scope));
	$rest($scope["#childScope/0"], { label: "a" });
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
