// template.marko
const $Body_content__walks = "b%c";
const $Body_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._._;
	$Body_content__setup($scope["#childScope/0"]);
};
const $for_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $if_content__setup);
const $for_content__show = _resumed["__tests__/template.marko_3_show#0:6/patch"] = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_show#0:6/init", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1)));
const $for_content__setup = $for_content__show;
const $await_content__input_w__OR__r = _resumed["__tests__/template.marko_2_input_w#0:5_r#2/patch"] = _with_branches(/*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill1/unpatched", "input_w", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_w#0:5_r#2/init", 3, ($scope) => _text($scope["#text/0"], $scope.r + $scope._._.input_w)), "input_w/8", 0));
const $await_content__input_w = /*@__PURE__*/ _closure_get("input_w/8", $await_content__input_w__OR__r, ($scope) => $scope._._, "__tests__/template.marko_2_input_w#0:5/subscribe");
const $await_content__setup = $await_content__input_w;
const $await_content__r = /*@__PURE__*/ _const("r", $await_content__input_w__OR__r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ", $await_content__setup);
const $Body_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Body_content__input_v = _resumed["__tests__/template.marko_1_input_v#0:4/patch"] = _with_branches(/*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_v", /*@__PURE__*/ _closure_get("input_v/7", ($scope) => $Body_content__await_promise($scope, Promise.resolve($scope._.input_v)), 0, "__tests__/template.marko_1_input_v#0:4/subscribe"), 0));
const $Body_content__setup = ($scope) => {
	$Body_content__input_v($scope);
	$await_content($scope);
};
const $show = /*@__PURE__*/ _let("show/6", $for_content__show);
const $input_show = $show;
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
function $setup($scope) {
	$for($scope, [[1]]);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_v__closure = /*@__PURE__*/ _closure($Body_content__input_v);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_v", $input_v__closure);
const $input_w__closure = /*@__PURE__*/ _closure($await_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
