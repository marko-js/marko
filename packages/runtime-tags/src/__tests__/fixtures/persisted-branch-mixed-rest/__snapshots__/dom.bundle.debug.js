// template.marko
const $template = "<main><div> </div><!><button>+</button></main>";
const $walks = "E l%b l";
const $if = /*@__PURE__*/ _if("#text/1", "<p>ok</p>");
const $count__OR__rest = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "rest", /*@__PURE__*/ _or(8, ($scope) => $if($scope, $scope.rest && $scope.count > 1 ? 0 : 1)));
const $count = /*@__PURE__*/ _let("count/5", $count__OR__rest);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $known = ($scope, known) => _text($scope["#text/0"], known);
const $rest = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "rest", $count__OR__rest);
const $input = ($scope, input) => {
	(({ known, ...rest }) => $rest($scope, rest))(input);
	$known($scope, input.known);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
