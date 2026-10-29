// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__input_w__OR__r = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.r + $scope._._.input_w));
const $await_content__input_w = _resumed["__tests__/template.marko_2_input_w#0:4/patch"] = _with_branches(/*@__PURE__*/ _closure_get("input_w/6", $await_content__input_w__OR__r, ($scope) => $scope._._, "__tests__/template.marko_2_input_w#0:4/subscribe"));
const $await_content__setup = $await_content__input_w;
const $await_content__r = /*@__PURE__*/ _const("r", $await_content__input_w__OR__r);
const $await_content__$params = ($scope, $params3) => $await_content__r($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__setup = $await_content;
const $for_content__v = ($scope, v) => $for_content__await_promise($scope, Promise.resolve(v));
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $for($scope, [$scope.items]));
const $input_items = $items;
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($await_content__input_w);
const $input_w = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_w", $input_w__closure));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
