// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__input_w = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_w", /*@__PURE__*/ _closure_get("input_w/7", ($scope) => _text($scope["#text/0"], $scope._._._.input_w), ($scope) => $scope._._._, "__tests__/template.marko_3_input_w#0:5/subscribe"), 0);
const $if_content2__setup = $if_content2__input_w;
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $Panel_content__open = ($scope, open) => $Panel_content__if($scope, open ? 0 : 1);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__open($scope, $temp.open);
const $if_content__k = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "k/2", ($scope) => $Panel_content__open($scope["#childScope/0"], $scope.k));
const $if_content__input_n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_n#0:4/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_n", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__k($scope, $scope._.input_n))));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__k($scope, 0);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_n._($scope);
	$scope["#childScope/0"]._ = $scope;
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>x</button>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Panel_content__walks), $if_content__setup);
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_n($scope, input.n);
	$input_w($scope, input.w);
};
const $input_n = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_n", $if_content__input_n);
const $input_w__closure = /*@__PURE__*/ _closure($if_content2__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
