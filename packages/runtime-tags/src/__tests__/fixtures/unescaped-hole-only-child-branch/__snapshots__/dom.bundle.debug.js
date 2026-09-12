// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_html = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _html($scope, $scope._.input_html, "#text/0"));
const $if_content__setup = $if_content__input_html;
const $if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_html($scope, input.html);
const $input_html = /*@__PURE__*/ _const("input_html", $if_content__input_html);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
