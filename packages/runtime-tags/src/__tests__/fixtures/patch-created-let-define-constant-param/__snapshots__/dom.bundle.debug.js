// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__x = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_x#1:1/subscribe", "x/2", ($scope) => _text($scope["#text/0"], $scope._._.x), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__x;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $if_content__x__closure = /*@__PURE__*/ _closure($if_content2__x);
const $if_content__x = _fill_let_resume("__tests__/template.marko_1_x#1/fill", "x/1", $if_content__x__closure);
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope;
	$D_content__on($scope["#childScope/0"], true);
	$if_content__x($scope, 1);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
