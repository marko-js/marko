// template.marko
const $badge_content__walks = "D%b%l", $badge_content__template = "<em><!><!></em>";
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $badge_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $badge_content__b = ($scope, b) => _text($scope["#text/1"], b);
const $badge_content__tag_params = ($scope, $params2) => {
	$badge_content__a($scope, $params2[0]);
	$badge_content__b($scope, $params2[1]);
};
const $if_content__input_parts = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_parts", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $badge_content__tag_params($scope["#childScope/0"], [...$scope._.input_parts])));
const $if_content__setup = $if_content__input_parts;
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($badge_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($badge_content__walks), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_parts($scope, input.parts);
const $input_parts = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_parts", $if_content__input_parts);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
