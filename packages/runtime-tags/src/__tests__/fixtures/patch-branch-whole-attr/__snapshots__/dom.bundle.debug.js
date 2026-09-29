// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _attr($scope["#p/0"], "data-all", JSON.stringify($scope._.input))));
const $if_content__setup = $if_content__input;
const $if = /*@__PURE__*/ _if("#text/0", "<p>x</p>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input", $if_content__input);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
