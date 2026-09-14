// template.marko
const $template = "<main><div> </div><!><button>+</button></main>";
const $walks = "E l%b l";
const $if_content__input_html = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_html", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _html($scope, $scope._.input_html, "#text/0")));
const $if_content__setup = $if_content__input_html;
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => $if($scope, $scope.count ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_html = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_html", ($scope) => {
	$if_content__input_html($scope);
	_html($scope, $scope.input_html, "#text/0");
}, $if_content__input_html);
const $input = ($scope, input) => $input_html($scope, input.html);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
