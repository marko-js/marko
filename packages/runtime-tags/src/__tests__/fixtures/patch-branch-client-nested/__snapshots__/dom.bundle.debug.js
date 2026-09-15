// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p>promo</p>");
const $if_content__input_show = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_show", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_show ? 0 : 1)));
const $if_content__setup = $if_content__input_show;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $if($scope, $scope.count > 1 ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_show($scope, input.show);
const $input_show = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_show", $if_content__input_show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
