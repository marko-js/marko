// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Outer_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Outer_content__walks);
const $if_content__v = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_v#1:3/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "v", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.v))));
const $if_content__setup = $if_content__v;
const $Outer_content__v = ($scope, v) => $Inner_content__tag_input_v($scope["#childScope/0"], v);
const $Outer_content__show = ($scope, show) => $Inner_content__show($scope["#childScope/0"], show);
const $Outer_content__$params = ($scope, $params3) => $Outer_content__$temp($scope, $params3[0]);
const $Outer_content__$temp = ($scope, $temp2) => {
	$Outer_content__v($scope, $temp2.v);
	$Outer_content__show($scope, $temp2.show);
};
const $Inner_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Inner_content__show = ($scope, show) => $Inner_content__if($scope, show ? 0 : 1);
const $Inner_content__tag_input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "v", $if_content__v);
const $Inner_content__$params = ($scope, $params2) => $Inner_content__$temp($scope, $params2[0]);
const $Inner_content__$temp = ($scope, $temp) => {
	$Inner_content__tag_input_v($scope, $temp.v);
	$Inner_content__show($scope, $temp.show);
};
const $count = _let("count/5", ($scope) => $Outer_content__v($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $Outer_content__show($scope["#childScope/0"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
