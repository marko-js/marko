// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p>on</p>", 0, 0, "<span>off</span>");
const $if_content__input_on = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_on", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_on ? 0 : 1)));
const $if_content__setup = $if_content__input_on;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_on($scope, input.on);
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_on", $if_content__input_on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
