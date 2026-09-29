// tags/site-footer.marko
const $template$1 = "<footer>foot</footer>";
const $walks$1 = "b";
const $setup$1 = () => {};
var site_footer_default = /*@__PURE__*/ _template("__tests__/tags/site-footer.marko", $template$1, "b");

// template.marko
const $template = "<html><body><!><main> </main><!></body></html>";
const $walks = "E%bD l%m";
const $if = /*@__PURE__*/ _if("#text/0", "<a href=#main>Skip to content</a>");
const $global_meta_headings = /*@__PURE__*/ _global_join("meta", "__tests__/template.marko_0_$global_meta_headings#7/global", ($scope, $global_meta_headings) => $if($scope, $scope.$global.meta?.headings ? 0 : 1));
const $input_msg = ($scope, input_msg) => _text($scope["#text/1"], input_msg);
const $if2 = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"));
const $global_meta_hideFooter = /*@__PURE__*/ _global_join("meta", "__tests__/template.marko_0_$global_meta_hideFooter#8/global", ($scope, $global_meta_hideFooter) => $if2($scope, !$scope.$global.meta?.hideFooter ? 0 : 1));
const $input = ($scope, input) => $input_msg($scope, input.msg);
function $setup($scope) {
	$global_meta_headings($scope, $scope.$global.meta?.headings);
	$global_meta_hideFooter($scope, $scope.$global.meta?.hideFooter);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
