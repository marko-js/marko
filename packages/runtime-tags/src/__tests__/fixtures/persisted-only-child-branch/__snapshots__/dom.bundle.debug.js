// template.marko
const $template = "<main><div></div><button>c <!></button></main>";
const $walks = "D b Db%m";
const $if_content__input_msg = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_msg));
const $if_content__setup = $if_content__input_msg;
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#div/0", "<span>hi <!></span>", "Db%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_msg($scope, input.msg);
};
const $input_msg = /*@__PURE__*/ _const("input_msg", $if_content__input_msg);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
