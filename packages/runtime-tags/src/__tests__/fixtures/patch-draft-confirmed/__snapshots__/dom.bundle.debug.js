// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $page = /*@__PURE__*/ _draft("page/6", ($scope) => _text($scope["#text/1"], $scope.page));
const $_pageSource = _fill_const_resume("__tests__/template.marko0", "_pageSource", ($scope) => $page($scope, $scope._pageSource));
const $input_page = $_pageSource;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$page($scope, $scope.page + 1, 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_page($scope, input.page);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
