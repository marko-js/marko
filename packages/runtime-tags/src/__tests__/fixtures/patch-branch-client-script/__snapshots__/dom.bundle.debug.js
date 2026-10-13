// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_title__script = _script("__tests__/template.marko_1_input_title#0:4", ($scope) => document.querySelector("main").dataset.title = $scope._.input_title);
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_title__script));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if("#text/0", "<p>big</p>", 0, $if_content__setup);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/5", ($scope) => $if($scope, $scope.count > 1 ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
