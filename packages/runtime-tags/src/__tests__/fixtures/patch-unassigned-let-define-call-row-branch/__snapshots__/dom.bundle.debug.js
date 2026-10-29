// template.marko
const $Body_content__walks = "b%c";
const $Body_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__setup = ($scope) => $scope["#childScope/0"]._ = $scope._;
const $for_content__v = ($scope, v) => $Body_content__v($scope["#childScope/0"], v);
const $for_content__$params = ($scope, $params3) => $for_content__v($scope, $params3[0]);
const $if_content__input_w__OR__v = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill1", "v", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.v + $scope._._.input_w)), "#text/0", 0);
const $if_content__input_w = _resumed["__tests__/template.marko_2_input_w#0:4/patch"] = _with_branches(/*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/6", $if_content__input_w__OR__v, ($scope) => $scope._._, "__tests__/template.marko_2_input_w#0:4/subscribe"), 0));
const $if_content__setup = ($scope) => {
	$if_content__input_w($scope);
	$if_content__v._($scope);
};
const $if_content__v = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_w__OR__v);
const $Body_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $Body_content__v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "v", ($scope) => {
	$Body_content__if($scope, $scope.v ? 0 : 1);
	$if_content__v($scope);
});
const $Body_content__$params = ($scope, $params2) => $Body_content__$temp($scope, $params2[0]);
const $Body_content__$temp = ($scope, $temp) => $Body_content__v($scope, $temp.v);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items]));
const $input_items = $items;
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($if_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
