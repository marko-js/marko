// tags/a/index.marko
const $template$2 = "<div>A <!></div>";
const $walks$2 = "Db%l";
const $setup$2 = () => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var a_default = /* @__PURE__ */ _template("__tests__/tags/a/index.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/b/index.marko
const $template$1 = "<div>B <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var b_default = /* @__PURE__ */ _template("__tests__/tags/b/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button>toggle</button><!><!><!><!><!><!><!>";
const $walks = " b%b%b%b%b%b%c";
const localTag = a_default;
const $xdivA_content = _content_resume("__tests__/template.marko_4_content", "m", "b");
const $navigator_content = _content_resume("__tests__/template.marko_3_content", "g", "b");
const $xdivspan_content = _content_resume("__tests__/template.marko_2_content", "n", "b");
const $xdivundefined_content = _content_resume("__tests__/template.marko_1_content", "u", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1", $xdivundefined_content);
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag("#text/2", $xdivspan_content);
const $dynamicTag4 = /* @__PURE__ */ _dynamic_tag("#text/4");
const $dynamicTag5 = /* @__PURE__ */ _dynamic_tag("#text/5", $xdivA_content);
const $dynamicTag6 = /* @__PURE__ */ _dynamic_tag("#text/6");
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, !$scope.x);
}));
const $x = /* @__PURE__ */ _let("x/7", ($scope) => {
	$dynamicTag($scope, $scope.x ? "div" : undefined, () => ({ id: "d1" }));
	$dynamicTag2($scope, $scope.x ? "div" : "span");
	$dynamicTag4($scope, $scope.x ? a_default : b_default, () => ({ label: "ab" }));
	$dynamicTag5($scope, $scope.x ? "div" : a_default, () => ({ label: "ad" }));
	$dynamicTag6($scope, $scope.x ? localTag : a_default, () => ({ label: "la" }));
	$x__script($scope);
});
const $dynamicTag3 = /* @__PURE__ */ _dynamic_tag("#text/3", $navigator_content);
function $setup($scope) {
	$x($scope, true);
	$dynamicTag3($scope, navigator);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
