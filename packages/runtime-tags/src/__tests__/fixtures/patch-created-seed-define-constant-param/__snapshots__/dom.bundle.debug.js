// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__v = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_v#1:1/subscribe", "v/6", ($scope) => _text($scope["#text/0"], $scope._._.v), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__v;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $if_content__v__closure = /*@__PURE__*/ _closure($if_content2__v);
const $if_content__v = /*@__PURE__*/ _const("v", $if_content__v__closure);
const $if_content__input_v = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_v#0:4/setup", "#text/0", 0, ($scope) => $if_content__v($scope, `${$scope._.input_v}!`));
const $if_content__setup = ($scope) => {
	$if_content__input_v._($scope);
	$scope["#childScope/0"]._ = $scope;
	$D_content__on($scope["#childScope/0"], true);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
};
const $input_v = /*@__PURE__*/ _const("input_v", $if_content__input_v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
