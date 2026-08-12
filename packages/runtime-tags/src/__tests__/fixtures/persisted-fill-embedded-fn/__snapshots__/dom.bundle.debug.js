// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__bag = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "bag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.bag.get())));
const $if_content__setup = $if_content__bag;
const $bag = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "bag", $if_content__bag);
const $mk2 = ($scope, mk) => $bag($scope, { get: mk });
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $mk2($scope, $mk($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $mk = ($scope) => () => $scope.input_title;
_resume("__tests__/template.marko_0/mk", $mk);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
