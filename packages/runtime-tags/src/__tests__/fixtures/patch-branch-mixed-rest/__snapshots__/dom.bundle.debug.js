// template.marko
const $template = "<main><div> </div><!><button>+</button></main>";
const $walks = "E l%b l";
const $if = /*@__PURE__*/ _if("#text/1", "<p>ok</p>");
const $count__OR__rest = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "rest", /*@__PURE__*/ _or(8, ($scope) => $if($scope, $scope.rest && $scope.count > 1 ? 0 : 1)));
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/5", $count__OR__rest);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $known = ($scope, known) => _text($scope["#text/0"], known);
const $rest = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "rest", $count__OR__rest);
const $input = ($scope, input) => {
	$rest($scope, (({ known, ...rest }) => rest)(input));
	$known($scope, input.known);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
