// tags/widget/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $catch_content = _content_resume("__tests__/tags/widget/index.marko_2*content", "<em>bad</em>");
const $try = /*@__PURE__*/ _try("#text/0", "<em>ok</em>");
function $setup$1($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "b%c", $setup$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
