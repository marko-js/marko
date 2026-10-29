// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Body_content__setup($scope["#childScope/0"]);
};
const $for_content__v = ($scope, v) => $Body_content__v($scope["#childScope/0"], v);
const $for_content__$params = ($scope, $params3) => $for_content__v($scope, $params3[0]);
const $Body_content__input_w__OR__v = _resumed["__tests__/template.marko_1_input_w#0:4_v#3/patch"] = _with_branches(/*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "v", /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope.v + $scope._.input_w)), "input_w/6", 0)));
const $Body_content__input_w = /*@__PURE__*/ _closure_get("input_w/6", $Body_content__input_w__OR__v, 0, "__tests__/template.marko_1_input_w#0:4/subscribe");
const $Body_content__setup = $Body_content__input_w;
const $Body_content__v = /*@__PURE__*/ _const("v", $Body_content__input_w__OR__v);
const $Body_content__$params = ($scope, $params2) => $Body_content__$temp($scope, $params2[0]);
const $Body_content__$temp = ($scope, $temp) => $Body_content__v($scope, $temp.v);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items]));
const $input_items = $items;
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($Body_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
