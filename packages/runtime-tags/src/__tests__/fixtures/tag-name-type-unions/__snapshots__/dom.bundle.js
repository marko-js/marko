// tags/a/index.marko
const $template$1 = "<div>A <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_label$1 = ($scope, input_label) => _text($scope.a, input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var a_default = /* @__PURE__ */ _template("b", $template$1, $walks$1, $setup$1, $input$1);

// tags/b/index.marko
const $template = "<div>B <!></div>";
const $walks = "Db%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var b_default = /* @__PURE__ */ _template("c", $template, $walks, $setup, $input);

// template.marko
const localTag = a_default;
const $xdivA_content = _content_resume("a3", "m", "b");
const $navigator_content = _content_resume("a2", "g", "b");
const $xdivspan_content = _content_resume("a1", "n", "b");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(1, _content_resume("a0", "u", "b"));
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag(2, $xdivspan_content);
const $dynamicTag4 = /* @__PURE__ */ _dynamic_tag(4);
const $dynamicTag5 = /* @__PURE__ */ _dynamic_tag(5, $xdivA_content);
const $dynamicTag6 = /* @__PURE__ */ _dynamic_tag(6);
const $x__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$x($scope, !$scope.h);
}));
const $x = /* @__PURE__ */ _let(7, ($scope) => {
	$dynamicTag($scope, $scope.h ? "div" : void 0, () => ({ id: "d1" }));
	$dynamicTag2($scope, $scope.h ? "div" : "span");
	$dynamicTag4($scope, $scope.h ? a_default : b_default, () => ({ label: "ab" }));
	$dynamicTag5($scope, $scope.h ? "div" : a_default, () => ({ label: "ad" }));
	$dynamicTag6($scope, $scope.h ? localTag : a_default, () => ({ label: "la" }));
	$x__script($scope);
});
