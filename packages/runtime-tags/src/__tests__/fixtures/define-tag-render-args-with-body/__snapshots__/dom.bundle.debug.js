// template.marko
const $X_content__walks = "D%l";
const $X_content__template = "<div class=box><!></div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>click</button>`)($X_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($X_content__walks);
const $opts_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $X_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "hi");
const $X_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $X_content__opts_content = $X_content__dynamicTag;
const $X_content__$params = ($scope, $params2) => $X_content__opts($scope, $params2[1]);
const $X_content__opts = ($scope, opts) => $X_content__opts_content($scope, opts?.content);
const $n = /*@__PURE__*/ _let("n/2");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$opts_content_direct($scope["#childScope/0"], $X_content2($scope));
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
