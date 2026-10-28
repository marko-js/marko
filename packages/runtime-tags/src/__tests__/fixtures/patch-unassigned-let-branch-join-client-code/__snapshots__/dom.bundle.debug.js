// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $if_content__input_name__OR__uid = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_name#0:7_uid#0:8/init", 1, ($scope) => _text($scope["#text/0"], $scope._.uid + "-" + $scope._.input_name));
const $if_content__input_name = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_name__OR__uid);
const $if_content__setup = ($scope) => {
	$if_content__input_name._($scope);
	$if_content__uid._($scope);
};
const $if_content__uid = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_name__OR__uid);
const $uid = _let("uid/8", $if_content__uid);
const $input_id = $uid;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $n = /*@__PURE__*/ _let("n/9", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_show($scope, input.show);
	$input_name($scope, input.name);
};
const $input_name = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_name", $if_content__input_name));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
