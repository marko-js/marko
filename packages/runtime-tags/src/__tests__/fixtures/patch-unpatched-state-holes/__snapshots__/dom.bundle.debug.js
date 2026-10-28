// template.marko
const $template = "<div id=spread></div><input name=spread><div> </div><p> </p><button>+</button>";
const $walks = " b bD lD l b";
const $html = /*@__PURE__*/ _let("html/8", ($scope) => _html($scope, $scope.html, "#text/2"));
const $attrs__script = _script("__tests__/template.marko_0_attrs#9", ($scope) => {
	_attrs_script($scope, "#div/0");
	_attrs_script($scope, "#input/1");
});
const $attrs = /*@__PURE__*/ _let("attrs/9", ($scope) => {
	_attrs_partial_content($scope, "#div/0", $scope.attrs, { id: 1 });
	_attrs_partial($scope, "#input/1", $scope.attrs, { name: 1 }, _controllable_input);
	$attrs__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$html($scope, "<i>b</i>");
	$attrs($scope, { title: "b" });
}));
function $setup($scope) {
	$html($scope, "<b>a</b>");
	$attrs($scope, { title: "a" });
	$setup__script($scope);
}
const $input_n = ($scope, input_n) => _text($scope["#text/3"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
