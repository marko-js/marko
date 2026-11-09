// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_html = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _html($scope, $scope._.input_html, "#text/1"));
const $if_content__setup = ($scope) => {
	$if_content__input_html._($scope);
	$if_content__open._($scope);
};
const $if_content__show = /*@__PURE__*/ _show("#text/2", "#text/0");
const $if_content__open = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__show($scope, $scope._.open));
const $open = /*@__PURE__*/ _let("open/5", $if_content__open);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!> <!><!>", "b%b b%", $if_content__setup);
const $input_html = /*@__PURE__*/ _const("input_html", ($scope) => {
	$if($scope, $scope.input_html ? 0 : 1);
	$if_content__input_html($scope);
});
const $input = ($scope, input) => $input_html($scope, input.html);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
