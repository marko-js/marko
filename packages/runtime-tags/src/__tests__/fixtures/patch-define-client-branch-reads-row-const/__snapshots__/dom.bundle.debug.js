// tags/child.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__v = /*@__PURE__*/ _closure_get_patch("__tests__/tags/child.marko_3_v#1:4/subscribe", "v/8", ($scope) => _text($scope["#text/0"], $scope._._.v), ($scope) => $scope._._, "__tests__/tags/child.marko_1_v#4/subscribers", 0);
const $if_content__setup = $if_content__v;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params3) => $D_content__$temp($scope, $params3[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $for_content__v__closure = /*@__PURE__*/ _closure($if_content__v);
const $for_content__v = /*@__PURE__*/ _const("v", $for_content__v__closure);
const $for_content__input_v__OR__item = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_1_input_v#0:4_item#2/setup", 3, ($scope) => $for_content__v($scope, `${$scope.item}${$scope._.input_v}!`));
const $for_content__input_v = /*@__PURE__*/ _for_closure_patch("__tests__/tags/child.marko_1_input_v#0:4/setup", "#text/0", $for_content__input_v__OR__item, 6);
const $for_content__setup = ($scope) => {
	$for_content__input_v._($scope);
	$for_content__input_on._($scope);
	$scope["#childScope/0"]._ = $scope;
};
const $for_content__input_on = /*@__PURE__*/ _for_closure_patch("__tests__/tags/child.marko_1_input_on#0:5/setup", "#text/0", ($scope) => $D_content__on($scope["#childScope/0"], $scope._.input_on), 7);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__input_v__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks), $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_v$1($scope, input.v);
	$input_on($scope, input.on);
};
const $input_v$1 = /*@__PURE__*/ _const("input_v", $for_content__input_v);
const $input_on = /*@__PURE__*/ _const("input_on", $for_content__input_on);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $on = _let("on/6", ($scope) => $input_on($scope["#childScope/1"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/1"], input_v);
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/1"], input_items);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
