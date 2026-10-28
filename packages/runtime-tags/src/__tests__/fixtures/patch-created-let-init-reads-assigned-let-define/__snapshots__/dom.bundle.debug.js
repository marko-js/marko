// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<span> </span>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const WORD = "w";
const $Body_content__v__OR__w = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill3", "w", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_v#3_w#4/init", 5, ($scope) => _text($scope["#text/0"], $scope.v + $scope.w)));
const $Body_content__v = /*@__PURE__*/ _const("v", $Body_content__v__OR__w);
const $Body_content__w = /*@__PURE__*/ _const("w", $Body_content__v__OR__w);
const $Body_content__$params = ($scope, $params2) => $Body_content__$temp($scope, $params2[0]);
const $Body_content__$temp = ($scope, $temp) => {
	$Body_content__v($scope, $temp.v);
	$Body_content__w($scope, $temp.w);
};
const $if_content__input_a__OR__x = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_a#0:4_x#4/init", 5, ($scope) => _text($scope["#text/3"], $scope.x + $scope._.input_a)), "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__input_a__OR__x($scope);
	_text($scope["#text/1"], $scope._.input_a);
})));
const $if_content__y = _fill_resume("__tests__/template.marko_fill2", /*@__PURE__*/ _let("y/6", ($scope) => $Body_content__v($scope["#childScope/0"], $scope.y)));
const $if_content__x = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "x/4", ($scope) => {
	$if_content__input_a__OR__x($scope);
	$if_content__y($scope, $scope.x);
}, $if_content__input_a__OR__x);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/2"], "click", function() {
	$if_content__x($scope, 2);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$Body_content__w($scope["#childScope/0"], WORD);
	$if_content__x($scope, 1);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p><button> </button>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&D l D l`)($Body_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
