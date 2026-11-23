// template.marko
const $template = "<div><!><!></div>";
const $walks = "D%b%l";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $input_start = $count;
function $setup($scope) {
	_text($scope["#text/0"], (() => {
		$count($scope, 0);
		return "";
	})());
}
const $input = ($scope, input) => $input_start($scope, input.start);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
