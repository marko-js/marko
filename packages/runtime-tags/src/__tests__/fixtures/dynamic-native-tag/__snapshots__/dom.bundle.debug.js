// template.marko
const $template = "<!><span class=chip></span><button id=toggle></button>";
const $walks = "b b b";
const $href = /* @__PURE__ */ _let("href/6", ($scope) => {
	_attr($scope["#span/0"], "href", $scope.href);
	_dynamic_native_tag($scope, "#span/0", $scope.href ? "a" : "span");
});
const $input_href = $href;
const $input_label = ($scope, input_label) => _attr($scope["#span/0"], "title", input_label);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$href($scope, $scope.href ? undefined : "/home");
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_href($scope, input.href);
	$input_label($scope, input.label);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
