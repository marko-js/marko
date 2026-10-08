// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__label = ($scope, label) => _text($scope["#text/0"], label());
const $if_content__mk = /*@__PURE__*/ _const("mk", ($scope) => $if_content__label($scope, (fn = $scope.mk) => fn()));
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__mk($scope, () => $scope._.input_title)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
