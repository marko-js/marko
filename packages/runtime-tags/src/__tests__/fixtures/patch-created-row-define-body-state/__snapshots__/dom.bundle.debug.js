// template.marko
const $Info_content__walks = "b%c";
const $Info_content__template = "<!><!><!>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $placeholder_content__id = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "id", /*@__PURE__*/ _closure_get("id/9", ($scope) => _text($scope["#text/0"], $scope._.id), 0, "__tests__/template.marko_5_id#2:3/subscribe"), 1);
const $placeholder_content__setup = $placeholder_content__id;
const $placeholder_content = _content("__tests__/template.marko_5*content", "loading <!>", "b%", $placeholder_content__setup);
const $await_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_count#0:6/init", /*@__PURE__*/ _closure_get("count/8", ($scope) => _text($scope["#text/2"], $scope._._._.count), ($scope) => $scope._._._, "__tests__/template.marko_4_count#0:6/subscribe"));
const $await_content__setup = ($scope) => {
	$await_content__count($scope);
	$await_content__id($scope);
};
const $await_content__id = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_id#2:3/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "id", /*@__PURE__*/ _closure_get("id/9", ($scope) => _text($scope["#text/0"], $scope._._.id), ($scope) => $scope._._, "__tests__/template.marko_4_id#2:3/subscribe"), 0));
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!>:<!></p>", "D%c%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__value = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_value#2:4/init", /*@__PURE__*/ _closure_get("value/10", ($scope) => $try_content__await_promise($scope, $scope._.value), 0, "__tests__/template.marko_3_value#2:4/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__value($scope);
	$await_content($scope);
};
const $Info_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $Info_content__setup = ($scope) => $Info_content__try($scope);
const $Info_content__tag_input_id__closure = /*@__PURE__*/ _closure($await_content__id, $placeholder_content__id);
const $Info_content__tag_input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "id", $Info_content__tag_input_id__closure);
const $Info_content__tag_input_value__closure = /*@__PURE__*/ _closure($try_content__value);
const $Info_content__tag_input_value = /*@__PURE__*/ _const("value", $Info_content__tag_input_value__closure);
const $Info_content__$params = ($scope, $params2) => $Info_content__$temp($scope, $params2[0]);
const $Info_content__$temp = ($scope, $temp) => {
	$Info_content__tag_input_value($scope, $temp.value);
	$Info_content__tag_input_id($scope, $temp.id);
};
const $for_content__input_value = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_value#0:5/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_value", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $Info_content__tag_input_value($scope["#childScope/0"], $scope._.input_value))));
const $for_content__setup = ($scope) => {
	$for_content__input_value._($scope);
	$scope["#childScope/0"]._ = $scope._;
	$Info_content__setup($scope["#childScope/0"]);
};
const $for_content__item = ($scope, item) => $Info_content__tag_input_id($scope["#childScope/0"], item);
const $for_content__$params = ($scope, $params4) => $for_content__item($scope, $params4[0]);
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = _let("count/6", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_value($scope, input.value);
};
const $input_value = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_value", $for_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
