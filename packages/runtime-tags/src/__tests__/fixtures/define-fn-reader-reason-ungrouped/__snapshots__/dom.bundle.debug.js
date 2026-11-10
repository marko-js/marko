// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks);
const $setup = ($_) => {};
const $if_content2__w__OR__y = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.y + $scope._._.w));
const $if_content2__y = /*@__PURE__*/ _let("y/2", $if_content2__w__OR__y);
const $if_content2__v__OR__f = /*@__PURE__*/ _or(1, ($scope) => $if_content2__y($scope, $scope._.f($scope._._.v)));
const $if_content2__v = /*@__PURE__*/ _closure_get("v/8", $if_content2__v__OR__f, ($scope) => $scope._._, "__tests__/template.marko_3_v#1:5/subscribe");
const $if_content2__setup = ($scope) => {
	$if_content2__v($scope);
	$if_content2__w($scope);
	$if_content2__f._($scope);
};
const $if_content2__w = /*@__PURE__*/ _closure_get("w/9", $if_content2__w__OR__y, ($scope) => $scope._._, "__tests__/template.marko_3_w#1:6/subscribe");
const $if_content2__f = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__v__OR__f);
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $if_content__inner = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.inner ? 0 : 1));
const $if_content__f = /*@__PURE__*/ _const("f");
const $if_content__setup = ($scope) => {
	$if_content__inner._($scope);
	$if_content__f($scope, $f);
};
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $D_content__show = ($scope, show) => $D_content__if($scope, show ? 0 : 1);
const $D_content__tag_input_inner = /*@__PURE__*/ _const("inner", $if_content__inner);
const $D_content__tag_input_v__closure = /*@__PURE__*/ _closure($if_content2__v);
const $D_content__tag_input_v = /*@__PURE__*/ _const("v", $D_content__tag_input_v__closure);
const $D_content__tag_input_w__closure = /*@__PURE__*/ _closure($if_content2__w);
const $D_content__tag_input_w = /*@__PURE__*/ _const("w", $D_content__tag_input_w__closure);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => {
	$D_content__show($scope, $temp.show);
	$D_content__tag_input_inner($scope, $temp.inner);
	$D_content__tag_input_v($scope, $temp.v);
	$D_content__tag_input_w($scope, $temp.w);
};
const $input_show = ($scope, input_show) => $D_content__show($scope["#childScope/0"], input_show);
const $input_inner = ($scope, input_inner) => $D_content__tag_input_inner($scope["#childScope/0"], input_inner);
const $input_v = ($scope, input_v) => $D_content__tag_input_v($scope["#childScope/0"], input_v);
const $input_w = ($scope, input_w) => $D_content__tag_input_w($scope["#childScope/0"], input_w);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_inner($scope, input.inner);
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
function $f(x) {
	return x + "!";
}
_resumed["__tests__/template.marko_2/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
