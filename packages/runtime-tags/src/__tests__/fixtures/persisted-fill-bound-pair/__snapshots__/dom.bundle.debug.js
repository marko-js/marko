// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__fa__OR__fb = /*@__PURE__*/ _fill_join_if("__tests__/template.marko1", "fb", /*@__PURE__*/ _fill_join_if("__tests__/template.marko0", "fa", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.fa() + ":" + $scope._.fb())), "#text/0", 0), "#text/0", 0);
const $if_content__fa = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__fa__OR__fb);
const $if_content__setup = ($scope) => {
	$if_content__fa._($scope);
	$if_content__fb._($scope);
};
const $if_content__fb = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__fa__OR__fb);
const $fa2 = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "fa", $if_content__fa);
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => $fa2($scope, $fa($scope)));
const $fb2 = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "fb", $if_content__fb);
const $input_b = /*@__PURE__*/ _const("input_b", ($scope) => $fb2($scope, $fb($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/8", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
function $fa($scope) {
	return () => $scope.input_a;
}
function $fb($scope) {
	return () => $scope.input_b;
}
_resume("__tests__/template.marko_0/fa", $fa);
_resume("__tests__/template.marko_0/fb", $fb);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
